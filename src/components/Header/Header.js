import React, {useMemo} from 'react'
import { HashLink } from 'react-router-hash-link';
import LogoImage from '@img/main/vitapolHeader-new.png'

import Links from './Links'
import SearchForm from './SearchForm'
import getI18Text from '@components/utils/i18n'
// import SearchBar from './SearchBar'

import './Header.scss'

const secondNavBar = [
    {
        to: "/news",
        name: "newsTitle"
    },
    {
        to: "/recomendations/all",
        name: "doctorPractic"
    },
    {
        to: "/organizations",
        name: "organizationPreviewTitle"
    },
    {
        to: "/about",
        name: "aboutCompany"
    }
]

function Header(props) {
    const titles = useMemo(() => {
        return {
            video: getI18Text('videoListTitle', props.languageID),
        };
    }, [props.languageID]);

    return <header className="header">
        <div className="globalWrapper">
            <nav className="navigationUp">
                <div className="navigationUp__absolute">
                    {/* {props.ListLanguages} */}
                    <SearchForm languageID={props.languageID}/>
                </div>

                <div className="navigationUpImage">
                    <HashLink to={'/#'}>
                        <img src={LogoImage} alt=""/>
                    </HashLink>
                </div>
            </nav>
        </div>

        <nav className="navigationBottomWrapper">
            <div className="globalWrapper headerGlobalWrapper" ref={props.globalWrapperRef}>
                <HashLink className="goHomeWrapper" to={'/videosList/#'} onClick={props.clickedNavigationListMenuFalse}>
                    <span className="icon" />
                    <span className="iconText">
                        {titles.video}
                    </span>
                </HashLink>
                <Links
                    dataLinks={props.categories}
                    GlobalWrapperWidht={props.GlobalWrapperWidht}
                    languageID={props.languageID}
                    showHiddenMenu={props.showHiddenMenu}
                    clickedNavigationListMenu={props.clickedNavigationListMenu}
                    clickedNavigationListMenuFalse={props.clickedNavigationListMenuFalse}
                />
                {/* <SearchBar /> */}
            </div>
        </nav>
        <nav className="navigationGreen">
            <ul className="globalWrapper">
                {secondNavBar.map(item => (
                    <li onClick={() => {props.clickedNavigationListMenu(false)}} key={item.to}>
                        <HashLink to={`${item.to}/#`}>{getI18Text(item.name, props.languageID)}</HashLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
}

export default Header;

