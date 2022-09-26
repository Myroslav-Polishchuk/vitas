import React from 'react'
import FormatText from '../../util/FormatText'

import utils from '../utils/utils';

function MetaArticle({
    Authors,
    meta_code,
    meta_name
}) {
    const authorsArr = Authors.map(author => {
        const name = utils.createAuthorInitials(author);
        if (!name) {
            return <></>
        }

        return <li key={author.secondName}>
            <p className="metaArticle__authors">{name}</p>
            <div className="metaArticle__workplace" dangerouslySetInnerHTML={{__html: FormatText(author.workplace)}} />
        </li>
    })

    return <div className="metaArticle">
        <span className={"metaArticle__journal"}>
            {meta_name}
        </span>
        {meta_code && <p className={"metaArticle__code"}>
            <a href={meta_code} target="_blank" rel="noopener noreferrer">{`DOI: ${meta_code}`}</a>
        </p>}
        <ul className={"metaArticle__authors"}>
            {authorsArr}
        </ul>
    </div>
}

export default MetaArticle;