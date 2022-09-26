import React, {useCallback} from 'react';

import './ArrowTop.scss'

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
            <img src="../../../public/img/main/top-arrow-vitapol-info.png" alt="#"/>
        </div>
    </>
}

export default ArrowTop;