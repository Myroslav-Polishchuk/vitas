import React from 'react'

import './PreviewContainer.scss'
import getI18Text from '../utils/i18n'

function PreviewContainer({languageProperty, languageName, classStyle, containerStyle, children}) {
    const titleText = getI18Text(languageProperty, languageName);
    let divS;
    let textS;
    let linkS;

    if (titleText && classStyle) {
        divS = classStyle;
        textS = `${classStyle}__text`
        linkS =`${classStyle}__link`
    }

    const Title = titleText ? <>
        <div className={`previewTitle ${divS ? divS : ''}`}>
            <p className={textS}>
                {titleText}
            </p>
            <div className={linkS}>
                <a href="#" />
            </div>
        </div>
    </> : '';

    return <div className={`${containerStyle ? containerStyle : ''} previewContainer standartContainer globalWrapper`}>
        {Title}
        {children}
    </div>
}

export default PreviewContainer;