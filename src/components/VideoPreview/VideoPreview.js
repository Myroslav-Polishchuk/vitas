import React from 'react'
import { HashLink } from 'react-router-hash-link';

import './VideoPreview.scss';
import PreviewContainer from './../PreviewContainer/PreviewContainer';

function VideoPreview({
    videos,
    titleData,
    viewMoreVideos,
    languageID
}) {
    const videoPreviewsItems = videos.map(({previewImgSrc, Category, previewText, id}) => {
        return <li key={id}>
            <div>
                <img src={previewImgSrc} alt="#"/>
            </div>
            <div>
                <HashLink to={`/videosList/${Category.eng}/#`}>
                    <h6>{Category[languageID]}</h6>
                </HashLink>
                <HashLink to={`videos/${id}/#`}>
                    <p>{previewText}</p>
                </HashLink>
            </div>
        </li>
    });

    return <PreviewContainer {...titleData}>
        <ul className="videoPreview imgList clearPadding">
            {videoPreviewsItems}
        </ul>
        <HashLink to="/videosList/#" className="videoViewMore" >{viewMoreVideos}</HashLink>
    </PreviewContainer>
}

VideoPreview.defaultProps = {
    videos: []
}

export default VideoPreview;