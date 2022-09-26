import React, {useCallback} from 'react'
import FieldFormikComp from '../formik/FieldFormikComp'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {advertisingAxios} from '../../../components/axios'


const initialValues = {
    id: '',
    link: '',
    type: '',
    isOnline: false,
    defaultAside: false,
    jsonData: '',
    imgID: ''
}

const allData = [
    {
        name: "id",
        label: "ID",
        classNameFormControl: "hidden",
        type: "text",
        options: {disabled: true}
    },
    {
        name: "link",
        label: "Посилання",
        type: "text",
        options: {}
    },
    {
        name: "isOnline",
        label: "Онлайн",
        type: "checkbox",
        options: {}
    },
    {
        name: "imgID",
        label: "ID картинки",
        type: "text",
        options: {}
    }
];

const validationSchema = Yup.object({
    // link: Yup.string("Повинен бути тестом").url('Посилання не правильне').required('Це поле обоввязкове'),
    // isOnline: Yup.boolean(),
    // imgID: Yup.number('Повинен бути номером').required('Це поле обоввязкове')
});

function AdvertisingForm(props) {
    const customHandleChange = useCallback((event) => {
        const adminFormDataJSON = localStorage.getItem('adminFormData');

        if (adminFormDataJSON) {
            const adminFormData = JSON.parse(adminFormDataJSON);

            if (!adminFormData[props.tableName]) {
                adminFormData[props.tableName] = {};
            }

            adminFormData[props.tableName][event.target.name] = event.target.value;
            localStorage.setItem('adminFormData', JSON.stringify(adminFormData));
        }
    }, [props.tableName]);

    return <FormikForm
        ID={props.ID}
        initialValues={initialValues}
        axios={advertisingAxios}
        validationSchema={validationSchema}
        tableName={props.tableName}
        translate={props.translate}
        userRule={props.userRule}
    >
        {allData.map(data => <FieldFormikComp {...data} handleChange={customHandleChange}/>)}
    </FormikForm>
}

export default AdvertisingForm;