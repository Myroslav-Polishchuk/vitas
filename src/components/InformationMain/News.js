import React from 'react'
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

import arrowNewsImg from '@img/main/arrow-news.png'

function News ({newsPreview, titleText}) {
	const NewsList = <ul className={"newsList"}>
		{newsPreview.map((dataLink) => {
			return <li key={dataLink.id}>
				<HashLink to={`/news/${dataLink.id}/#`}>
					{dataLink.title}
				</HashLink>
			</li>
		})}
	</ul>

	const NewsTitle = <>
		<div className={'newsTitle'}>
			<p className={'newsTitle__text'}>
				<HashLink to={'/news/#'} >
					{titleText}
				</HashLink>
			</p>
			<HashLink to='/news/#'>
				<img src={arrowNewsImg} alt="arrow-news"/>
			</HashLink>
		</div>
	</>

	return <div className="newsContainer">
		{NewsTitle}
		{NewsList}
	</div>
}

News.propTypes = {
	titleText: PropTypes.string.isRequired,
	newsDataArr: PropTypes.array.isRequired
}

News.defaultProps = {
	newsDataArr: []
}

export default News;