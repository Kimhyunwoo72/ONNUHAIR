/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import MainSlide from './MainSlide';
import MainCollection from './MainCollection';
import MainNews from './MainNews';
import { Link } from 'react-router-dom';

function Main() {
    const [data, setData] = useState(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const kvWidth = document.querySelector('.ony__kv').clientWidth;

        gsap.to('.ony__background', { height: 0, duration: 1, ease: 'power2.inOut' });
        gsap.to('.ony__kv-background', { height: 0, duration: 1.2, ease: 'power2.inOut' });
        if (kvWidth > 768) {
            gsap.to('.ony__kv-wrap', { scrollTrigger: { trigger: '.ony__kv', start: '40% center', end: 200 + '%', scrub: 1 }, scale: 1.1, backgroundPositionY: 90 + '%', ease: 'none', duration: 1 });
            gsap.to('.ony__about', { scrollTrigger: { trigger: '.ony__about', start: 'top center', end: '+3000', scrub: 1 }, y: -50 + '%', ease: 'none' });
            gsap.to('.ony__slider', { scrollTrigger: { trigger: '.ony__about', start: 'center center', end: '+3000', scrub: 1 }, y: -50 + '%', ease: 'none' });
            gsap.to('.ony__collection', { scrollTrigger: { trigger: '.ony__slider', start: 'center center', end: '+3000', scrub: 1 }, y: -30 + '%', ease: 'none' });
            // gsap.to('.ony__link', { scrollTrigger: { trigger: '.ony__link', start: '-100% center', end: '+2000', scrub: 1 }, y: -100 + '%', ease: 'none' });
            gsap.to('.ony__link', { scrollTrigger: { trigger: '.ony__link', start: '-100% center', end: '4000', scrub: 1 }, duration: 1, y: -50 + '%', ease: 'none' });
            gsap.to('.ony__news', { scrollTrigger: { trigger: '.ony__shop', start: '80% center', end: '150%', scrub: 1 }, y: -50 + '%', ease: 'none' });
        }
        gsap.to('.ony__about-text-show > span', { scrollTrigger: { trigger: '.ony__about', start: '-10% center' }, stagger: 0.3, y: 0, duration: 1, ease: 'power2.out' });

        gsap.to('.ony__link-sub-title > div', { scrollTrigger: { trigger: '.ony__link', start: '-50% center' }, stagger: 0.3, y: 0, duration: 1, ease: 'power2.out' });
        gsap.to('.ony__link-view', { scrollTrigger: { trigger: '.ony__link', start: '-100% center' }, stagger: 0.3, y: 0, duration: 1.5, ease: 'power2.out' });
        gsap.to('.ony__link-arrow', { scrollTrigger: { trigger: '.ony__link', start: '-10% center' }, stagger: 0.3, opacity: 1, duration: 3, ease: 'power2.out' });

        gsap.to('.ony__shop-prev', { scrollTrigger: { trigger: '.ony__shop', start: '-50% center', scrub: 1 }, y: -80 + '%', duration: 1 });
        gsap.to('.ony__shop-main', { scrollTrigger: { trigger: '.ony__shop', start: '-50% center', scrub: 1 }, y: -30 + '%', duration: 1 });
        gsap.to('.ony__shop-next > span', { scrollTrigger: { trigger: '.ony__shop', start: '-50% center', scrub: 1 }, y: -140 + '%', duration: 1 });

        gsap.to('.ony__collection-slider--up > .ony__collection-slider-box', { scrollTrigger: { trigger: '.ony__collection', start: '-30% center', scrub: 1 }, y: -40 + '%', duration: 0.1 });
        gsap.to('.ony__collection-slider--down > .ony__collection-slider-box', { scrollTrigger: { trigger: '.ony__collection', start: '-30% center', scrub: 1 }, y: 30 + '%', duration: 0.1 });
    }, []);

    return (
        <div className='ony'>
            <div className='ony__background'></div>
            <div className='ony__kv'>
                <div className='ony__kv-wrap'>
                    <div className='ony__kv-background'></div>
                    <div className='ony__kv-text'>
                        <h2 className='ony__kv-title'>Only n You</h2>
                        <p className='ony__kv-desc'>
                            "오직 당신만을 위한 헤어디자인" <br />
                            "Hair design only for you, ONNU"
                        </p>
                    </div>
                </div>
            </div>
            {/* kv END */}
            <div className='ony__about ony__wrap'>
                <h2 className='ony__about-title main-title'>ABOUT US</h2>
                <div className='ony__about-text'>
                    <div className='ony__about-sub-title'>
                        <div className='ony__about-text-show ony__about-text-show--ml'>
                            <span className='ony__about-sub-title--ml'>ONNU Hair presents a beautiful</span>
                        </div>
                        <div className='ony__about-text-show'>
                            <span>design filled with emotions</span>
                        </div>
                        <div className='ony__about-text-show'>
                            <span>and excitement just for you.</span>
                        </div>
                    </div>
                    <p className='ony__about-desc'>
                        Do your best to have a great day I'll do my best. Meet <br /> ONNUHair's professional designers Thank you for coming <br /> to "ONNU Hair"
                    </p>
                </div>
            </div>
            {/* about END */}

            <MainSlide></MainSlide>
            {/* slide END */}

            <MainCollection></MainCollection>

            <div className='ony__link'>
                <div className='ony__box'>
                    <h3 className='ony__link-title'>DESIGNERS</h3>
                    <div className='ony__link-text'>
                        <div className='ony__link-sub-title'>
                            <div>About Designers</div>
                        </div>
                        <Link to='/about' className='ony__link-click'>
                            <span className='ony__link-view'>
                                <span>view all</span>
                                <span>view all</span>
                            </span>
                            <span className='ony__link-arrow'></span>
                        </Link>
                    </div>
                </div>

                <div className='ony__box'>
                    <h3 className='ony__link-title'>SHOPS</h3>
                    <div className='ony__link-text'>
                        <div className='ony__link-sub-title'>
                            <div>Find Shops</div>
                        </div>
                        <Link to='/location' className='ony__link-click'>
                            <span className='ony__link-view'>
                                <span>view all</span>
                                <span>view all</span>
                            </span>
                            <span className='ony__link-arrow'></span>
                        </Link>
                    </div>
                </div>
            </div>

            <div class='ony__shop'>
                <div class='ony__shop-img ony__shop-prev'></div>
                <div class='ony__shop-img ony__shop-main'></div>
                <div class='ony__shop-img ony__shop-next'>
                    <span></span>
                </div>
            </div>

            <MainNews></MainNews>
            {/* news END */}
        </div>
    );
}

export default Main;
