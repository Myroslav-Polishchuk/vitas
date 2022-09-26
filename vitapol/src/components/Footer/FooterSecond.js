import React from 'react'
import getI18Text from '../../components/utils/i18n';

import { HashLink } from 'react-router-hash-link';

function FooterSecond(props) {
	return <div>
		<ul className={'footerList'}>
			<li><p><HashLink to="/about-site">{getI18Text("aboutSite", props.languageID)} http://vitapol.info</HashLink></p></li>
			<li><p><HashLink to="/privacy-policy/#">{getI18Text("agreement", props.languageID)} http://vitapol.info</HashLink></p></li>
		</ul>

		<div className={'footerTitle'}>
			{getI18Text("footerTitleText", props.languageID)}
		</div>
		<ul className={'footerList'}>
			<li><p>{getI18Text("footerAdress", props.languageID)}</p></li>
			<li><p>{getI18Text("footerTelBuilding", props.languageID)}</p></li>
			<li><p>{getI18Text("footerEmailBuilding", props.languageID)}</p></li>
		</ul>
	</div>
}

export default FooterSecond;