import React from 'react';
import { HashLink } from 'react-router-hash-link';;

export default ({magazinesData, titleText}) => {
	const MagazinesTitle = <>
		<div className={'magazines'}>
			<p className={'magazines__text'}>
				{titleText}
			</p>
			<HashLink to='/about/projects/#'>
				<img src="../../../public/img/main/arrow-journals.png" alt="#"/>
			</HashLink>
		</div>
	</>

	const MagazinesList = <>
		<ul className={'magazinesList'}>
			{magazinesData.map(({url, name}) => {
				return <li key={name}>
					<a href={url} target="_blank" rel="noopener noreferrer">
						{name}
					</a>
				</li>
			})}
		</ul>
	</>

	return <div className="magazinesContainer">
		{MagazinesTitle}
		{MagazinesList}
	</div>
}
