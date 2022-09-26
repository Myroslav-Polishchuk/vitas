import React from 'react'

function AdminAsk(props) {
    return <form
        className="globalWrapper"
        ref={props.formRef}
        onSubmit={props.submitRegistrationStatus}
    >
        <input type="text"/>
        <br/>
        <button type="submit">Відправити</button>
    </form>
}

export default AdminAsk;