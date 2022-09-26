import React, {useState, useEffect, useMemo} from 'react'

import InformationMain from '../InformationMain';
import ArticleBlock from '../ArticleBlock'
import RecomendationBlock from '../RecomendationBlock';
import ActivitiesPreview from '../ActivitiesPreview';
import AdvertisingInfo from '../AdvertisingInfo';
import VideoPreview from '../VideoPreview';
import OrganizationPreview from '../OrganizationPreview';

import {orderAxios} from '../../components/axios';

const componentsNames = {
    InformationMain: InformationMain,
    ArticleBlock: ArticleBlock,
    RecomendationBlock: RecomendationBlock,
    AdvertisingInfo: AdvertisingInfo,
    VideoPreview: VideoPreview,
    ActivitiesPreview: ActivitiesPreview,
    OrganizationPreview: OrganizationPreview
};

function HomePage(props) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        orderAxios.get()
            .then(result => {
                setOrders(result.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const components = useMemo(() => {
        if (orders.length) {
            return orders.map(order => {
                const OrderComponent = componentsNames[order.componentName];
                const additionalDataJSON = JSON.parse(order.additionalDataJSON);

                return <OrderComponent key={order.id} {...additionalDataJSON} languageID={props.languageID}/>
            });
        } else {
            return [];
        }
    }, [orders, props.languageID]);

    return components;
}

export default HomePage;