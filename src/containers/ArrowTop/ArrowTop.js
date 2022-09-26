import React, {useCallback} from 'react';

import './ArrowTop.scss'
import ArrowTopImg from '@img/main/top-arrow-vitapol-info.png';

function ArrowTop() {
    const onClickScrollTop = useCallback(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }, []);

    return <>
        <div className="arrowTop" onClick={onClickScrollTop}>
            <img src={ArrowTopImg} alt="#"/>
        </div>
    </>
}

export default ArrowTop;