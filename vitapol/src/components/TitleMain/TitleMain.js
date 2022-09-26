import React from 'react'

import './TitleMain.scss'

function TitleMain({text, adress}) {
    return <h1 className="TitleMain" id={`titleMain`}>
        {text}
    </h1>
}

export default TitleMain;