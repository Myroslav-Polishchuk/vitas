import React, {useMemo} from 'react'
import { HashLink } from 'react-router-hash-link';

import ArticleData from "./ArticleData";
import References from './References';
import Also from './Also';
import Section from '../../components/Section/Section'

import getI18Text from '../../components/utils/i18n'
import './MainArticleInfo.scss'

function MainArticleInfo({
    breadcrumbsData,
    article,
    categoryTitle,
    goToStartPageText,
    categoryEng,
    alsoArticles,
    languageID
}) {
    const mainText = useMemo(() => {
        return {
            AlsoTitle: getI18Text('alsoTitle', languageID),
            ReferenceTitleName: getI18Text('ReferenceTitleName', languageID),
            resumeTitle: getI18Text('Resume', languageID),
            keywordsTitle: getI18Text('Keywords', languageID)
        }
    }, [languageID]);

    return <Section breadcrumbsData={breadcrumbsData} advertisingIDProp={article.Advertising && article.Advertising.id} languageID={languageID}>
        <HashLink className="sectionLink" to={`/articles/${categoryEng}/#`}>
            {categoryTitle}
        </HashLink>
        <ArticleData {...article} mainText={mainText}/>
        {article.showPDF && article.File.link ? <></> : <References references={article.references} ReferenceTitleName={mainText.ReferenceTitleName}/>}
        <HashLink className="goToStartPage" to="#">
            {goToStartPageText}
        </HashLink>
        <Also alsoArticles={alsoArticles} mainText={mainText}/>
    </Section>
}

export default MainArticleInfo;