import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function BoardView() {
    let { page } = useParams();
    const [dataCont, setDataCont] = useState([]);
    const currentURL = window.location.href;
    const redirectTo = currentURL.includes('/news') ? '/news' : currentURL.includes('/notice') ? '/notice' : '';

    console.log(redirectTo);

    useEffect(() => {
        axios
            .get(`${process.env.PUBLIC_URL}/json/boardNews.json`)
            .then(response => {
                const ContData = response.data.newsData;
                const foundData = ContData.find(item => item.id === parseInt(page));
                if (foundData) {
                    setDataCont(foundData);
                }
            })
            .catch(error => {
                console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
            });
    }, []);

    return (
        <>
            <div className='ony-post'>
                <div className='ony-post__text'>
                    <div className='ony-post__title'>{dataCont.title}</div>
                    <div className='ony-post__sub-title'>
                        <span className='ony-post__news'>news</span>
                        <span className='ony-post__date'>{dataCont.date}</span>
                    </div>
                </div>
                <div className='ony-post__box'>
                    <img src={`${process.env.PUBLIC_URL}/${dataCont.imageView}`} className='ony-post__img' alt='' />
                    <p className='ony-post__desc' dangerouslySetInnerHTML={{ __html: dataCont.info }} />
                </div>
                <Link to={`/boardcon${redirectTo}`} className='ony-post__more'>
                    목록보기
                </Link>
            </div>
        </>
    );
}
export default BoardView;
