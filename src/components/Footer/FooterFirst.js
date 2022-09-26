import React from 'react'

import Links from '../Lists/Links'

import { FooterFirstData } from '../../data/mock';

function FooterFirst() {
	const LinkList = <Links dataLinks={FooterFirstData} ulClass={"footerLinkList"} />

	return <div className="footerLeftWrapper">
		<div>
			<img src="./img/Слой_61.png" alt="#"/>
		</div>
		{LinkList}
	</div>
}

export default FooterFirst;