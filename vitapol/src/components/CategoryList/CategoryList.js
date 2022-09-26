import React from 'react'
import { HashLink } from 'react-router-hash-link';

import './CategoryList.scss'

function CategoryList({categories, languageID, categoryName, additionalStyleClass}) {
    const itemsArr = categories.map(item => {
        return <li className={'active'} key={item.id}>
            <HashLink to={`/${categoryName}/${item.eng}/#`}>
                {item[languageID]}
            </HashLink>
        </li>
    });

    return <ul className={`JournalList ${additionalStyleClass}`}>
        {itemsArr}
    </ul>
}

export default CategoryList;