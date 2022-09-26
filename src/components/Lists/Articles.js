import React from 'react'
import { HashLink } from 'react-router-hash-link';
import {createImgSrc} from './../utils/utils';

function Articles({previewArticles, ulClass, linkText, languageID}) {
	return <ul className={ulClass}>
		{previewArticles.map((data, index) => <ArticleItem {...data} languageID={languageID} key={'article' + index} linkText={linkText}/>)}
	</ul>
}

function ArticleItem({
	category,
	articles,
	linkText,
	languageID
}) {
	const titleText = category[languageID];
	const titleUrl = `/articles/${category.eng}`;
	const imgSrc = createImgSrc(category.imgLink, true);
	const imgAlt = category.imgAlt || '#';

	const ItemTitle = <>
		<div className={'articleTitle'}>
			<p className={'articleTitle__text'}>
				<HashLink to={`${titleUrl}/#`}>
					{titleText}
				</HashLink>
			</p>
			<HashLink to={`${titleUrl}/#`}>
				<img src="../../../public/img/main/arrow-news.png" alt="#"/>
			</HashLink>
		</div>
	</>

	const listArticles = <div className='links'>
		{articles.map((art, index) => {
			return <HashLink to={`/article/${art.id}/#`} key={art.id} className={index === 0 ? "firstLink" : ""}>
				{art.main_title}
			</HashLink>
		})}
	</div>

	return <li>
		<div className="articleItem">
			{ItemTitle}
			<div className="articleImg">
				<img src={imgSrc} alt={imgAlt}/>
			</div>
			{listArticles}
		</div>
		<HashLink to={`${titleUrl}/#`} className="articlesSpecialion">{linkText}</HashLink>
	</li>
}

export default Articles
