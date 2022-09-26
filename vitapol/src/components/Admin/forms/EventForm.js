import React from 'react'
import FieldFormikComp from '../formik/FieldFormikComp'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {activitiesAxios as axios} from '../../../components/axios'


const initialValues = {
    id: '',
    "name": '',
    "url": '',
    "isOnline": '',
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
        label: "Назва події",
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
        label: "Дата створення",
        type: "date",
        options: {}
    },
    {
        name: "imgID",
        label: "Картинки",
        type: "text",
        options: {}
    }
];

const validationSchema = Yup.object({
    // "name": Yup.string().required('Required'),
    // "url": Yup.string().required('Required').url('Неправильне посилання'),
    // "isOnline": Yup.boolean(),
    // "date": Yup.string()
});

function EventCategory(props) {
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
    </FormikForm>
}

export default EventCategory;