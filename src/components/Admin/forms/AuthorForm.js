import React from 'react'
import FieldFormikComp from '../formik/FieldFormikComp'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {authorsAxios as axios} from '../../../components/axios'


const initialValues = {
    "id": '',
    "firstName": '',
    "secondName": '',
    "thirdName": '',
    "workplace": ''
}

const allData = [
    {
        name: "id",
        label: "ID",
        classNameFormControl: "hidden",
        options: {disabled: true}
    },
    {
        name: "secondName",
        label: "Прізвище",
        type: "text",
        options: {}
    },
    {
        name: "firstName",
        label: "Ім'я",
        type: "text",
        options: {}
    },
    {
        name: "thirdName",
        label: "По-Батькові",
        type: "text",
        options: {}
    },
    {
        name: "workplace",
        label: "Місце роботи",
        type: "text",
        as: "textarea",
        className: 'small',
        options: {}
    }
]

const validationSchema = Yup.object({
    // "firstName": Yup.string(),
    // "secondName": Yup.string(),
    // "thirdName": Yup.string(),
    // "workplace": Yup.string()
});

function AuthorForm(props) {
    return <FormikForm
        ID={props.ID}
        initialValues={initialValues}
        axios={axios}
        validationSchema={validationSchema}
        tableName={props.tableName}
        translate={props.translate}
        userRule={props.userRule}
    >
        {allData.map(data => <FieldFormikComp {...data}/>)}
    </FormikForm>
}

export default AuthorForm;