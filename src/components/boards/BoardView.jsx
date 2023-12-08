import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BoardView() {
    const location = useLocation();
    const data = location.state.data;

    return (
        <>
            <div className='ony-post'>
                <div className='ony-post__text'>
                    <div className='ony-post__title'>{data.title}</div>
                    <div className='ony-post__sub-title'>
                        <span className='ony-post__news'>news</span>
                        <span className='ony-post__date'>{data.date}</span>
                    </div>
                </div>
                <div className='ony-post__box'>
                    <img src={data.imageView} className='ony-post__img' alt='' />
                    <p className='ony-post__desc' dangerouslySetInnerHTML={{ __html: data.info }} />
                </div>
                <Link to='/news' className='ony-post__more'>
                    목록보기
                </Link>
            </div>
            ;
        </>
    );
}
export default BoardView;
