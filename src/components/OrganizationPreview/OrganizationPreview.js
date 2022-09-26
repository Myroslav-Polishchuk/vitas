import React from 'react'
import { HashLink } from 'react-router-hash-link';

import './OrganizationPreview.scss';
import PreviewContainer from './../PreviewContainer/PreviewContainer';

function OrganizationPreview(props) {
    return <PreviewContainer {...props.titleData}>
        <ul className={"organizationPreviewList globalWrapper listImg clearPadding"}>
            {props.organizations.map((org) => (
                <li key={org.id}>
                    <a href={org.url} target="_blank" rel="noopener noreferrer">
                        <img src={org.Foto.imgSrc} alt={org.Foto.imgAlt}/>
                    </a>
                </li>
            ))}
        </ul>
        <HashLink to="/organizations/#" className="videoViewMore" >{props.linkPreviewText}</HashLink>
    </PreviewContainer>
}

export default OrganizationPreview;