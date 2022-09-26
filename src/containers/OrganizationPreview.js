import React, {useEffect, useState, useMemo} from 'react'

import Component from '../components/OrganizationPreview/OrganizationPreview'
import {organizationsAxios} from '../components/axios';
import getI18Text from './../components/utils/i18n';

function OrganizationPreview (props) {
    const [organizations, setOrganizations] = useState([]);

    const {titleData, linkPreviewText} = useMemo(() => {
        return {
            titleData: {languageProperty: 'organizationPreviewTitle', languageName: props.languageID},
            linkPreviewText: getI18Text('organizationPreviewText', props.languageID)
        }
    }, [props.languageID]);

    useEffect(() => {
        organizationsAxios.get('/preview')
        .then(response => {
            if (response.status === 200) {
                setOrganizations(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    if (organizations.length) {
        return <Component organizations={organizations} titleData={titleData} linkPreviewText={linkPreviewText}/>
    } else {
        return '';
    }
}

export default OrganizationPreview;