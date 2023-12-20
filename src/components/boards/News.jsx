import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paging from './Paging';
import gsap from 'gsap';

function News(props) {
    const { activePage, itemsPerPage, data, setActivePage, currentItems } = props;

    useEffect(() => {
        gsap.to('.ony-basic__text-sub-title > span', { y: 0, duration: 1, ease: 'power2.out', delay: 0.5 });
        gsap.to('.ony-basic__text-title > h2', { y: 0, duration: 1, ease: 'power2.out', delay: 0.7 });
        gsap.to('.ony-news__list', { y: 0, duration: 1, ease: 'power2.out', delay: 1.2, opacity: 1 });
    }, []);
    return (
        <>
            <div className='ony-news sub-wrap'>
                <div className='ony-basic__text'>
                    <div className='ony-basic__text-sub-title'>
                        <span>news</span>
                    </div>
                    <div className='ony-basic__text-title'>
                        <h2>ONNU news</h2>
                    </div>
                </div>
                <ul className='ony-news__list'>
                    {currentItems.map((data, index) => {
                        return (
                            <li className={`ony-news__item ${data.show ? '' : 'close'}`} key={index}>
                                <Link to={'/boardview/news/' + data.id + ''} className='ony-news__link'>
                                    <div className='ony-news__img-wrap'>
                                        <img src={`${process.env.PUBLIC_URL}/${data.image}`} className='ony-news__img' alt='' />
                                    </div>
                                    <div className='ony-news__text-box'>
                                        <div className='ony-news__title'>{data.title}</div>
                                        <div className='ony-news__date'>{data.date}</div>
                                        <div className='ony-news__store-name'>onnu</div>
                                    </div>
                                </Link>
                                <div className='close__bg'>
                                    <p>EVENT 종료</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <Paging activePage={activePage} itemsPerPage={itemsPerPage} data={data} setActivePage={setActivePage} />
            </div>
        </>
    );
}

export default News;
