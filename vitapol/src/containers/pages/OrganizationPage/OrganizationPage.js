import React, {useState, useMemo, useEffect} from 'react'

import Component from '../../../components/OrganizationPage/OrganizationPage'
import getI18Text from './../../../components/utils/i18n';
import {organizationsAxios, advertisingPlaceAxios} from '../../../components/axios';

function OrganizationPage(props) {
    const [organizations, setOrganizations] = useState([]);
    const [advertisingPlaces, setAdvertisingPlaces] = useState({});
    const [advertisingID, setAdvertisingID] = useState(props.advertisingID || 0);

    const {BreadcrumbsData, TitleMainText} = useMemo(() => {
        const titleText = getI18Text("organizationPreviewTitle", props.languageID);
        const medicOrg = getI18Text("medicOrg", props.languageID);

        return {
            BreadcrumbsData: [
                {
                    text: medicOrg,
                    url: "#"
                }
            ],
            TitleMainText: titleText
        };
    }, [props.languageID]);

    useEffect(() => {
        if (advertisingPlaceAxios) {
            advertisingPlaceAxios.get('/otherPlaces').then(response => {
                if (response.status === 200) {
                    setAdvertisingPlaces(response.data);
                } else {
                    throw new Error('Authors Error')
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }, []);

    useEffect(() => {
        if (advertisingPlaces) {
            setAdvertisingID(advertisingPlaces['organization']);
        }
    }, [advertisingPlaces]);

    useEffect(() => {
        organizationsAxios.get('/')
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
        return <Component
            organizations={organizations}
            languageID={props.languageID}
            titleData={TitleMainText}
            breadcrumbsData={BreadcrumbsData}
            advertisingIDProp={advertisingID}
        />
    } else {
        return '';
    }
}

export default OrganizationPage;