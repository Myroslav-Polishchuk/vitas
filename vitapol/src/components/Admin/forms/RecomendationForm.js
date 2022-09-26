import React from 'react'
import FormikForm from './FormikForm';
import * as Yup from 'yup';
import FieldFormikComp from '../formik/FieldFormikComp'
import {recomendationAxios as axios} from '../../../components/axios'

import FieldArrayFormikComp from '../formik/FieldArrayFormikComp';

const initialValues = {
    id: '',
    name: '',
    url: '',
    isOnline: false,
    date: '',
    text: '',
    fileID: '',
    categoryIDs: ['']
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
        name: "isOnline",
        label: "Онлайн",
        type: "checkbox",
        options: {}
    },
    {
        name: "date",
        label: "Дата створення",
        type: "date",
        options: {}
    },
    {
        name: "text",
        label: "Назва",
        type: "text",
        className: "small",
        as: "textarea",
        options: {}
    },
    {
        name: "fileID",
        label: "Файл",
        type: "text",
        options: {}
    }
];

const validationSchema = Yup.object({

});

function RecomendationForm(props) {
    return <FormikForm
        ID={props.ID}
        initialValues={initialValues}
        axios={axios}
        validationSchema={validationSchema || {}}
        tableName={props.tableName}
        translate={props.translate}
        userRule={props.userRule}
    >
        {allData.map(data => <FieldFormikComp {...data}/>)}
        <FieldArrayFormikComp
            name='categoryIDs'
            label='Спеціальності'
            tooltip="Інформацію слід вводити номером, який присвоєний спеціальності в системі"
        />
    </FormikForm>
}

export default RecomendationForm;