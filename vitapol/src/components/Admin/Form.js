import React from 'react'
import Input from './Input'

function Form({
    tableName,
    currentFormData,
    formRef,
    sendPost,
    sendPut,
    sendDelete,
    currentData
}) {
    return <>
        <h1 className="form_h1">{tableName}</h1>
        <form action="#" ref={formRef} onSubmit={(e) => {e.preventDefault()}}>
            {Object.keys(currentFormData).map(fieldKey => {
                return <Input
                    key={fieldKey}
                    {...currentFormData[fieldKey]}
                    idName={fieldKey}
                    value={currentData
                        ? currentData[fieldKey]
                            ? currentData[fieldKey]
                            : ''
                        : ''}
                />
            })}
            {sendPost && <button onClick={sendPost}>Створити</button>}
            {sendPut && <button onClick={sendPut}>Оновити</button>}
            {sendDelete && <button onClick={sendDelete}>Видалити</button>}
        </form>
    </> 
}

export default Form;