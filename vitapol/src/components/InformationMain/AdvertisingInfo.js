import React from 'react'

function AdvertisingInfo(props) {
    const classStyle = `advertisingInfoWrapper ${props.classStyle || ''}`;

    if (props.link && props.src) {
        return <a className={classStyle} rel="noopener noreferrer" target="_blank" href={props.link}>
            <div className="imgWrapper">
                <img src={props.src} alt={props.alt}/>
            </div>
        </a>
    } else {
        return <div className={classStyle}/>
    }
}

AdvertisingInfo.defaultProps = {
    alt: "#"
}

export default AdvertisingInfo;