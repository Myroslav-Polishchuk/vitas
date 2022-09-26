import React, {useState, useMemo, useCallback, useEffect} from 'react'
import {
    Formik,
    useFormikContext
} from 'formik';
import Form from '../formik/Form';
import dateFormat from 'dateformat';

const prepareDataForSending = (submitValues) => {
    const values = {...submitValues};

    delete values.post;
    delete values.delete;
    delete values.put;

    Object.keys(values).forEach(key => {
        if (key === 'date' && values[key]) {
            if (Object.prototype.toString.call(values[key]) === "[object Date]" && !isNaN(values[key].getTime())) {
                values[key] = new Date(values[key]);
            } else if ((typeof values[key] === 'string') && values[key].length === 10) {
                const dateStringArr = values[key].split('-');
                const dateNumberArr = [+dateStringArr[0], +dateStringArr[1] - 1, +dateStringArr[2]];
                values[key] = new Date(...dateNumberArr);
            } else if ((typeof values[key] === 'string')) {
                values[key] = new Date(values[key]);
            }
        } else if (!values[key] && typeof values[key] !== 'boolean') {
            delete values[key];
        }
    });

    return values;
}

const updateData = (data) => {
    if ('date' in data && data.date) {
        data.date = dateFormat(new Date(data.date), 'yyyy-mm-dd');
    }

    return data;
}

const initialSubmitValues = {
    delete: false,
    post: false,
    put: false
}

const ButtonSubmitClickHandler = (props) => {
    const {setFieldValue, submitForm} = useFormikContext();

    return <button id={props.id} onClick={(e) => {
        e.preventDefault();
        setFieldValue(props.id, true);
        submitForm();
    }}>{props.text}</button>
};

function FormikForm(props) {
    const [loadedData, setLoadedData] = useState({id: props.ID});
    const [message, setMessage] = useState('');
    const [isCreating, setIsCreating] = useState(!props.ID);
    const [isCreatingDone, setIsCreatingDone] = useState(false);

    useEffect(() => {
        if (isCreating && !loadedData.id && localStorage.getItem(props.tableName) && !isCreatingDone) {
            const localStorageData = JSON.parse(localStorage.getItem(props.tableName));

            setLoadedData(localStorageData);
            setIsCreatingDone(true);

            return;
        } else if (!loadedData.id) {
            return;
        }

        props.axios.get(`/form/${loadedData.id}`)
            .then((response) => {
                if (response.status === 200) {
                    setLoadedData(updateData(response.data));
                } else {
                    console.log('Advertising Error');
                }
            }).catch(err => {
                console.log(`Error Advertising get=>/form/${loadedData.id}. Error: ${err}`)
            });
    }, [setLoadedData, props.axios, loadedData.id, isCreating, props.tableName, isCreatingDone]);

    const initialValueReady = useMemo(() => {
        const values = {
            ...props.initialValues,
            ...initialSubmitValues,
            ...loadedData
        };

        return values;
    }, [loadedData, props.initialValues]);

    const onSubmit = useCallback((values, actions) => {
        const method = (values.post && 'post') || (values.delete && 'delete') || (values.put && 'put');

        const preparedValues = prepareDataForSending(values, loadedData);
        let contentType = Object.keys(preparedValues).some(key => ['imgFile', 'file'].indexOf(key) >= 0) ? "multipart/form-data" : "application/json";

        const formData = new FormData();
        Object.keys(preparedValues).forEach(key => formData.append(key, preparedValues[key]));

        props.axios({
            method: method,
            url: `/form`,
            data: formData,
            headers: { 'content-type': contentType }
        }).then((response) => {
            if (response.status === 200) {
                if (response.data.data) {
                    if (method === 'post') {
                        setLoadedData({});
                        actions.resetForm();
                    } else {
                        setLoadedData(updateData(response.data.data));
                    }
                    setIsCreating(false);
                }
                setMessage(response.data.resultBack);
                window.scrollTo(0, 0);

                setTimeout(() => {
                    setMessage('');
                }, 10000);
            } else {
                console.log('Advertising Error');
            }
        }).catch(err => {
            console.log(`Error Advertising get=>/form/${values.id}. Error: ${err}`)
        })
    }, [setLoadedData, setMessage, loadedData, props]);

    const ButtonsSubmit = useMemo(() => {
        if (!loadedData.id) {
            return <ButtonSubmitClickHandler id='post' text='Створити' />;
        } else if (props.userRule === 'delete') {
            return <>
                <ButtonSubmitClickHandler id='put' text='Оновити' />
                <ButtonSubmitClickHandler id='delete' text='Видалити' />
            </>;
        } else {
            return <ButtonSubmitClickHandler id='put' text='Оновити' />
        }
    }, [loadedData, props.userRule]);

    return <>
        {message && <h1 className="message-result">{message}</h1>}
        <Formik
            initialValues={initialValueReady}
            validationSchema={props.validationSchema || {}}
            onSubmit={onSubmit}
            enableReinitialize={true}
        >
            {formikProps => <Form
                formikProps={formikProps}
                tableName={props.tableName}
                translate={props.translate}
                childrenForm={props.children}
                previewLink={props.previewLink}
                loadedDataID={loadedData.id}
                ButtonsSubmit={ButtonsSubmit}
                prepareDataForSending={prepareDataForSending}
                isCreating={isCreating}
            />}
        </Formik>
    </>
}

export default FormikForm;