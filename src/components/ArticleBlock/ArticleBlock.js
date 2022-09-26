import React from 'react'

import PreviewContainer from './../PreviewContainer/PreviewContainer';
import ArticlesList from '../Lists/Articles'

import './ArticleBlock.scss'

function ArticleBlock({previewArticles, titleData, articlesSpecialion, languageID}) {
	return <PreviewContainer classStyle={'articlesTitle'} containerStyle={'articles'} {...titleData}>
        <ArticlesList previewArticles={previewArticles} ulClass={"articleList"} linkText={articlesSpecialion} languageID={languageID} />
    </PreviewContainer>
}

export default ArticleBlock;