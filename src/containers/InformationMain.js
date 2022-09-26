import React, {useState, useEffect, useMemo} from 'react';

import {mainAxios, newsAxios} from '../components/axios';
import getI18Text from '../components/utils/i18n'
import Component from '../components/InformationMain/InformationMain'

function InformationMain(props) {
	const [mainNews, setMainNews] = useState({});
	const [newsPreview, setNewsPreview] = useState([]);
	const [magazinesData, setMagazinesData] = useState([]);

	const titles = useMemo(() => {
		return {
			newsTitle: getI18Text('newsTitle', props.languageID),
			magazinesTitle: getI18Text('MagazinesTitle', props.languageID),
			authorsLinkText: getI18Text('AuthorsLinkText', props.languageID),
			mainNewsTitle: getI18Text('mainNewsTitle', props.languageID)
		};
	}, [props.languageID]);

	useEffect(() => {
		mainAxios.get('/external')
			.then(response => {
				if (response.status === 200) {
					setMagazinesData(response.data);
				} else {
					throw new Error('Recomendation Error');
				}
			}).catch(err => {
				console.log(err);
			})

		newsAxios.get('/main')
			.then(response => {
				if (response.status === 200) {
					setMainNews(response.data);
				} else {
					throw new Error('Recomendation Error');
				}
			})
	}, [])

	useEffect(() => {
		if (mainNews.id) {
			newsAxios.get(`/preview/${mainNews.id}`)
				.then(response => {
					if (response.status === 200) {
						setNewsPreview(response.data);
					} else {
						throw new Error('Recomendation Error');
					}
				})
		}
	}, [mainNews])

	return <Component
		newsPreview={newsPreview}
		magazinesData={magazinesData}
		titles={titles}
		mainNews={mainNews}
		advertisingID={props.advertisingID}
		languageID={props.languageID}
	/>
}

export default InformationMain;