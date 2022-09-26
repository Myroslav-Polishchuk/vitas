import React from 'react';
// import { HashLink } from 'react-router-hash-link';

import getI18Text from '../../components/utils/i18n'

import Links from '../Lists/Links';
import closeIcon from '@img/main/close_icon.png'

// const rightFirst = [
//     {
//         to: "/videosList",
//         name: "videoListTitle"
//     },
//     {
//         to: "/news",
//         name: "newsTitle"
//     },
//     {
//         to: "/recomendations/all",
//         name: "doctorPractic"
//     },
//     {
//         to: "/organizations",
//         name: "organizationPreviewTitle"
//     }
// ]

// const rightSecond = [
//     {
//         to: "/about",
//         name: "aboutCompany"
//     },
//     {
//         to: "/about/projects",
//         name: "projects"
//     },
//     {
//         to: "/about/services",
//         name: "services"
//     },
//     {
//         to: "/about/map",
//         name: "address"
//     }
// ]

function HiddenNavigationList({dataLinks, clicked, languageID, clickMenuHandler}) {
    const NavigationTitle = <>
        <div className={"hiddenNavigationTitle"}>
            <p className={"hiddenNavigationTitle__text"}>
                {getI18Text('articlesTitle', languageID)}
            </p>
        </div>
    </>;

    // const NavigationRightFirstList = <>
    //     <ul className="hiddenNavigationListRightFirst">
    //         {rightFirst.map(item => (
    //             <li onClick={clicked} key={item.to}>
    //                 <HashLink to={`${item.to}/#`}>{getI18Text(item.name, languageID)}</HashLink>
    //             </li>
    //         ))}
    //     </ul>
    // </>

    // const NavigationTitleRightSecond = <>
    //     <div className={"hiddenNavigationTitleRightSecond"}>
    //         <p className={"hiddenNavigationTitleRightSecond__text"}>
    //             {"ВІТ-А-ПОЛ"}
    //         </p>
    //     </div>
    // </>;

    // const NavigationRightSecondList = <>
    //     <ul className="hiddenNavigationListRightSecond">
    //         {rightSecond.map(item => (
    //             <li onClick={clicked} key={item.to}>
    //                 <HashLink to={`${item.to}/#`}>{getI18Text(item.name, languageID)}</HashLink>
    //             </li>
    //         ))}
    //     </ul>
    // </>

	return <div className="overlay">
        <div className="hiddenNavigationMenu">
            <div className="hiddenNavigationMenuLeft">
                {NavigationTitle}
                <Links dataLinks={dataLinks} ulClass='hiddenNavigationListLeft' languageID={languageID} clicked={clicked}/>
            </div>
            {/* <div className="hiddenNavigationMenuRight">
                {NavigationRightFirstList}
                <div>
                    {NavigationTitleRightSecond}
                    {NavigationRightSecondList}
                </div>
            </div> */}
            <button className="closeMenu" onClick={clickMenuHandler}>
                <img src={closeIcon} alt="#"/>
            </button>
        </div>
    </div>
}

export default HiddenNavigationList;