import React from 'react'

import Alphabets from './Alphabets'
import AuthorsList from './AuthorsList'

import './Authors.scss'

function Authors(props) {
    return <div className="authorsBlock">
        <Alphabets setLetter={props.setLetter}/>
        <AuthorsList authors={props.authors} />
    </div>
}

export default Authors;