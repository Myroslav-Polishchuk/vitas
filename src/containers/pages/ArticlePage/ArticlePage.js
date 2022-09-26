import React, {useEffect, useState, useMemo} from 'react'

import Component from '../../../components/MainArticleInfo/MainArticleInfo'

import {articlesAxios} from '../../../components/axios'
import getI18Text from './../../../components/utils/i18n';

function ArticlePage(props) {
    const [article, setArticle] = useState({});
    const [alsoArticles, setAlsoArticles] = useState([]);

    useEffect(() => {
        let aritlcesGET = {};
        if (props.match.params.previewArticleID) {
            aritlcesGET = articlesAxios.get(`/article/preview/${props.match.params.previewArticleID}`);
        } else if (props.match.params.articleID) {
            aritlcesGET = articlesAxios.get(`/article/${props.match.params.articleID}`);
        }

        aritlcesGET.then(response => {
            if (response.status === 200) {
                setArticle(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [props.match.params.articleID, props.match.params.previewArticleID]);

    useEffect(() => {
        if (article.id && article.Categories && article.Categories.length) {
            articlesAxios.post('/article/also', {
                ignoreArticleID: article.id,
                categoryID: article.Categories[0].id
            })
            .then(response => {
                if (response.status === 200) {
                    setAlsoArticles(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [article])

    const BreadcrumbsData = useMemo(() => {
        if (article.id && props.languageID) {
            return [
                {
                    text: getI18Text('articlesTitle', props.languageID),
                    url: "#"
                },
                {
                    text: article.Categories[0][props.languageID],
                    url: `/articles/${article.Categories[0].eng}`
                },
                {
                    text: article.main_title,
                    url: ""
                }
            ];
        } else {
            return [];
        }
    }, [article, props.languageID])

    const [goToStartPageText, categoryTitle, categoryEng] = useMemo(() => {
        if (props.languageID && article.id) {
            return [
                getI18Text('goToStartPage', props.languageID),
                article.Categories[0][props.languageID],
                article.Categories[0].eng
            ]
        } else {
            return [];
        }
    }, [props.languageID, article]);

    if (article.id) {
        return <Component
            breadcrumbsData={BreadcrumbsData}
            categoryTitle={categoryTitle}
            categoryEng={categoryEng}
            article={article}
            goToStartPageText={goToStartPageText}
            alsoArticles={alsoArticles}
            languageID={props.languageID}
        />
    } else {
        return '';
    }
}

export default ArticlePage;