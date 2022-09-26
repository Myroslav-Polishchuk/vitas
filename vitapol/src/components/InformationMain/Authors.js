import React from 'react'
import { HashLink } from 'react-router-hash-link';;

function Authors({linkText, linkURL, imgSrc, imgAlt}) {
    return <HashLink to={'/authors/#'} className={"Authors"}>
        <img
            className={"Authors__img"}
            src='.../../../public/img/main/authors_public.png'
            alt={imgAlt}
        />
        <span className={"Authors__link"}>
            {linkText}
        </span>
    </HashLink>
}

Authors.defaultProps = {
    linkText: 'Автори >>',
    linkURL: '#',
    imgSrc: '#',
    imgAlt: '#'
}

export default Authors;