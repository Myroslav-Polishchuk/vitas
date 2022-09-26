import React from 'react'

import Section from '../../components/Section/Section';

function OrganizationPage(props) {
    return <Section
        breadcrumbsData={props.breadcrumbsData}
        titleText={props.titleData}
        advertisingIDProp={props.advertisingIDProp}
        languageID={props.languageID}
    >
        <ul className={"organizationPreviewList globalWrapper listImg clearPadding"}>
            {props.organizations.map((org) => (
                <li key={org.id}>
                    <a href={org.url} target="_blank" rel="noopener noreferrer">
                        <img src={org.Foto.imgSrc} alt={org.Foto.imgAlt}/>
                    </a>
                </li>
            ))}
        </ul>
    </Section>
}

export default OrganizationPage

