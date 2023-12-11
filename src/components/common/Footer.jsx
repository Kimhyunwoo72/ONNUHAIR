import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer ony__wrap'>
            <h2 className='footer__title'>ONNY N YOU</h2>
            <div className='footer-text'>
                <div className='footer__link'>
                    <ul className='footer__menu-list'>
                        <li className='footer__menu-item'>
                            <Link to='/about' className='footer__menu-link'>
                                about
                            </Link>
                        </li>
                        <li className='footer__menu-item'>
                            <Link to='/shops' className='footer__menu-link'>
                                shops
                            </Link>
                        </li>
                        <li className='footer__menu-item'>
                            <Link to='/news' className='footer__menu-link'>
                                news
                            </Link>
                        </li>
                        <li className='footer__menu-item'>
                            <Link to='/location' className='footer__menu-link'>
                                LOCATION
                            </Link>
                        </li>
                    </ul>
                    <ul className='footer__address-list'>
                        <li className='footer__address-item'>
                            <button type='button' className='footer__address-link'>
                                서울시 관악구 쑥고개로123번지 1층 온앤유{' '}
                            </button>
                        </li>
                        <li className='footer__address-item'>
                            <button type='button' className='footer__address-link'>
                                ONNU 대표원장 정유경
                            </button>
                        </li>
                        <li className='footer__address-item'>
                            <button type='button' className='footer__address-link'>
                                TEL 02-877-1101
                            </button>
                        </li>
                        <li className='footer__address-item'>
                            <a href='https://m.place.naver.com/hairshop/1124882560/home?entry=pll' className='footer__address-link' target='_blank' rel='noreferrer'>
                                예약 바로가기
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer__info'>
                    <ul className='footer__info-list'>
                        <li className='footer__info-item'>
                            <span className='footer__icon footer__icon-blog'></span>
                            <a href='https://blog.naver.com/onnu_hair' className='footer__info-link' target='_blank' rel='noreferrer'>
                                블로그
                            </a>
                        </li>
                        <li className='footer__info-item'>
                            <span className='footer__icon footer__icon-instagram'></span>
                            <a href='https://www.instagram.com/onnu__hair' className='footer__info-link' target='_blank' rel='noreferrer'>
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
