import React from 'react'

import FooterSecond from './FooterSecond';
import getI18Text from '../../components/utils/i18n'

import footerImg from '@img/main/vitapol-footer2.png'
import './Footer.scss'

function Footer(props) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footerInformation">
            <div>
                <img src={footerImg} alt="#"/>
            </div>

            <div className="footerContact">
                <p>
                    {getI18Text('footerSpecial', props.languageID)}
                </p>
                <p>
                    {`© ${currentYear}, ${getI18Text('rightsProtected', props.languageID)}`}
                </p>
            </div>
            <FooterSecond {...props} />
        </div>
    )
}

export default Footer;