import shopImage1 from '../../resource/image/shop/shop01.jpg';
import shopImage2 from '../../resource/image/shop/shop03.jpg';
import shopImage3 from '../../resource/image/shop/shop04.jpg';
import shopImage4 from '../../resource/image/shop/shop08.jpg';
import shopImage5 from '../../resource/image/shop/shop07.jpg';
import shopImage6 from '../../resource/image/shop/shop02.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';

function Shop() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.ony-basic__text-sub-title > span', { y: 0, duration: 1, ease: 'power2.out', delay: 0.5 });
        gsap.to('.ony-basic__text-title > h2', { y: 0, duration: 1, ease: 'power2.out', delay: 0.7 });
        gsap.to('.ony-shop__box1', { y: 0, duration: 1, ease: 'power2.out', delay: 0.9, opacity: 1 });
        gsap.to('.ony-shop__box2', { scrollTrigger: { trigger: '.ony-shop__box2', start: '-50% center' }, opacity: 1, y: 0, duration: 1 });
        gsap.to('.ony-shop__bundle-title > h3', { scrollTrigger: { trigger: '.ony-shop__bundle', start: '-40% center' }, y: 0, duration: 1 });
        gsap.to('.ony-shop__bundle-desc > p', { scrollTrigger: { trigger: '.ony-shop__bundle', start: '-40% center' }, y: 0, duration: 1, delay: 0.4 });
        gsap.to('.ony-shop__shop__bundle-wrap', { scrollTrigger: { trigger: '.ony-shop__bundle', start: '-40% center' }, y: 0, duration: 1, delay: 0.6, opacity: 1 });
    });
    return (
        <div className='ony-shop sub-wrap'>
            <div className='ony-basic__text'>
                <div className='ony-basic__text-sub-title'>
                    <span>shops</span>
                </div>
                <div className='ony-basic__text-title'>
                    <h2>Shop Interior</h2>
                </div>
            </div>

            <div className='ony-shop__box ony-shop__box1'>
                <h3 className='ony-shop__box-title'>onnu shop</h3>
                <div className='ony-shop__box-info'>
                    <div className='ony-shop__box-info-text'>ONNU Shop - Space to Share</div>
                    <div className='ony-shop__box-info-img'>
                        <img src={shopImage1} alt='Shop 1' />
                    </div>
                </div>
            </div>

            <div className='ony-shop__box ony-shop__box2'>
                <h3 className='ony-shop__box-title'>onnu shop</h3>
                <div className='ony-shop__box-info'>
                    <div className='ony-shop__box-info-text'>ONNU Shop - Space to Share</div>
                    <div className='ony-shop__box-info-img'>
                        <img src={shopImage2} alt='Shop 2' />
                    </div>
                </div>
            </div>

            <div className='ony-shop__bundle'>
                <div className='ony-shop__bundle-text'>
                    <div className='ony-shop__bundle-title'>
                        <h3>ONNU 아름다워지는 공간</h3>
                    </div>
                    <div className='ony-shop__bundle-desc'>
                        <p>A space where you become beautiful</p>
                    </div>
                </div>
                <div className='ony-shop__shop__bundle-wrap'>
                    <img src={shopImage3} className='ony-shop__shop__bundle-img' alt='Shop 3' />
                    <img src={shopImage4} className='ony-shop__shop__bundle-img' alt='Shop 4' />
                    <img src={shopImage5} className='ony-shop__shop__bundle-img' alt='Shop 5' />
                    <img src={shopImage6} className='ony-shop__shop__bundle-img' alt='Shop 6' />
                </div>
            </div>
        </div>
    );
}

export default Shop;
