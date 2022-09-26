import React, {useMemo, useState, useEffect} from 'react'

import Component from './../components/RecomendationBlock/RecomendationBlock';
import getI18Text from './../components/utils/i18n';
import {recomendationAxios} from '../components/axios';

function RecomendationBlock(props) {
    const [recomendations, setRecomendations] = useState([]);

    useEffect(() => {
        recomendationAxios.get('/preview')
        .then(response => {
            if (response.status === 200) {
                setRecomendations(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const languageData = useMemo(() => {
        return {
            viewMoreText: getI18Text('recomendationViewmore', props.languageID),
            titleData: {
                languageProperty: 'recomendationBlockTitle',
                languageName: props.languageID
            }
        }
    }, [props.languageID]);

	return <Component recomendations={recomendations} {...languageData} languageID={props.languageID}/>
};

export default RecomendationBlock;