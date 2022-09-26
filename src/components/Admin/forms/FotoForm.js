import React from 'react'
import FormikForm from './FormikForm';
import FieldFormikComp from '../formik/FieldFormikComp'
import FieldFormikFileComp from '../formik/FieldFormikFileComp'
import * as Yup from 'yup';

import {imgAxios as axios} from '../../../components/axios'


const initialValues = {
    id: '',
    imgSrc: '',
    imgAlt: '',
    name: '',
    imgFile: null
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
        name: "imgSrc",
        label: "Джерело - генерує система",
        type: "text",
        options: {disabled: true}
    },
    {
        name: "imgAlt",
        label: "Альтернативний текст для атрибуту alt у тегу img",
        type: "text",
        options: {}
    },
    {
        name: "name",
        label: "Довільна текстова назва",
        type: "text",
        options: {}
    }
]

const validationSchema = Yup.object({
    // imgAlt: Yup.string().required('Required'),
    // name: Yup.string().required('Required'),
    // imgFile: Yup.mixed().test('HasFile', "Потрібен файл!", value => value && typeof value.arrayBuffer === 'function')
});

function FotoForm(props) {
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
        <FieldFormikFileComp name="imgFile" type="file" />
    </FormikForm>
}

export default FotoForm;