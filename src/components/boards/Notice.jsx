import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Paging from './Paging';

function Notice(props) {
    const { activePage, itemsPerPage, data, setActivePage, currentItems } = props;

    useEffect(() => {
        gsap.to('.ony-basic__text-sub-title > span', { y: 0, duration: 1, ease: 'power2.out', delay: 0.5 });
        gsap.to('.ony-basic__text-title > h2', { y: 0, duration: 1, ease: 'power2.out', delay: 0.7 });
        gsap.to('.ony-notice__list', { y: 0, duration: 1, ease: 'power2.out', delay: 1.2, opacity: 1 });
    }, []);

    return (
        <>
            <div className='ony-notice sub-wrap'>
                <div className='ony-basic__text'>
                    <div className='ony-basic__text-sub-title'>
                        <span>notice</span>
                    </div>
                    <div className='ony-basic__text-title'>
                        <h2>ONNU notice</h2>
                    </div>
                </div>
                <div className='ony-notice__list head'>
                    <div className='ony-notice__item'>
                        <div href='#' className='ony-notice__link'>
                            <span className='ony-notice__num'>#</span>
                            <span className='ony-notice__name'>작성자</span>
                            <span className='ony-notice__title'>제목</span>
                            <span className='ony-notice__date'>등록일</span>
                        </div>
                    </div>
                </div>
                <ul className='ony-notice__list body'>
                    {currentItems.map((data, index) => {
                        return (
                            <li className='ony-notice__item'>
                                <Link to={'/boardview'} state={{ data: data }} className='ony-notice__link'>
                                    <span className='ony-notice__num'>
                                        {data.id}
                                        <span className='ony-notice__name'>{data.writer}</span>
                                    </span>
                                    <span className='ony-notice__name'>{data.writer}</span>
                                    <span className='ony-notice__title'>{data.title}</span>
                                    <span className='ony-notice__date'>{data.date}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {/* 페이징 컴포넌트 추가 */}
                <Paging activePage={activePage} itemsPerPage={itemsPerPage} data={data} setActivePage={setActivePage} />
            </div>
        </>
    );
}

export default Notice;
