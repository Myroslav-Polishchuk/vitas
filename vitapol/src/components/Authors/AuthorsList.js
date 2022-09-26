import React from 'react'
import { HashLink } from 'react-router-hash-link';
import utils from '../utils/utils';

import './Authors.scss'

function AuthorsList(props) {
    return <ul className="AuthorsList">
        {props.authors.map(author => {
            const name = utils.createAuthorInitials(author);
            if (!name) {
                return <></>
            }

            return <li key={author.id}>
                <HashLink to={`/authors/${author.id}/#`}>
                    {name}
                </HashLink>
            </li>
        })}
    </ul>
}

export default AuthorsList;