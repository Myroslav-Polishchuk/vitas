import React from 'react'
import { HashLink } from 'react-router-hash-link';

import Section from '../../components/Section/Section';

function VideoPage(props) {
    const {title, embedURL, mainText} = props.video;

    return <Section breadcrumbsData={props.breadcrumbsData} titleText={props.titleText} languageID={props.languageID}>
        <main className="videoItem">
            <iframe
                title="youtube"
                className="youtubeVideo"
                type="text/html"
                src={embedURL}
            />
            <h6>
                {props.categoryName}
            </h6>
            <h5>
                {title}
            </h5>
            <p>
                <span>
                    {mainText}
                </span>
            </p>
        </main>
        <HashLink to={'/videosList/#'} className="videoAnchor" >{props.anchorLinkText}</HashLink>
    </Section>
}

export default VideoPage;
