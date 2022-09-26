import React, {useMemo} from 'react';

import AboutMain from '../../../components/About/AboutMain';
import AboutMap from '../../../components/About/AboutMap';
import AboutProjects from '../../../components/About/AboutProjects';
import AboutServices from '../../../components/About/AboutServices';
import Section from '../../../components/Section/Section';

import getI18Text from '../../../components/utils/i18n';

import './AboutPage.scss';

const components = {
    projects: AboutProjects,
    map: AboutMap,
    services: AboutServices,
    default: AboutMain
};

const sectionLinksData = [
    {
        id: "aboutCompany",
        textProp: "aboutCompany",
        type: undefined,
        link: "/about/",
        order: 1
    },
    {
        id: "projects",
        textProp: "projects",
        type: "projects",
        link: "/about/projects",
        order: 2
    },
    {
        id: "services",
        textProp: "services",
        type: "services",
        link: "/about/services",
        order: 3
    },
    {
        id: "map",
        textProp: "map",
        type: "map",
        link: "/about/map",
        order: 4
    }
];

function AboutPage(props) {
    const AboutComponent = useMemo(() => {
        return components[props.match.params.pageType] || components.default;
    }, [props.match.params.pageType])

    const {TitleMainText, BreadcrumbsData, sectionLinksDataArr} = useMemo(() => {
        const text = getI18Text(props.match.params.pageType || 'aboutCompany', props.languageID);

        const sectionLinksDataArr = sectionLinksData.map(data => {
            return {
                textProp: getI18Text(data.textProp, props.languageID),
                link: data.link,
                type: data.type
            }
        });

        return {
            BreadcrumbsData: [{
                text: text,
                url: ''
            }],
            TitleMainText: text,
            sectionLinksDataArr: sectionLinksDataArr
        }
    }, [props.languageID, props.match.params.pageType]);

    return <Section breadcrumbsData={BreadcrumbsData} titleText={TitleMainText} sectionLinks={sectionLinksDataArr} languageID={props.languageID}>
        <AboutComponent />
    </Section>
}

export default AboutPage;