import React, {useState, useEffect, useMemo} from 'react'

import Component from '../components/VideoPreview/VideoPreview'

import {videoAxios} from '../components/axios'
import getI18Text from '../components/utils/i18n'

function VideoPreview(props) {
    const [videos, setVideos] = useState([]);

    const [viewMoreVideos, titleData] = useMemo(() => {
        return [
            getI18Text("viewMoreVideos", props.languageID),
            {languageProperty: 'videoPreviewTitle', languageName: props.languageID}
        ]
    }, [props.languageID]);

    useEffect(() => {
        videoAxios.get('/preview')
        .then(response => {
            if (response.status === 200) {
                setVideos(response.data);
            } else {
                throw new Error('VideosPreview Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    if (videos.length) {
        return <Component
            videos={videos}
            titleData={titleData}
            viewMoreVideos={viewMoreVideos}
            languageID={props.languageID}
        />
    } else {
        return '';
    }
}

export default VideoPreview;