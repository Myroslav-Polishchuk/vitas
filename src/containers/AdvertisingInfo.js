import React, {useState, useEffect} from 'react';

import Component from '../components/Advertising/Advertising';
import {advertisingAxios} from '../components/axios';

function AdvertisingInfo(props) {
    const [reclama, setReclama] = useState({
        src: props.src || "/img/reclama_2.png",
        alt: props.alt || "reclama_2",
        type: props.type || "aside",
        link: props.link || '#'
    });

    useEffect(() => {
        if (props.advertisingID) {
            advertisingAxios.get(`/${props.advertisingID}`)
                .then(response => {
                    if (response.status === 200) {
                        setReclama(response.data);
                    } else {
                        throw new Error('Recomendation Error');
                    }
                })
        }
    }, [props.advertisingID]);

    return <Component {...reclama} type={props.type}/>
}

export default React.memo(AdvertisingInfo);