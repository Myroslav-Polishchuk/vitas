import React from 'react'
import FormatText from '../../util/FormatText'

function Resume({
    resume_keywords,
    resume_paragraphs,
    mainText
}) {
    return <div className="Resume">
        <h5 className="Resume__title">{mainText.resumeTitle}</h5>
        <div className="Resume__maintext" dangerouslySetInnerHTML={{__html: FormatText(resume_paragraphs)}} />
        <div className="Resume__mainWords">
            <h6>{mainText.keywordsTitle}</h6>
            <p>{resume_keywords}</p>
        </div>
    </div>
}

Resume.defaultProps = {
    paragraphs: [],
    keywords: ''
}

export default Resume;