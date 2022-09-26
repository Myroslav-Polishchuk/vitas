import React from 'react'
import { HashLink } from 'react-router-hash-link';

function Also(props) {
    if (props.alsoArticles.length) {
        return <div className="Also">
            <h6 className="Also__title">
                {props.mainText.AlsoTitle}
            </h6>
            <ul className="Also__list">
                {props.alsoArticles.map((article) => {
                    return <li key={article.id}>
                        <HashLink to={`/article/${article.id}/#`}>{article.main_title}</HashLink>
                    </li>
                })}
            </ul>
        </div>
    } else {
        return '';
    }
}

export default Also;