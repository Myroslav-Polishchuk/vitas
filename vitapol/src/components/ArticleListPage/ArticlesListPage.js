import React, {useMemo} from 'react'

import ArticleListItem from './ArticleListItem';
import Pagination from './../Pagination/Pagination';
import CategoryList from './../../containers/CategoryList';

import getI18Text from '../../components/utils/i18n'

import './ArticlesListPage.scss'

function ArticlesListPage({
    articleListData,
    paginationProps,
    languageID
}) {
    const articleListStateText = useMemo(() => getI18Text('stateCategoriesTitle', languageID), [languageID])
    const ArticlesListItems = articleListData.map((data) => <ArticleListItem {...data} key={data.id}/>);

    return <>
        <Pagination
            {...paginationProps}
            paginationPrevLabel={'arrowLeft'}
            paginationNextLabel={'arrowRight'}
            paginationClassName={'paginationList paginationList--first'}
        />
        <ul className="articleListPage">
            {ArticlesListItems}
        </ul>
        <Pagination
            {...paginationProps}
            paginationPrevLabel={'arrowLeft'}
            paginationNextLabel={'arrowRight'}
        />
        <h5 className="articleListState">{articleListStateText}</h5>
        <CategoryList categoryName='articles' languageID={languageID} additionalStyleClass='articlesList'/>
    </>
}

export default ArticlesListPage;