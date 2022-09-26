import React, {useRef, useMemo, useCallback, useState, useEffect} from 'react';

function GooglePDFViewer(props) {
    const [timerID, setTimerID] = useState(0);
    const iframeRef = useRef(null);

    const src = useMemo(() => {
        return `http://docs.google.com/gview?url=${props.link}&embedded=true`;
    }, [props.link]);

    const updateIframe = useCallback(() => {
        if (iframeRef.current) {
            iframeRef.current.src = src;
        }
    }, [src]);

    useEffect(() => {
        if (!timerID) {
            setTimerID(setInterval(updateIframe, 4000));
        }
        return () => clearInterval(timerID);
    }, [timerID, updateIframe]);

    const stopReloading = useCallback((timerReloadID) => {
        clearInterval(timerReloadID);
    }, []);

    return <iframe
        title="article pdf-file"
        src={src}
        ref={iframeRef}
        className="articlePDF"
        frameBorder="0"
        onLoad={() => stopReloading(timerID)}
    />
}

export default  React.memo(GooglePDFViewer);