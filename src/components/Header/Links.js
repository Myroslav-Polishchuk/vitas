import React from 'react';

import HiddenNavigationList from './HiddenNavigationList';
import Links from '../Lists/Links'

function LinksComp({GlobalWrapperWidht, dataLinks, languageID, showHiddenMenu, clickedNavigationListMenu, clickedNavigationListMenuFalse}) {
	const countLinks = calculateCountLinks(GlobalWrapperWidht, dataLinks, languageID);

	const HiddentNavigationMenu = showHiddenMenu && <HiddenNavigationList dataLinks={dataLinks} languageID={languageID} clicked={clickedNavigationListMenu} clickMenuHandler={clickedNavigationListMenuFalse}/>;
	const currentDataLinks = dataLinks.slice(0, countLinks);

	return (
		<div className="navigationListWrapper">
			<div className="navigationList">
				<Links dataLinks={currentDataLinks} ulClass={"navigationListLinks"} languageID={languageID} clicked={clickedNavigationListMenuFalse}/>
				<button onClick={clickedNavigationListMenu} className={"navigationOpenMenuBtn" + (showHiddenMenu ? " navigationOpenMenuBtn--active" : "")} />
			</div>
			{HiddentNavigationMenu}
		</div>
	)
};

LinksComp.defaultProps = {
	languageID: 'ukr'
}

export default React.memo(LinksComp);

function calculateCountLinks(GlobalWrapperWidht, dataLinks, languageID) {
	if (!dataLinks) {
		return 0;
	}
	const containerWidht = GlobalWrapperWidht * 0.66;

	let currentWidht = 0;
	let countLinks = 0;

	dataLinks.forEach((dataLink) => {
		const text = dataLink[languageID];
		const sLetters = text.length * 8;
		const size = sLetters + 10;

		currentWidht += size;
		if (currentWidht < containerWidht) {
			countLinks++;
		}
	});

	return countLinks;
}



