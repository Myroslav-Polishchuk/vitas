import React, {useState, useEffect} from 'react';
import { Document, Page } from 'react-pdf';

function ReactPDFviewer(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [screenHeight, setScreenHeight] = useState(1240);
    const [screenWidth, setScreenWidth] = useState(950);
    const [zoomLevel, setZoomLevel] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
        setZoomLevel(1);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    function upZoom() {
        if (zoomLevel >= 5) {
            return;
        }

        setZoomLevel(zoomLevel + 1);
    }

    function downZoom() {
        if (zoomLevel <= 0) {
            return;
        }

        setZoomLevel(zoomLevel - 1);
    }

    return (
        <div className={`pdfSection zoom-level-${zoomLevel}`}>
            <Document
                file={props.link}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page renderTextLayer={false} pageNumber={pageNumber} height={screenHeight} width={screenWidth} />
            </Document>

            <div className="panel">
                <div className="pages">

                    <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                    >
                        {'<'}
                    </button>

                    <span>
                        {`Сторінка ${pageNumber} з ${numPages}`}
                    </span>

                    <button
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        {'>'}
                    </button>
                </div>

                <div className="zoom">

                    <button
                        type="button"
                        disabled={zoomLevel <= 1}
                        onClick={downZoom}
                    >
                        {'-'}
                    </button>

                    <span>
                        {zoomLevel === 1 ? '100%' : `${100 + (zoomLevel - 1) * 20}%`}
                    </span>

                    <button
                        type="button"
                        disabled={zoomLevel >= 5}
                        onClick={upZoom}
                    >
                        {'+'}
                    </button>
                </div>
            </div>
      </div>
    );
}

export default React.memo(ReactPDFviewer);
