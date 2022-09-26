import React from 'react'
import FieldFormikComp from '../formik/FieldFormikComp'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {journalAxios as axios} from '../../../components/axios'

const initialValues = {
    id: '',
    "url": '',
    "name": ''
};

const allData = [
    {
        name: "id",
        label: "ID",
        classNameFormControl: "hidden",
        type: "text",
        options: {disabled: true}
    },
    {
        name: "url",
        label: "Посилання",
        type: "text",
        options: {}
    },
    {
        name: "name",
        label: "Назва",
        type: "text",
        options: {}
    },
    {
        name: "isOnline",
        label: "Онлайн",
        type: "checkbox",
        options: {}
    }
]

const validationSchema = Yup.object({
    // url: Yup.string().required('Required').url('Неправильне посилання'),
    // name: Yup.string().required('Required'),
    // imgFile: Yup.mixed().test('HasFile', "Потрібен файл!", value => value && typeof value.arrayBuffer === 'function')
});

function JournalForm(props) {
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

export default JournalForm;