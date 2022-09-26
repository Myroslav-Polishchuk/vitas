import React, {useEffect, useState, useMemo} from 'react'

import Section from '../../../components/Section/Section';
import Videos from '../../../components/Lists/Videos'
import Pagination from './../../../components/Pagination/Pagination';
import CategoryList from './../../CategoryList';

import getI18Text from '../../../components/utils/i18n'
import {videoAxios, advertisingPlaceAxios} from '../../../components/axios'

import './VideoListPage.scss';
import '../../../components/CategoryList/CategoryList.scss'

const limitPerPage = 30;

const all = {
    id: '',
    eng: 'all',
    ukr: 'Всі',
    rus: 'Все'
}

function VideoListPage(props) {
    const [videos, setVideos] = useState([]);
    const [activePagination, setActivePagination] = useState(1);
    const [videosLength, setVideoLength] = useState(0);
    const [advertisingPlaces, setAdvertisingPlaces] = useState({});
    const [advertisingID, setAdvertisingID] = useState(props.advertisingID || 0);

    const videosCategories = useMemo(() => [...props.categories, all], [props.categories]);

    const activeCategory = useMemo(() => {
        if (videosCategories.length) {
            return videosCategories.find(cat => {
                return cat.eng === props.match.params.categoryEng || (!props.match.params.categoryEng && cat.eng === 'all');
            })
        } else {
            return '';
        }
    }, [props.match.params.categoryEng, videosCategories]);

    useEffect(() => {
        if (advertisingPlaceAxios) {
            advertisingPlaceAxios.get('/videolist').then(response => {
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

    const {videoListTitle, BreadcrumbsData} = useMemo(() => {
        return {
            videoListTitle: getI18Text("videoListTitle", props.languageID),
            BreadcrumbsData: [{
                text: getI18Text("videoListTitle", props.languageID),
                url: ""
            }]
        }
    }, [props.languageID]);

    useEffect(() => {
        if (activeCategory) {
            videoAxios.get(`/length/${activeCategory.id}`).then(response => {
                    if (response.status === 200) {
                        setVideoLength(response.data.videosLength);
                    } else {
                        throw new Error('Recomendation Error');
                    }
                }).catch(err => {
                    console.log(err);
                })
        }
    }, [activeCategory]);

    useEffect(() => {
        const url = activeCategory && activeCategory.id ? activeCategory.id : '';
        videoAxios.post(`/${url}`, {
            page: activePagination
        }).then(response => {
            if (response.status === 200) {
                setVideos(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        }).catch(err => {
            console.log(err);
        })

    }, [activeCategory, activePagination]);

    return <Section breadcrumbsData={BreadcrumbsData} titleText={videoListTitle} advertisingIDProp={advertisingID} languageID={props.languageID}>
        <CategoryList categoryName='videosList' additionalCategory={all} languageID={props.languageID} additionalStyleClass="videoList"/>
        <Videos dataVideos={videos} ulClass={"videoCategoriesList"} languageID={props.languageID}/>
        <Pagination
            dataLength={videosLength}
            limitPerPage={limitPerPage}
            paginationClassName={"videoListPagination"}
            onPaginationChange={setActivePagination}
        />
    </Section>
}

export default VideoListPage;
