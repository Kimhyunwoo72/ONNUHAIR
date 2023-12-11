import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MainNews() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios
            .get('/json/boardNews.json')
            .then(response => {
                const fetchedData = response.data.newsData;
                setNewsData(fetchedData);
            })
            .catch(error => {
                console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
            });
    }, []);

    // 데이터 최대 3개까지만 불러오게
    const filteredData = newsData.slice(0, 3);

    return (
        <div className='ony__news ony__wrap'>
            <h2 className='ony__news-title main-title'>news</h2>
            <ul className='ony__news-list'>
                {filteredData.map(data => {
                    return (
                        <li className='ony__news-item'>
                            <Link to={'/boardview'} state={{ data: data }} className='ony__news-link'>
                                <span className='ony__news-box'>
                                    <span className='ony__news-text ony__news-date'>{data.date}</span>
                                    <span className='ony__news-text ony__news-sub-title'>{data.title}</span>
                                </span>
                                <span class='ony__news-text ony__news-desc'>{data.desc}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MainNews;
