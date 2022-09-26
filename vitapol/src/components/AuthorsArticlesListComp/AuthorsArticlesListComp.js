import React from 'react'
import { HashLink } from 'react-router-hash-link';

import Pagination from './../Pagination/Pagination';
import Section from './../Section/Section';

import utils from '../utils/utils';

function AuthorsArticlesListComp({
    paginationProps,
    articleListData,
    BreadcrumbsData,
    titleText,
    languageID
}) {
    const ArticlesListItems = articleListData.map((data) => <ArticleListItem {...data} />);

    return <Section breadcrumbsData={BreadcrumbsData} titleText={titleText} languageID={languageID}>
        <ul className="articleList">
            {ArticlesListItems}
        </ul>
        <Pagination {...paginationProps}/>
    </Section>
}

function ArticleListItem({Journal, Authors, main_title, id}) {
    const authorsListItems = Authors.map((author, index) => {
        let name = utils.createAuthorInitials(author);
        name += index + 1 !== Authors.length ? ',' : '';

        return <li key={name}>
            <a href={author.href}>
                {name}
            </a>
        </li>
    });

    return <li>
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

export default AuthorsArticlesListComp;