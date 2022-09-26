import React, {useEffect, useState, useMemo} from 'react'

import Section from './../../components/Section/Section';
import Recomendations from '../../components/Lists/Recomendations';
import CategoryList from './../CategoryList';

import {recomendationsAxios, advertisingPlaceAxios} from '../../components/axios';
import getI18Text from './../../components/utils/i18n';

import '../../components/CategoryList/CategoryList.scss';

const all = {
    id: 'all',
    eng: 'all',
    ukr: 'Всі',
    rus: 'Все'
}

function RecomendationPage(props) {
    const [recomendations, setRecomendations] = useState([]);
    const [advertisingPlaces, setAdvertisingPlaces] = useState({});
    const [advertisingID, setAdvertisingID] = useState(props.advertisingID || 0);

    const recomendationCategories = useMemo(() => [...props.categories, all], [props.categories]);

    const activeCategory = useMemo(() => {
        if (recomendationCategories.length) {
            return recomendationCategories.find(cat => {
                return cat.eng === props.match.params.categoryEng || (!props.match.params.categoryEng && cat.eng === 'all');
            })
        } else {
            return '';
        }
    }, [props.match.params.categoryEng, recomendationCategories]);

    const {TitleMainText, BreadcrumbsData} = useMemo(() => {
        const title = getI18Text('recomendationBlockTitle', props.languageID);
        return {
            TitleMainText: title,
            BreadcrumbsData: [
                {
                    text: title,
                    url: "#"
                },
                {
                    text: activeCategory ? activeCategory[props.languageID] : '',
                    url: ""
                },
            ]
        }
    }, [props.languageID, activeCategory]);

    useEffect(() => {
        if (advertisingPlaceAxios) {
            advertisingPlaceAxios.get('/recomendationlist').then(response => {
                if (response.status === 200) {
                    setAdvertisingPlaces(response.data);
                } else {
                    throw new Error('Authors Error')
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }, [activeCategory]);

    useEffect(() => {
        if (activeCategory && advertisingPlaces) {
            setAdvertisingID(advertisingPlaces[activeCategory.eng]);
        }
    }, [activeCategory, advertisingPlaces]);

    useEffect(() => {
        const url = activeCategory && activeCategory.id ? activeCategory.id : '';
        if (url) {
            recomendationsAxios.post(`/${url}`)
            .then(response => {
                if (response.status === 200) {
                    setRecomendations([{
                        category: activeCategory,
                        recomendations: response.data
                    }]);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [activeCategory]);

    return <Section breadcrumbsData={BreadcrumbsData} titleText={TitleMainText} advertisingIDProp={advertisingID} languageID={props.languageID}>
        <CategoryList categoryName='recomendations' additionalCategory={all} languageID={props.languageID} additionalStyleClass="recomendationListCat"/>
        {!!recomendations.length && <Recomendations recomendations={recomendations} ulClass={"recomendationListFull"} languageID={props.languageID} />}
    </Section>
}

export default RecomendationPage;
