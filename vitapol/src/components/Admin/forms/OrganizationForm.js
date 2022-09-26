import React from 'react'
import FieldFormikComp from '../formik/FieldFormikComp'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {organizationsAxios as axios} from '../../../components/axios'

const initialValues = {
    id: '',
    "name": '',
    "url": '',
    "isOnline": false,
    "date": ''
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
        name: "name",
        label: "Назва",
        type: "text",
        className: "small",
        as: "textarea",
        options: {}
    },
    {
        name: "url",
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
        name: "date",
        label: "Дата",
        type: "date",
        options: {}
    },
    {
        name: "imgID",
        label: "Малюнок",
        type: "text",
        options: {}
    }
]

const validationSchema = Yup.object({
    // "name": Yup.string().required('Це обовязкове поле'),
    // "url": Yup.string().url('Це неправильне посилання').required('Це обовязкове поле'),
    // "isOnline": Yup.boolean(),
    // "date": Yup.string()
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