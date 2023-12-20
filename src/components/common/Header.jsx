import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../resource/image/logo.png'; // LogoImage 변수에 이미지 경로를 정의해주세요

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [logTime, setLogTime] = useState(false);

    useEffect(() => {
        const inactivityTime = 10000; // 10초
        let timer;

        const resetTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(logout, inactivityTime);
        };

        const logout = () => {
            console.log('자동 로그아웃되었습니다.');
            setLogTime(true);
        };

        const activityDetected = () => {
            resetTimer();
            localStorage.setItem('lastActivityTime', Date.now());
        };

        resetTimer();
        localStorage.setItem('lastActivityTime', Date.now());

        document.addEventListener('keypress', activityDetected);
        document.addEventListener('scroll', activityDetected);

        return () => {
            document.removeEventListener('keypress', activityDetected);
            document.removeEventListener('scroll', activityDetected);
            clearTimeout(timer);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className='ony__header'>
                <h1 className='ony__header-logo'>
                    <Link to='/ONNUHAIR'>
                        <img src={LogoImage} className='App-logo' alt='React' />
                    </Link>
                </h1>
                <nav className='ony__header-nav'>
                    <ul className='ony__header-list'>
                        <li className='ony__header-item'>
                            <Link to='/about' className='ony__header-link'>
                                about
                            </Link>
                        </li>
                        <li className='ony__header-item'>
                            <Link to='/shops' className='ony__header-link'>
                                shops
                            </Link>
                        </li>
                        <li className='ony__header-item'>
                            {/* <Link to={'/boardcon/news'} state={{ name: 'news' }} className='ony__header-link'> */}
                            <Link to={'/boardcon/news'} className='ony__header-link'>
                                news
                            </Link>
                        </li>
                        <li className='ony__header-item'>
                            {/* <Link to={'/boardcon/notice'} state={{ name: 'notice' }} className='ony__header-link'> */}
                            <Link to={'/boardcon/notice'} className='ony__header-link'>
                                Notice
                            </Link>
                        </li>
                        <li className='ony__header-item'>
                            <Link to='/location' className='ony__header-link'>
                                location
                            </Link>
                        </li>
                    </ul>
                </nav>
                <a href='' className='log'>
                    <span>
                        <span className='count-title'>{logTime ? `로그인` : `로그아웃`}</span>
                    </span>
                </a>
                <div className='ony__header-menu'>
                    <button type='button' id='toggle' onClick={toggleMenu} className='ony__header-menu-btn' aria-label='menu'>
                        <span></span>
                    </button>
                    <ul className={`ony__header-menu-list ${menuOpen ? 'off' : ''}`}>
                        <li className='ony__header-menu-item'>
                            <Link to='/about' className='ony__header-menu-link'>
                                about
                            </Link>
                        </li>
                        <li className='ony__header-menu-item'>
                            <Link to='/shops' className='ony__header-menu-link'>
                                shops
                            </Link>
                        </li>
                        <li className='ony__header-menu-item'>
                            <Link to='/boardcon' className='ony__header-menu-link'>
                                news
                            </Link>
                        </li>
                        <li className='ony__header-menu-item'>
                            <Link to='/location' className='ony__header-menu-link'>
                                location
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
