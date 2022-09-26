import React from 'react'
import {
    ErrorMessage,
    useFormikContext
} from 'formik';

function FieldFormikFileComp({
    name,
    translate,
    type,
    options
}) {
    const {setFieldValue} = useFormikContext();

    return <div className='form-control'>
        <label htmlFor={name}>{translate}</label>
        <input type={type} id={name} name={name} {...options} onChange={(event) => {
            setFieldValue(name, event.currentTarget.files[0]);
        }}/>
        <ErrorMessage name={name}/>
    </div>
}

export default FieldFormikFileComp;