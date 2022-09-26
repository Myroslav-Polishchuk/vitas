import React from 'react'
import {
    Field,
    FieldArray,
    ErrorMessage,
} from 'formik';

function FieldFormikComp({
    name,
    label,
    tooltip
}) {
    return <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        {tooltip && <p className="tooltip">{tooltip}</p>}
        <FieldArray name={name}>
            {fieldArrayProps => {
                const {push, remove, form} = fieldArrayProps;
                const {values} = form;
                const nameValues  = values[name] || [''];

                return <div className="array">
                    {nameValues.map((value, index) => (
                        <div key={index} className="arrayItem">
                            <Field name={`${name}[${index}]`} />
                            {index > 0 && <button type='button' onClick={() => remove(index)}>{' - '}</button>}
                            <button type='button' onClick={() => push('')}>{' + '}</button>
                            <ErrorMessage name={`${name}[${index}]`}/>
                        </div>
                    ))}
                </div>
            }}
        </FieldArray>
    </div>
}

export default FieldFormikComp;