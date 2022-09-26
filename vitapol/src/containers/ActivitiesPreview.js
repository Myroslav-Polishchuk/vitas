import React, {useState, useEffect, useMemo} from 'react'

import {activitiesAxios} from '../components/axios';
import Component from '../components/Activities/Activities'
import getI18Text from './../components/utils/i18n';

function ActivitiesPreview(props) {
    const [activities, setActivities] = useState([]);

    const {titleData, linkPreviewText} = useMemo(() => {
        return {
            titleData: {languageProperty: 'activitiesTitle', languageName: props.languageID},
            linkPreviewText: getI18Text('activitiesPreviewText', props.languageID)
        };
    }, [props.languageID]);

    useEffect(() => {
        activitiesAxios.get(
            '/preview'
        ).then(response => {
            if (response.status === 200) {
                setActivities(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        }).catch(err => {
            console.log(err);
        });
    }, []);

    if (activities.length) {
        return <Component activities={activities} titleData={titleData} linkPreviewText={linkPreviewText}/>
    } else {
        return '';
    }
}

export default ActivitiesPreview;