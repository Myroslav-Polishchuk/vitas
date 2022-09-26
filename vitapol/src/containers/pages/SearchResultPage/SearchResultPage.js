import React, { useMemo, useEffect, useState } from 'react'

import getI18Text from '../../../components/utils/i18n';
import Section from '../../../components/Section/Section';
import Component from '../../../components/SearchResultPage/SearchResultPage'
import { articlesAxios } from '../../../components/axios';
import axios from 'axios';

const limitPerPage = 30;

function SearchResultPage(props) {
    const [activePagination, setActivePagination] = useState(1);
    const [searchResultsData, setSearchResultsData] = useState({
        count: 0,
        searchResults: []
    });

    useEffect(() => {
        setActivePagination(1);
    }, [props.match.params.query]);

    useEffect(() => {
        if (!props.match.params.query) {
            return;
        }

        const source = axios.CancelToken.source();

        articlesAxios.post('/search', {
            query: props.match.params.query,
            cancelToken: source.token,
            page: activePagination
        }).then((response) => {
            if (response.status === 200) {
                setSearchResultsData(response.data)
            }
        }).catch((thrown) => {
            if (!axios.isCancel(thrown)) {
                console.error(thrown)
            }
        })

        return () => {
            // Cancel request
            source.cancel();
        }
    }, [props.match.params.query, activePagination]);

    const {TitleMainText, BreadcrumbsData} = useMemo(() => {
        return {
            BreadcrumbsData: [{
                text: getI18Text('searchResultBreadcrumb', props.languageID),
                url: ''
            }],
            TitleMainText: getI18Text('searchResultTitle', props.languageID)
        }
    }, [props.languageID]);

    return <Section breadcrumbsData={BreadcrumbsData} titleText={TitleMainText} languageID={props.languageID}>
        <Component
            searchResults={searchResultsData.searchResults}
            searchResultsCount={searchResultsData.count}
            languageID={props.languageID}
            query={props.match.params.query}
            paginationProps={{
                forcePage: activePagination - 1,
                dataLength: searchResultsData.count,
                limitPerPage: limitPerPage,
                onPaginationChange: setActivePagination,
                languageID: props.languageID
            }}
        />
    </Section>
}

export default SearchResultPage;