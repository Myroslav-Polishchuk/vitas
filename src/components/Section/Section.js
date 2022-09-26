import React, {useState, useEffect} from 'react'
import { HashLink } from 'react-router-hash-link';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import TitleMain from '../../components/TitleMain/TitleMain';
import AdvertisingInfo from './../../containers/AdvertisingInfo';

import './Section.scss';

function Section({breadcrumbsData, titleText, children, advertisingIDProp, sectionLinks = [], languageID}) {
    const [advertisingID, setAdvertisingID] = useState('' || advertisingIDProp);

    useEffect(() => {
        setAdvertisingID(advertisingIDProp);
    }, [advertisingIDProp]);

    const titleMainHTML = titleText && <TitleMain text={titleText}/>;
    const breadcrumbsHTML = breadcrumbsData && <Breadcrumbs dataArr={breadcrumbsData} classStyle="breadcrumbs" languageID={languageID}/>
    const adversingInfoHTML = !!advertisingID ? <AdvertisingInfo advertisingID={advertisingID} type="aside"/> : <></>
    const Links = <>
        <ul className={`JournalList`}>
            {sectionLinks.map((item, index) => {
                return <li className={'active'} key={index}>
                    <HashLink to={`${item.link}#`}>
                        {item.textProp}
                    </HashLink>
                </li>
            })}
        </ul>
    </>

    return <div className="globalWrapper articlePage">
        <main className="ArticlePageMain">
            {breadcrumbsHTML}
            {sectionLinks.length ? Links : ''}
            {titleMainHTML}
            {children}
        </main>
        <aside className="articlePage__aside">
            {adversingInfoHTML}
        </aside>
    </div>
}

export default Section;