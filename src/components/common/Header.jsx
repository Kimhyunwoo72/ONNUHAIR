/*eslint-disable*/

import LogoImage from '../../resource/image/logo.png';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const sessionTime = 30;

    const [logIn, logInToggle] = useState(true);
    const [seconds, setSeconds] = useState(sessionTime);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                let countTitle = document.querySelector('.count-title');
                countTitle.innerHTML = '로그인';
                logInToggle(!logIn);
            }
        }, 1000);

        window.addEventListener('mousemove', () => {
            setSeconds(sessionTime);
        });

        return () => clearInterval(timer);
    }, [seconds]);

    return (
        <>
            <header className='ony__header'>
                <h1 className='ony__header-logo'>
                    <Link to='/'>
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
                <a href='javascript:;' className='log'>
                    <span>
                        <span className='count-title'>로그아웃</span>
                        {logIn && <span>{seconds}초</span>}
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
