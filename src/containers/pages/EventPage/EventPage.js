import React, {useState, useMemo, useEffect} from 'react'

import Section from './../../../components/Section/Section';
import getI18Text from './../../../components/utils/i18n';
import {activitiesAxios, advertisingPlaceAxios} from '../../../components/axios'

function EventPage(props) {
    const [activities, setActivities] = useState([]);
    const [advertisingPlaces, setAdvertisingPlaces] = useState({});
    const [advertisingID, setAdvertisingID] = useState(props.advertisingID || 0);

    const {BreadcrumbsData, TitleMainText} = useMemo(() => {
        const titleText = getI18Text("activitiesTitle", props.languageID)
        return {
            BreadcrumbsData: [
                {
                    text: titleText,
                    url: ""
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
            setAdvertisingID(advertisingPlaces['event']);
        }
    }, [advertisingPlaces]);

    useEffect(() => {
        activitiesAxios.get('/')
        .then(response => {
            if (response.status === 200) {
                setActivities(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const activitiesList = activities.map(org => {
        return <li key={org.id}>
            <a href={org.url} target="_blank" rel="noopener noreferrer">
                <img src={org.Foto.imgSrc} alt={org.Foto.imgAlt}/>
            </a>
        </li>
    });

    return <Section breadcrumbsData={BreadcrumbsData} titleText={TitleMainText} advertisingIDProp={advertisingID} languageID={props.languageID}>
        <ul className="organizationPreviewList globalWrapper listImg clearPadding">
            {activitiesList}
        </ul>
    </Section>
}

export default EventPage;