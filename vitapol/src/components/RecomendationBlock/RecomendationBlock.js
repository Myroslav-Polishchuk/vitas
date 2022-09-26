import React from 'react'
import { HashLink } from 'react-router-hash-link';

import Recomendations from '../Lists/Recomendations'
import PreviewContainer from './../PreviewContainer/PreviewContainer';

import './RecomendationBlock.scss'

function RecomendationBlock({recomendations, titleData, viewMoreText, languageID}) {
    return <PreviewContainer classStyle={'recomendationTitle'} containerStyle={'recomendationContainer'} {...titleData}>
        <Recomendations recomendations={recomendations} ulClass={"recomendationList"} languageID={languageID}/>
        <HashLink to="/recomendations/all/#" className="videoViewMore" >{viewMoreText}</HashLink>
    </PreviewContainer>
}

export default RecomendationBlock;
