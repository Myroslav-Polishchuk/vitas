import React, {useEffect, useState, useMemo} from 'react'

import Authors from '../../components/Authors/Authors';
import Section from '../../components/Section/Section';

import {authorsAxios, advertisingPlaceAxios} from '../../components/axios'
import getI18Text from '../../components/utils/i18n'

function AuthorsPage(props) {
    const [authors, setAuthors] = useState([]);
    const [activeLetter, setActiveLetter] = useState('');
    const [advertisingPlaces, setAdvertisingPlaces] = useState({});
    const [advertisingID, setAdvertisingID] = useState(props.advertisingID || 0);

    useEffect(() => {
        authorsAxios.get(`/${activeLetter}`)
            .then(response => {
                if (response.status === 200) {
                    setAuthors(response.data);
                } else {
                    throw new Error('Authors Error')
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [activeLetter]);

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
            setAdvertisingID(advertisingPlaces['author']);
        }
    }, [advertisingPlaces]);

    const {TitleMainText, BreadcrumbsData} = useMemo(() => {
        return {
            BreadcrumbsData: [
                {
                    text: getI18Text("authorsMainTitle", props.languageID),
                    url: ''
                }
            ],
            TitleMainText: getI18Text("authorsMainTitle", props.languageID)
        }
    }, [props.languageID]);

    return <Section breadcrumbsData={BreadcrumbsData} titleText={TitleMainText} advertisingIDProp={advertisingID} languageID={props.languageID}>
        <Authors authors={authors} setLetter={setActiveLetter}/>
    </Section>
}

export default AuthorsPage;