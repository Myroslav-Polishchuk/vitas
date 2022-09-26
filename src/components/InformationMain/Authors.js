import React from 'react'
import { HashLink } from 'react-router-hash-link';
import authorPublic from '@img/main/authors_public.png';

function Authors({linkText, imgAlt}) {
    return <HashLink to={'/authors/#'} className={"Authors"}>
        <img
            className={"Authors__img"}
            src={authorPublic}
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