// Paging 컴포넌트
import React from 'react';
import Pagination from 'react-js-pagination';

function Paging(props) {
    const { activePage, itemsPerPage, data, setActivePage } = props;

    // 페이지 변경 핸들러 함수
    const handlePageChange = pageNumber => {
        setActivePage(pageNumber); // 페이지 변경 시 상태값 업데이트
    };

    // console.log('sfdsf : ' + data);
    let pagingPrev = <div className='paging-btn paging-prev'></div>;
    let pagingFirst = <div className='paging-btn paging-first'></div>;
    let pagingNext = <div className='paging-btn paging-next'></div>;
    let pagingLast = <div className='paging-btn paging-last'></div>;

    return (
        <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={data.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass='page-item'
            linkClass='page-link'
            hideDisabled='false'
            prevPageText={pagingPrev}
            firstPageText={pagingFirst}
            nextPageText={pagingNext}
            lastPageText={pagingLast}
        />
    );
}

export default Paging;
