import React from 'react'
import FieldFormikComp from '../formik/FieldFormikComp'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {orderAxios as axios} from '../../../components/axios'


const initialValues = {
    id: '',
    componentName: '',
    additionalDataJSON: '',
    orderNumber: 0,
    isOnline: false
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
        name: "componentName",
        label: "Назва блоку",
        type: "text",
        options: {}
    },
    {
        name: "additionalDataJSON",
        label: "Технічна інформація (JSON)",
        type: "text",
        as: "textarea",
        options: {}
    },
    {
        name: "isOnline",
        label: "Онлайн",
        type: "checkbox",
        options: {}
    },
    {
        name: "orderNumber",
        label: "Порядковий номер",
        type: "text",
        options: {}
    },
    {
        name: "createdAt",
        label: "Дата створення",
        type: "text",
        options: {disabled: true}
    },
    {
        name: "updatedAt",
        label: "Дата оновлення",
        type: "text",
        options: {disabled: true}
    }
]

const validationSchema = Yup.object({
    // componentName: Yup.string().required('Це обовязкове поле'),
    additionalDataJSON: Yup.string().test('json', 'JSON не валідний', (value) => {
        try {
            JSON.parse(value);
            return true;
        } catch (error) {
            return false;
        }
    }),
    // orderNumber: Yup.number().required('Це поле обоввязкове'),
    // isOnline: Yup.boolean()
})

function OrganizationForm(props) {
    return <FormikForm
        ID={props.ID}
        tableName={props.tableName}
        initialValues={initialValues}
        axios={axios}
        validationSchema={validationSchema || {}}
        translate={props.translate}
        userRule={props.userRule}
    >
        {allData.map(data => <FieldFormikComp {...data}/>)}
    </FormikForm>
}

export default OrganizationForm;