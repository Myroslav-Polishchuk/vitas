import React from 'react'
import { HashLink } from 'react-router-hash-link';

import PreviewContainer from './../PreviewContainer/PreviewContainer';
import './Activities.scss'

function Activities(props) {
	return <PreviewContainer {...props.titleData} classStyle={'activityTitle'}>
        <ul className={"imgList clearPadding"}>
            {props.activities.map((act) => (
                <li key={act.id}>
                    <a href={act.url} target="_blank" rel="noopener noreferrer">
                        <img src={act.Foto.imgSrc} alt={act.Foto.imgAlt}/>
                    </a>
                </li>
            ))}
        </ul>
        <HashLink to="/events/#" className="videoViewMore" >{props.linkPreviewText}</HashLink>
    </PreviewContainer>
}

export default Activities;