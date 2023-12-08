import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import News from './News';
import Notice from './Notice';
import BoardView from '../boards/BoardView';

function BoardCon() {
    const [data, setData] = useState([]);
    const [activePage, setActivePage] = useState(1); // 현재 활성화된 페이지를 추적하는 상태값

    const location = useLocation();
    const path = location.pathname.split('/').pop();

    useEffect(() => {
        axios
            .get('/json/boardNews.json')
            .then(response => {
                const newsData = response.data.newsData;

                setData(newsData);
            })
            .catch(error => {
                console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
            });
    }, []);

    // 페이지당 아이템 개수 설정
    const itemsPerPage = 6;

    // 현재 페이지의 데이터 계산
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            {path === 'news' && <News activePage={activePage} itemsPerPage={itemsPerPage} data={data} setActivePage={setActivePage} currentItems={currentItems} />}
            {path === 'notice' && <Notice activePage={activePage} itemsPerPage={itemsPerPage} data={data} setActivePage={setActivePage} currentItems={currentItems} />}
        </>
    );
}

export default BoardCon;
