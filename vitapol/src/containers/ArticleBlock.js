import React, {useState, useEffect, useMemo} from 'react'

import Component from '../components/ArticleBlock/ArticleBlock';

import getI18Text from './../components/utils/i18n';
import {articlesAxios} from '../components/axios'

function ArticleBlock(props) {
    const [previewArticles, setPreviewArticles] = useState([]);

    const [articlesSpecialion, titleData] = useMemo(() => {
        return [
            getI18Text('articlesSpecialion', props.languageID),
            {languageProperty: 'articlesTitle',languageName: props.languageID}
        ]
    }, [props.languageID]);

    useEffect(() => {
        articlesAxios.get('/preview')
        .then(response => {
            if (response.status === 200) {
                setPreviewArticles(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return <Component
        languageID={props.languageID}
        previewArticles={previewArticles}
        titleData={titleData}
        articlesSpecialion={articlesSpecialion}
    />
}

export default ArticleBlock;