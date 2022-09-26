import React from 'react'
import Pagination from '../Pagination/Pagination';
import ArticleListItem from '../ArticleListPage/ArticleListItem';
import SearchForm from './SearchFormResultPage';

import './SearchResultPage.scss';

function SearchResultPage(props) {
    const ArticlesListItems = props.searchResults.map((data) => <ArticleListItem {...data} key={data.id}/>);

    return <>
        <SearchForm languageID={props.languageID} searchResultsCount={props.searchResultsCount} query={props.query} />
        <ul className="articleListPage">
            {ArticlesListItems}
        </ul>
        <Pagination
            {...props.paginationProps}
            paginationPrevLabel={'arrowLeft'}
            paginationNextLabel={'arrowRight'}
            paginationProps={props.paginationProps}
        />
    </>
}

export default SearchResultPage;