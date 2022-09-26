import React from 'react'

import MetaArticle from './MetaArticle';
import Resume from './Resume';
import FormatText from '../../util/FormatText'
import GooglePDFViewer from './GooglePDFViewer';

function ArticleData({
    main_title,
    main_fullText,
    journal_number,
    journal_year,
    journal_pages,
    meta_code,
    meta_workplace,
    resume_keywords,
    resume_paragraphs,
    Authors,
    mainText,
    showPDF,
    File,
    Journal
}) {
    const meta_name = Journal ? `${Journal.name}, №${journal_number} // ${journal_year}, с. ${journal_pages}` : '';
    const mainPart = showPDF && File
        ? <GooglePDFViewer link={File.link}/>
        : <div className="articleData__maintext" dangerouslySetInnerHTML={{__html: FormatText(main_fullText)}} />
    const resume = resume_paragraphs
        ? <Resume
            mainText={mainText}
            resume_keywords={resume_keywords}
            resume_paragraphs={resume_paragraphs}
        /> : '';

    return <div className="articleData">
        <h3>{main_title}</h3>
        <MetaArticle
            Authors={Authors}
            meta_code={meta_code}
            meta_name={meta_name}
            meta_workplace={meta_workplace}
         />
        {resume}
        {mainPart}
    </div>
}

ArticleData.defaultProps = {
    main: {
        title: '',
        fullText: []
    }
}

export default ArticleData;