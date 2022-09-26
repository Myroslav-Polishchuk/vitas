import React from 'react'
import { HashLink } from 'react-router-hash-link';
import utils from '../utils/utils';

function ArticleListItem({Journal, Authors, main_title, id}) {
    const authorsListItems = Authors.map((author, index) => {
        let name = utils.createAuthorInitials(author);
        if (!name) {
            return <></>
        }

        name += index + 1 !== Authors.length ? ',' : '';

        return <li key={name}>
            <a href={author.href}>
                {name}
            </a>
        </li>
    });

    return <li key={id}>
        <h6>
            <HashLink to={`/article/${id}/#`}>{main_title}</HashLink>
        </h6>
        <div className="articleAuthors">
            <ul className="articleAuthorsList">
                {authorsListItems}
            </ul>
            <p className="articleAuthorsJournal">
                <span>Журнал: <a href={Journal && Journal.url} rel="noopener noreferrer" target="_blank">{Journal && Journal.name}</a></span>
            </p>
        </div>
    </li>

}

export default ArticleListItem;