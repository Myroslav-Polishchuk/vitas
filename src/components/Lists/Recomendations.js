import React from 'react'
import { HashLink } from 'react-router-hash-link';

function Recomendations({recomendations, ulClass, languageID}) {
    if (!recomendations.length || !recomendations[0].recomendations || !recomendations[0].recomendations.length) {
        return '';
    }
    return <ul className={ulClass}>
        {recomendations.map((data, index) => data.category.id !== 'all'
            ? <RecomendationItem {...data} languageID={languageID} key={'recomendation' + index}/>
            : <RecomendationItemAll {...data} languageID={languageID} key={'recomendation' + index}/>)}
    </ul>
}

export default Recomendations;

function RecomendationItem({category, recomendations, languageID, viewMoreText}) {
    const RecomendationTitle = <>
        <div className={"recomendationItemTitle"}>
            <HashLink to={`/recomendations/${category.eng}/#`} className={`recomendationItemTitle__text`}>
                {category[languageID]}
            </HashLink>
            <div className={`recomendationItemTitle__link`}>
                <HashLink to={`/recomendations/${category.eng}/#`} />
            </div>
        </div>
    </>

	return (
		<li>
			{RecomendationTitle}
			<div>
                {recomendations.map(rec => {
                    return <a
                        className={'recomendationItemTitle__dataLink'}
                        key={rec.id}
                        href={rec.File && rec.File.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {rec.text}
                    </a>
                })}
			</div>
		</li>
	)
}

function RecomendationItemAll({recomendations, languageID}) {
	return <>
        {recomendations.map(rec => {
            return <li>
                <div className={"recomendationItemTitle"}>
                    <HashLink to={`/recomendations/${rec.category.eng}/#`} className={`recomendationItemTitle__text`}>
                        {rec.category[languageID]}
                    </HashLink>
                    <div className={`recomendationItemTitle__link`}>
                        <HashLink to={`/recomendations/${rec.category.eng}/#`} />
                    </div>
                </div>
                <div>
                    {rec.recomendations.map(recomend => {
                        return <a
                            className={'recomendationItemTitle__dataLink'}
                            key={recomend.id}
                            href={recomend.File && recomend.File.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {recomend.text}
                        </a>
                    })}
                </div>
            </li>
        })}
	</>
}

Recomendations.defaultProps = {
    recomendations: []
}
