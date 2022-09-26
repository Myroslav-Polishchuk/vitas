import React from 'react'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {newsAxios as axios} from '../../../components/axios'

import FieldFormikComp from '../formik/FieldFormikComp'

const initialValues = {
    id: '',
    "title": '',
    "previewText": '',
    "mainText": '',
    "isOnline": false,
    "date": '',
    "isMainNews": false,
    mainImg: ''
}

const allData = [
    {
        name: "id",
        label: "ID",
        classNameFormControl: "hidden",
        type: 'text',
        options: {disabled: true}
    },
    {
        name: "title",
        label: "Заголовок",
        className: 'small',
        type: 'text',
        as: "textarea",
        options: {}
    },
    {
        name: "previewText",
        label: "Превю-текст",
        type: 'text',
        as: "textarea",
        options: {}
    },
    {
        name: "mainText",
        label: "Основний текст",
        tooltip: "Малюнки додаються в текст кодом: img(http://testback.fun/img/1tabl1.jpg). Youtube-відео добавляються кодом: youtube(https://www.youtube.com/embed/XPoASa311ns). Використовувати тільки youtube-embed-посилання",
        type: 'text',
        as: "textarea",
        options: {}
    },
    {
        name: "isOnline",
        label: "Онлайн",
        type: 'checkbox',
        options: {}
    },
    {
        name: "date",
        label: "Дата створення",
        type: 'date',
        options: {}
    },
    {
        name: "isMainNews",
        label: "Актуальна новина",
        type: 'checkbox',
        options: {}
    },
    {
        name: "imgID",
        label: "Актуальний малюнок",
        type: 'text',
        options: {}
    }
];

const validationSchema = Yup.object({

});

function NewsForm(props) {
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

export default NewsForm;