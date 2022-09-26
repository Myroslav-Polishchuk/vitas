import React from 'react'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {videoAxios as axios} from '../../../components/axios'

import FieldFormikComp from '../formik/FieldFormikComp'

const initialValues = {
    id: '',
    title: '',
    src: '',
    embedURL: '',
    previewImgSrc: '',
    previewText: '',
    isOnline: false,
    date: '',
    mainText: '',
    categoryID: ''
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
        label: "Назва",
        type: 'text',
        className: "small",
        as: "textarea",
        options: {}
    },
    {
        name: "src",
        label: "Youtube URL",
        type: 'text',
        options: {}
    },
    {
        name: "embedURL",
        label: "Embed Youtube URL",
        type: 'text',
        options: {}
    },
    {
        name: "previewImgSrc",
        label: "Preview Youtube Image URL: http://www.get-youtube-thumbnail.com/ -> hqdefault.jpg",
        type: 'text',
        options: {}
    },
    {
        name: "previewText",
        label: "Превю-текст для головної сторінки та розділу відео",
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
        name: "mainText",
        label: "Основний текст на сторінці самого відео",
        type: 'text',
        as: "textarea",
        options: {}
    },
    {
        name: "categoryID",
        label: "Спеціалізація",
        type: "text",
        options: {}
    }
];

const validationSchema = Yup.object({
    // title: Yup.string().required(),
    // src: Yup.string().required(),
    // embedURL: Yup.string().required(),
    // previewImgSrc: Yup.string().required(),
    // previewText: Yup.string().required(),
    // isOnline: Yup.boolean(),
    // date: Yup.string(),
    // mainText: Yup.string().required(),
    // categoryID: Yup.number().required().required('Це поле обоввязкове')
});

function VideoForm(props) {
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

export default VideoForm;