import React, {useState} from 'react'
import FormatText from '../../util/FormatText'

function References(props) {
    const [showReferences, setShowReferences] = useState(false);

    return <div className="References__wrapper">
        <div className="References">
            <span className="References__text">
                {props.ReferenceTitleName}
            </span>
            <div className="References__icon" onClick={() => (setShowReferences(!showReferences))}>
                <img src="/img/article/article_icon.png" alt="#"/>
            </div>
        </div>
        {showReferences && <div className="References__list" dangerouslySetInnerHTML={{__html: FormatText(props.references)}} />}
    </div>
}

export default References;