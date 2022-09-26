import React from 'react';
import { HashLink } from 'react-router-hash-link';

function CurrentPublication ({
	id,
	previewText,
	title,
	mainNewsTitle,
	mainImg
}) {
	return (
		<div className="currentPublicationWrapper">
			<HashLink to={`/news/${id}/#`} className="currentPublicationImg">
				<img src={mainImg.imgSrc} alt={mainImg.imgAlt}/>
				<span href={"#"}>
					{mainNewsTitle}
				</span>
			</HashLink>
			<div className="currentPublication__preview">
				<h4>
					<HashLink to={`/news/${id}/#`}>
						{title}
					</HashLink>
				</h4>
				<p>{previewText}</p>
			</div>
		</div>
	)
}

export default CurrentPublication;