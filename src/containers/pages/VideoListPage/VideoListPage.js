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
        const promises = [];

        const advertisingPromise = new Promise((resolve, reject) => {
            resolve(advertisingPlaceAxios.get('/videolist'));
        });

        promises.push(advertisingPromise);

        if (activeCategory) {
            const videoLengthPromise = new Promise((resolve, reject) => {
                resolve(videoAxios.get(`/length/${activeCategory.id}`));
            });

            promises.push(videoLengthPromise);
        }

        Promise.allSettled(promises).then((results) => {
            let advertisingValue = null;
            let videoLength = null;
            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    if (index === 0) {
                        advertisingValue = result.value.data;
                        return;
                    }

                    if (index === 1) {
                        videoLength = result.value.data.videosLength;
                        return;
                    }
                }
            });

            if (advertisingValue !== null) {
                setAdvertisingPlaces(advertisingValue);
            }

            if (videoLength !== null) {
                setVideoLength(videoLength);
            }

            setActivePagination(1);
        })

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
        });

    }, [activeCategory, activePagination]);

    return <Section breadcrumbsData={BreadcrumbsData} titleText={videoListTitle} advertisingIDProp={advertisingID} languageID={props.languageID}>
        <CategoryList categoryName='videosList' additionalCategory={all} languageID={props.languageID} additionalStyleClass="videoList"/>
        <Videos dataVideos={videos} ulClass={"videoCategoriesList"} languageID={props.languageID}/>
        <Pagination
            dataLength={videosLength}
            limitPerPage={limitPerPage}
            forcePage={activePagination - 1}
            paginationClassName={"videoListPagination"}
            onPaginationChange={setActivePagination}
        />
    </Section>
}

export default VideoListPage;
