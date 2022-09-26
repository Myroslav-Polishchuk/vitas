import React, {useRef, useEffect, useState, useCallback} from 'react'

import Component from '../components/Header/Header'

function Header(props) {
    const globalWrapperRef = useRef(null);
    const [GlobalWrapperWidht, setGlobalWrapperWidht] = useState(0);
    const [showHiddenMenu, setShowHiddenMenu] = useState(false);

    const clickMenuHandler = useCallback((status) => {
        if (status === true || status === false) {
            setShowHiddenMenu(status);
        } else {
            setShowHiddenMenu(!showHiddenMenu);
        }
    }, [showHiddenMenu]);

    const ListLanguages = getListLanguages(props.languageID, props.setLanguageID);

    useEffect(() => {
        setGlobalWrapperWidht(globalWrapperRef.current.clientWidth);
    }, []);

    return <Component
        {...props}
        GlobalWrapperWidht={GlobalWrapperWidht}
        ListLanguages={ListLanguages}
        globalWrapperRef={globalWrapperRef}
        showHiddenMenu={showHiddenMenu}
        clickedNavigationListMenu={clickMenuHandler}
        clickedNavigationListMenuFalse={() => {clickMenuHandler(false)}}
    />
}

export default Header;

function getListLanguages(languageID, setLanguageID) {
    const activeLanguageID = languageID ? languageID : "ukr";
    const listLanguages = [
        {
            id: "ukr",
            name: "Українська"
        },
        // {
        // 	id: "rus",
        // 	name: "Русский"
        // }
    ];

    if (listLanguages.length) {
        return (
            <ul className="listLanguages">
                {listLanguages.map(({id, name}, index) => {

                    let classStyle = "";
                    let text = name;
                    if (activeLanguageID === id) {
                        classStyle = "active";
                        text = name;
                    }
                    // if (index === 0) {
                    // 	text += ' /';
                    // }

                    return (
                        <li className={classStyle} key={id}>
                            <a onClick={() => {
                                setLanguageID(id)
                            }}>
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        )
    } else {
        return '';
    }
};