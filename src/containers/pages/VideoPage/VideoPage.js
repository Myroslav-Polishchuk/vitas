import React, {useEffect, useState, useMemo} from 'react'

import Component from '../../../components/VideoPage/VideoPage'

import {videoAxios} from '../../../components/axios'
import getI18Text from '../../../components/utils/i18n'

import './VideoPage.scss'

function VideoPage(props) {
    const [video, setVideo] = useState({});

    const texts = useMemo(() => {
        return {
            TitleMainText: getI18Text("videoListTitle", props.languageID),
            anchorLinkText: getI18Text("videoPageReturn", props.languageID),
        }
    }, [props.languageID])

    useEffect(() => {
        videoAxios.get(`/${props.match.params.videosID}`)
        .then(response => {
            if (response.status === 200) {
                setVideo(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [props.match.params.videosID]);

    const BreadcrumbsData = useMemo(() => [
        {
            text: getI18Text('videoPreviewTitle', props.languageID),
            url: "/videosList"
        },
        {
            text: video.title,
            url: ""
        }
    ], [props.languageID, video]);

    if (!video.id || !video.Category) {
        return <></>
    }

    return <Component
        breadcrumbsData={BreadcrumbsData}
        titleText={texts.TitleMainText}
        video={video}
        categoryName={video.Category[props.languageID]}
        anchorLinkText={texts.anchorLinkText}
    />
}

export default VideoPage;