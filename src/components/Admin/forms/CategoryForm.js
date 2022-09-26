import React from 'react'
import FieldFormikComp from '../formik/FieldFormikComp'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {categoriesAxios as axios} from '../../../components/axios'


const initialValues = {
    id: '',
    eng: '',
    ukr: '',
    rus: '',
    imgLink: '',
    sortPositionHeader: '',
    sortPositionArticleBlock: ''
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
        name: "eng",
        label: "Англійською",
        type: "text",
        options: {}
    },
    {
        name: "ukr",
        label: "Українською",
        type: "text",
        options: {}
    },
    {
        name: "rus",
        label: "Російською",
        type: "text",
        options: {}
    },
    {
        name: "sortPositionHeader",
        label: "Номер порядку спеціальності в Header",
        type: "text",
        options: {}
    },
    {
        name: "sortPositionArticleBlock",
        label: "Номер порядку спеціальності в блоку статей",
        type: "text",
        options: {}
    }
];

const validationSchema = Yup.object({
    // "eng": Yup.string().required('Required'),
    // "ukr": Yup.string().required('Required'),
    // "rus": Yup.string().required('Required'),
    // "imgLink": Yup.string().required('Required'),
});

function CategoryForm(props) {
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

export default CategoryForm;