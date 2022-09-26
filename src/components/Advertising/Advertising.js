import React from 'react'

import './Advertising.scss'
import {createImgSrc} from '../utils/utils'

function Advertising(props) {
    if (props.link && props.Foto) {
        props.Foto.imgSrc = createImgSrc(props.Foto.imgSrc);
        switch (props.type) {
            case 'infoMain':
                return <InfoMain {...props} {...props.Foto}/>
            case 'aside':
                return <Aside {...props} {...props.Foto}/>;
            case 'global':
            default:
                return <Global {...props} {...props.Foto}/>
        }
    } else {
        return '';
    }
}

export default Advertising;

function Aside(props) {
    return <div className="advertisingAside">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.imgSrc} alt={props.imgAlt}/>
        </a>
    </div>
}

function Global(props) {
    return <div className="advertisingFullWrapper globalWrapper">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.imgSrc} alt={props.imgAlt}/>
        </a>
    </div>
}

Global.defaultProps = {
    alt: "#"
}

function InfoMain(props) {
    return <>
        <a
            className="globalWrapper advertisingInfoWrapper"
            rel="noopener noreferrer"
            target="_blank"
            href={props.link}
        >
            <div className="imgWrapper">
                <img src={props.imgSrc} alt={props.imgAlt}/>
            </div>
        </a>
    </>

}

InfoMain.defaultProps = {
    alt: "#"
}
