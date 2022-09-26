import React, {useMemo} from 'react'
import ReactPaginate from 'react-paginate';

import getI18Text from '../utils/i18n';

import './Pagination.scss'

const defaultPaginationClass = 'paginationList';

function Pagination({
    dataLength,
    limitPerPage,
    paginationClassName,
    onPaginationChange,
    initialPage,
    forcePage,
    languageID,
    paginationPrevLabel,
    paginationNextLabel
}) {
    const labels = useMemo(() => {
        return {
            prevLabel: getI18Text(paginationPrevLabel || "paginationPrevLabel", languageID),
            nextLabel: getI18Text(paginationNextLabel || "paginationNextLabel", languageID)
        }
    }, [languageID, paginationPrevLabel, paginationNextLabel]);

    if (dataLength && (dataLength / limitPerPage > 1)) {
        return <ReactPaginate
            pageCount={dataLength / limitPerPage}
            pageRangeDisplayed={5}
            marginPagesDisplayed={5}
            previousLabel={labels.prevLabel}
            nextLabel={labels.nextLabel}
            initialPage={initialPage}
            forcePage={forcePage}
            containerClassName={paginationClassName || defaultPaginationClass}
            onPageChange={(page) => {
                onPaginationChange(page.selected + 1);
            }}
        />
    }
    return '';
}

export default Pagination;