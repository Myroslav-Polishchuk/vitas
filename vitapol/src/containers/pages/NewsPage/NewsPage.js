import React, {useEffect, useState, useMemo} from 'react'

import Component from '../../../components/News/News'

import {newsAxios, advertisingPlaceAxios} from '../../../components/axios'
import getI18Text from '../../../components/utils/i18n'

import './NewsPage.scss'

const limitPerPage = 30;

function NewsPage(props) {
    const [news, setNews] = useState([]);
    const [activePagination, setActivePagination] = useState(1);
    const [newsLength, setNewsLength] = useState(0);
    const [advertisingPlaces, setAdvertisingPlaces] = useState({});
    const [advertisingID, setAdvertisingID] = useState(props.advertisingID || 0);

    const {newsTitle, BreadcrumbsData} = useMemo(() => {
        return {
            newsTitle: getI18Text("newsTitle", props.languageID),
            BreadcrumbsData: [{
                text: getI18Text('newsTitle', props.languageID),
                url: ''
            }]
        }
    }, [props.languageID]);

    useEffect(() => {
        if (advertisingPlaceAxios) {
            advertisingPlaceAxios.get('/otherPlaces').then(response => {
                if (response.status === 200) {
                    setAdvertisingPlaces(response.data);
                } else {
                    throw new Error('Authors Error')
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }, []);

    useEffect(() => {
        if (advertisingPlaces) {
            setAdvertisingID(advertisingPlaces['new']);
        }
    }, [advertisingPlaces]);

    useEffect(() => {
        newsAxios.get('/length')
        .then(response => {
            if (response.status === 200) {
                setNewsLength(response.data.newsLength);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        if (newsLength) {
            newsAxios.post('/', {
                page: activePagination
            })
            .then(response => {
                if (response.status === 200) {
                    setNews(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [newsLength, activePagination]);

    return <Component
        news={news}
        breadcrumbsData={BreadcrumbsData}
        titleText={newsTitle}
        advertisingIDProp={advertisingID}
        languageID={props.languageID}
        paginationOptions={{
            dataLength: newsLength,
            limitPerPage: limitPerPage,
            containerClassName: "videoListPagination",
            onPaginationChange: setActivePagination,
            languageID: props.languageID
        }}
    />
}

export default NewsPage;