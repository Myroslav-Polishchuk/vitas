import React from 'react'

import { HashLink } from 'react-router-hash-link';

function Videos({dataVideos, ulClass, languageID}) {
    return 	<ul className={ulClass}>
        {dataVideos.map((data, index) => <VideosItem {...data} key={data.id} languageID={languageID}/>)}
    </ul>
}

export default Videos;

function VideosItem({id, previewImgSrc, Category, previewText, languageID}) {
    if (Category) {
        return <li>
            <HashLink className="imgLink" to={`/videos/${id}/#`}>
                <img src={previewImgSrc} alt={'#'}/>
            </HashLink>
            <h6>
                <HashLink to={`/videosList/${Category.eng}/#`}>
                    {Category[languageID]}
                </HashLink>
            </h6>
            <p>
                <HashLink to={`/videos/${id}/#`}>
                    {previewText}
                </HashLink>
            </p>
        </li>
    }

    return <></>
}