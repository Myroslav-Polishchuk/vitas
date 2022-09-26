import React from 'react'
import { HashLink } from 'react-router-hash-link';

import Section from '../../components/Section/Section';
import Pagination from './../Pagination/Pagination';

import {createDatePublication} from '../utils/utils'

function News(props) {
    const newsItems = props.news.map(({id, title, date}) => {
        return <li key={id}>
            <HashLink to={`/news/${id}/#`}>
                <p className="newsDate">{createDatePublication(date)}</p>
                <p>{title}</p>
            </HashLink>
        </li>
    })

    return <Section
        breadcrumbsData={props.breadcrumbsData}
        titleText={props.titleText}
        advertisingIDProp={props.advertisingIDProp}
        languageID={props.languageID}
    >
        <ul className="newsListPage">
            {newsItems}
        </ul>
        <Pagination
            {...props.paginationOptions}
            paginationPrevLabel={'arrowLeft'}
            paginationNextLabel={'arrowRight'}
        />
    </Section>
}

export default News;