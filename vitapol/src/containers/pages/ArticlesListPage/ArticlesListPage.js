import React, {useState, useMemo, useEffect} from 'react'

import Section from '../../../components/Section/Section';
import Component from '../../../components/ArticleListPage/ArticlesListPage';
import {articlesAxios, advertisingPlaceAxios} from '../../../components/axios'

import getI18Text from '../../../components/utils/i18n';

import './ArticlesListPage.scss';

const limitPerPage = 30;

function ArticlesListPage(props) {
    const [articles, setArticles] = useState([]);
    const [activePagination, setActivePagination] = useState(1);
    const [articlesLength, setArticlesLength] = useState(0);
    const [advertisingPlaces, setAdvertisingPlaces] = useState({});
    const [advertisingID, setAdvertisingID] = useState(props.advertisingID || 0);

    const activeCategory = useMemo(() => {
        return props.categories.find(cat => {
            return props.match.params.categoryID === cat.eng;
        });
    }, [props.categories, props.match.params.categoryID]);

    useEffect(() => {
        if (activeCategory) {
            articlesAxios.get(`/length/${activeCategory.id}`)
                .then(response => {
                    if (response.status === 200) {
                        setArticlesLength(response.data.articlesLength);
                        setActivePagination(1);
                    } else {
                        throw new Error('Authors Error')
                    }
                }).catch(err => {
                    console.log(err);
                })
        }
    }, [activeCategory]);

    useEffect(() => {
        if (activeCategory && activePagination) {
            articlesAxios.post(`/preview/${activeCategory.id}`, {
                page: activePagination
            }).then(response => {
                if (response.status === 200) {
                    setArticles(response.data);
                } else {
                    throw new Error('Authors Error')
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }, [activeCategory, activePagination]);

    useEffect(() => {
        if (advertisingPlaceAxios) {
            advertisingPlaceAxios.get('/articlelist').then(response => {
                if (response.status === 200) {
                    setAdvertisingPlaces(response.data);
                } else {
                    throw new Error('Authors Error')
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }, [activeCategory]);

    useEffect(() => {
        if (activeCategory && advertisingPlaces) {
            setAdvertisingID(advertisingPlaces[activeCategory.eng]);
        }
    }, [activeCategory, advertisingPlaces]);

    const {categoryTitle, BreadcrumbsData} = useMemo(() => {
        if (activeCategory) {
            return {
                categoryTitle: activeCategory[props.languageID],
                BreadcrumbsData: [
                    {
                        text: getI18Text('articlesTitle', props.languageID),
                        url: "#"
                    },
                    {
                        text: activeCategory[props.languageID],
                        url: ""
                    },
                ]
            };
        } else {
            return {
                categoryTitle: '',
                BreadcrumbsData: []
            }
        }
    }, [props.languageID, activeCategory]);

    return <>
        <Section breadcrumbsData={BreadcrumbsData} titleText={categoryTitle} advertisingIDProp={advertisingID} languageID={props.languageID}>
            <Component
                languageID={props.languageID}
                articleListData={articles}
                categories={props.categories}
                paginationProps={{
                    forcePage: activePagination - 1,
                    dataLength: articlesLength,
                    limitPerPage: limitPerPage,
                    onPaginationChange: setActivePagination,
                    languageID: props.languageID
                }}
            />
        </Section>
    </>
}

export default ArticlesListPage;