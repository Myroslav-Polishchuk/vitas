import React from 'react'
import FieldFormikComp from '../formik/FieldFormikComp'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {articleReferenceAxios as axios} from '../../../components/axios'



const initialValues = {
    id: '',
    "reference": '',
    "order": ''
}

const allData = [
    {
        name: "id",
        type: "text",
        as: "textarea",
        options: {disabled: true}
    },
    {
        name: "reference",
        type: "text",
        as: "textarea",
        options: {}
    },
    {
        name: "order",
        type: "text",
        as: "textarea",
        options: {}
    }
]

const validationSchema = Yup.object({
    // reference: Yup.string().required('Required'),
    // order: Yup.number().required('')
});

function ArticleReferenceForm(props) {
    return <FormikForm
        ID={props.ID}
        initialValues={initialValues}
        axios={axios}
        validationSchema={validationSchema || {}}
        tableName={props.tableName}
        translate={props.translate}
    >
        {allData.map(data => <FieldFormikComp {...data}/>)}
    </FormikForm>
}

export default ArticleReferenceForm;