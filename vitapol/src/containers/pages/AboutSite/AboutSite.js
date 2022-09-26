import React, {useMemo} from 'react'

import Section from '../../../components/Section/Section';
import Component from '../../../components/AboutSite/AboutSite';
import getI18Text from '../../../components/utils/i18n';

import './AboutSite.scss'

function AboutSite(props) {
    const {TitleMainText, BreadcrumbsData} = useMemo(() => {
        const text = getI18Text('aboutSiteVitapol', props.languageID);

        return {
            BreadcrumbsData: [{
                text: text,
                url: ''
            }],
            TitleMainText: text
        }
    }, [props.languageID]);

    return <Section breadcrumbsData={BreadcrumbsData} titleText={TitleMainText} languageID={props.languageID}>
        <Component />
    </Section>
}

export default AboutSite;