import React, {useMemo} from 'react'
import './NotFoundPage.scss'

import getI18Text from '../../../components/utils/i18n'

function NotFoundPage(props) {
    const notFoundText = useMemo(() => {
        return getI18Text('notFound', props.languageID)
    }, [props.languageID]);

    return <div className="notFoundWrap globalWrapper">
        <span>{notFoundText}</span>
    </div>
}

export default NotFoundPage;