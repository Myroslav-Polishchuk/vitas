import React from 'react'

import { HashLink } from 'react-router-hash-link';

function ListLinks({dataLinks, ulClass, listLinksRef, languageID, clicked}) {
	const links = dataLinks.map((dataLink) => {
		return <li key={dataLink.eng} onClick={clicked}>
			<HashLink to={`/articles/${dataLink.eng}/#`}>
				{dataLink[languageID]}
			</HashLink>
		</li>
	});

	return <ul className={ulClass} ref={listLinksRef}>
		{links}
	</ul>
}

ListLinks.defaultProps = {
	languageID: 'ukr'
}

export default ListLinks;