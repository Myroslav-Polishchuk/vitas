import React from 'react'

export default ({activitiesData, ulClass}) => (
    <ul className={ulClass}>
        {activitiesData.map(({imgSrc, imgAlt, url}) => (
            <li>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={imgSrc} alt={imgAlt}/>
                </a>
            </li>
        ))}
    </ul>
);