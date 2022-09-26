import React from 'react'

import { HashLink } from 'react-router-hash-link';

const firstLetterUppercaseText = (text) => {
    if (!text) {
        return;
    }
    const letter = text.trim().charAt(0).toUpperCase();
    return letter + text.substring(1);
}

function Breadcrumbs({dataArr, classStyle, languageID}) {
    const data = [{
        text: languageID === 'ukr' ? "Домашня сторінка" : "Домашняя страница",
        url: "/"
    }, ...dataArr];

    return <p className={classStyle}>
        {data.map(({text, url}) => {
            if (!url) {
                return <span className="text" key={text + url}>
                    {firstLetterUppercaseText(text)}
                </span>
            } else {
                return <HashLink className="link" to={`${url}#`} key={text + url}>
                {`${firstLetterUppercaseText(text)} > `}
            </HashLink>
            }
        })}
    </p>
}

export default Breadcrumbs;
