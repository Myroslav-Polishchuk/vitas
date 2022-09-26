import React from 'react'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {articlesAxios as axios} from '../../../components/axios'


import FieldFormikComp from '../formik/FieldFormikComp'
import FieldArrayFormikComp from '../formik/FieldArrayFormikComp';

const initialValues = {
    id: '',
    main_title: '',
    main_fullText: '',
    meta_name: '',
    meta_code: '',
    meta_workplace: '',
    resume_keywords: '',
    resume_paragraphs: '',
    references: '',
    categoryIDs: [''],
    meta_authors: [''],
    journalID: '',
    journal_number: '',
    journal_year: '',
    journal_pages: '',
    isOnline: false,
    date: '',
    advertisingID: '',
    fileID: ''
}

const allData = [
    {
        name: 'id',
        label: "ID",
        classNameFormControl: "hidden",
        tooltip: "Заповнюється системою автомітично",
        type: 'text',
        options: {disabled: true}
    },
    {
        name: 'journalID',
        label: 'Журнал',
        tooltip: "Інформацію слід вводити номером, який присвоєний журналу в системі",
        type: 'text',
        options: {}
    },
    {
        name: 'journal_number',
        label: 'Номер журналу',
        tooltip: "",
        type: 'text',
        options: {}
    },
    {
        name: 'journal_year',
        label: 'Рік журналу',
        tooltip: "",
        type: 'text',
        options: {}
    },
    {
        name: 'journal_pages',
        label: 'Сторінки',
        tooltip: "",
        type: 'text',
        options: {}
    },
    {
        name: 'meta_code',
        label: 'DOI',
        tooltip: "Інформацію слід вводити у форматі: https://doi.org/10.30978/MG-2021-1-5",
        type: 'text',
        options: {}
    },
    {
        name: 'main_title',
        label: "Заголовок",
        tooltip: "Інформацію слід вводити мовою оригіналу",
        type: 'text',
        as: 'textarea',
        className: 'small',
        options: {}
    },
    {
        name: 'resume_paragraphs',
        label: 'Резюме',
        tooltip: "Виділення жирним слів чи словосполучень здійснюється через код <b>слово</b>",
        className: 'medium',
        as: "textarea",
        type: 'text',
        options: {}
    },
    {
        name: 'resume_keywords',
        label: "Ключові слова",
        tooltip: "Інформацію слід вводити мовою оригіналу",
        type: 'text',
        className: 'small',
        as: 'textarea',
        options: {}
    },
    {
        name: 'fileID',
        label: "Файл статті",
        tooltip: "Інформацію слід номером - ID файлу",
        type: 'text',
        options: {}
    },
    {
        name: 'showPDF',
        label: "Показувати PDF-версію статті",
        tooltip: "Показувати PDF статті, замість основного тексту",
        type: 'checkbox',
        options: {}
    },
    {
        name: 'main_fullText',
        label: "Текст",
        tooltip: "Малюнки додаються в текст кодом: img(http://testback.fun/img/1tabl1.jpg)",
        type: 'text',
        className: "medium",
        as: "textarea",
        options: {}
    },
    {
        name: "references",
        label: "Список літератури",
        tooltip: "Має вводитися пронумерованим",
        type: "text",
        className: "medium",
        as: "textarea",
        options: {}
    },
    {
        name: 'advertisingID',
        label: 'Банер у правій колонці',
        tooltip: "Інформацію слід вводити номером, який присвоєний малюнку в системі",
        type: 'text',
        options: {}
    },
    {
        name: 'date',
        label: 'Дата',
        tooltip: "Дата створення",
        type: 'date',
        options: {}
    },
    {
        name: 'isOnline',
        label: "Виставлено онлайн",
        tooltip: "Поставити галочку, якщо має бути онлайн",
        type: 'checkbox',
        options: {}
    },
];

const validationSchema = Yup.object({

});

function ArticleForm(props) {
    return <FormikForm
        ID={props.ID}
        initialValues={initialValues}
        axios={axios}
        validationSchema={validationSchema || {}}
        tableName={props.tableName}
        translate={props.translate}
        userRule={props.userRule}
        previewLink={props.previewLink}
    >
        {allData.map(data => <FieldFormikComp {...data} key={data.name}/>)}
        <FieldArrayFormikComp
            name='meta_authors'
            label='Автори'
            tooltip="Інформацію слід вводити номером, який присвоєний автору в системі"
        />
        <FieldArrayFormikComp
            name='categoryIDs'
            label='Спеціальності'
            tooltip="Інформацію слід вводити номером, який присвоєний спеціальності в системі"
        />
    </FormikForm>
}

export default ArticleForm;