import React from 'react';

import News from './News';
import CurrentPublication from './CurrentPublication';
import AdvertisingInfo from './../../containers/AdvertisingInfo';
import Magazines from './Magazines';
// import Authors from './Authors'

import './InformationMain.scss'

function InformationMain({
	newsPreview,
	magazinesData,
	titles,
	mainNews,
	advertisingID,
	languageID
}) {
	return <div className="InformationMainWrapper standartContainer globalWrapper">
		<News newsPreview={newsPreview} titleText={titles.newsTitle} languageID={languageID}/>
		{mainNews.id && <CurrentPublication {...mainNews} mainNewsTitle={titles.mainNewsTitle}/>}
		<Magazines magazinesData={magazinesData} titleText={titles.magazinesTitle} />
		<AdvertisingInfo advertisingID={advertisingID} type="infoMain"/>
		{/* <Authors linkText={titles.authorsLinkText} type={'infoMain'}/> */}
	</div>
}

export default InformationMain;