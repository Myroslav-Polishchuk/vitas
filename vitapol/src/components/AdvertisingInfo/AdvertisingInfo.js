import React from 'react'

import './AdvertisingInfo.scss'

function AdvertisingInfo(props) {
    return <div className="advertisingFullWrapper globalWrapper">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img src={props.src} alt={props.alt}/>
        </a>
    </div>
}

AdvertisingInfo.defaultProps = {
    src: "#",
    alt: "#"
}

export default AdvertisingInfo;