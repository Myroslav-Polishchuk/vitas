import React from 'react'
import { HashLink } from 'react-router-hash-link';
import FormatText from '../../util/FormatText'

import Section from './../Section/Section';

import './New.scss'

function New({
    sectionData,
    newData,
    anchorNewsLinkText
}) {
    return <Section {...sectionData}>
        <main className="newItem">
            <h3>
                {newData.title}
            </h3>
            <div className="newItem__maintext" dangerouslySetInnerHTML={{__html: FormatText(newData.mainText)}} />
        </main>
        <HashLink to={'/news/#'} className="videoAnchor" >{anchorNewsLinkText}</HashLink>
    </Section>
}

export default New;