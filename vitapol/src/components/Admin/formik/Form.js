import React, {useEffect} from 'react'

function Form(props) {
    useEffect(() => {
        return () => {
            if (props.isCreating) {
                const {values} = props.formikProps;
                const preparedValues = props.prepareDataForSending(values);

                localStorage.setItem(props.tableName, JSON.stringify(preparedValues));
            }
        }
    }, [props]);

    return <>
        <form className="formik-form">
            <h1 className="form-name">{props.translate}</h1>
            {props.childrenForm}
            {props.previewLink && <a className="preview" href={`/${props.previewLink}/${props.loadedDataID}`} target="_blank" rel="noopener noreferrer">Попередній огляд</a>}
            <div className="submitButtons">
                {props.ButtonsSubmit}
            </div>
        </form>
    </>
}

export default Form;