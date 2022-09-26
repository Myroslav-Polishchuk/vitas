import React from 'react'
import FieldFormikComp from '../formik/FieldFormikComp'
import FieldFormikFileComp from '../formik/FieldFormikFileComp'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {fileAxios as axios} from '../../../components/axios'


const initialValues = {
    id: '',
    "name": '',
    "link": ''
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
        label: "Довільна текстова назва",
        type: "text",
        options: {}
    },
    {
        name: "link",
        label: "URL - генерує система  з нашої БД",
        type: "text",
        options: {disabled: true}
    }
]

const validationSchema = Yup.object({
    // name: Yup.string().required('Required'),
});

function FileForm(props) {
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
        <FieldFormikFileComp name="file" type="file" />
    </FormikForm>
}

export default FileForm;