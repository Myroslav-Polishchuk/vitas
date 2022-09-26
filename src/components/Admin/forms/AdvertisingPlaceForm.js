import React from 'react'
import FieldFormikComp from '../formik/FieldFormikComp'
import FormikForm from './FormikForm';
import * as Yup from 'yup';

import {advertisingPlaceAxios as axios} from '../../../components/axios'

const initialValues = {
    id: '',
    type: '',
    jsonConfig: ''
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
        name: "type",
        label: "Частина сайту",
        type: "text",
        options: {}
    },
    {
        name: "jsonConfig",
        label: "Технічна інформація (JSON)",
        type: "text",
        as: "textarea",
        options: {}
    }
]

const validationSchema = Yup.object({
    // type: Yup.string().required('Це обовязкове поле'),
    jsonConfig: Yup.string().test('json', 'JSON не валідний', (value) => {
        try {
            JSON.parse(value);
            return true;
        } catch (error) {
            return false;
        }
    })
})

function AdvertisingPlaceForm(props) {
    return <FormikForm
        ID={props.ID}
        tableName={props.tableName}
        initialValues={initialValues}
        axios={axios}
        validationSchema={validationSchema || {}}
        translate={props.translate}
        userRule={props.userRule}
    >
        {allData.map(data => <FieldFormikComp {...data}/>)}
    </FormikForm>
}

export default AdvertisingPlaceForm;