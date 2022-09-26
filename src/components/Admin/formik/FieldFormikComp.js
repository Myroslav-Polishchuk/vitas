import React from 'react'
import {
    Field,
    ErrorMessage,
} from 'formik';

function FieldFormikComp({
    name,
    label,
    type,
    tooltip,
    as = "input",
    className,
    options,
    classNameFormControl
}) {
    return <div className={`form-control ${classNameFormControl ? classNameFormControl : ''}`}>
        {label && <label htmlFor={name}>{label}</label>}
        {tooltip && <p className="tooltip">{tooltip}</p>}
        <Field type={type} id={name} name={name} as={as} {...options} className={className || ''}/>
        {name && <ErrorMessage name={name}/>}
    </div>
}

export default FieldFormikComp;