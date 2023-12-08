import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import img1 from '../../resource/image/collection/slide_img_main01.jpg';
import img2 from '../../resource/image/model-02.jpg';
import img3 from '../../resource/image/model-04.jpg';
import img4 from '../../resource/image/model-06.jpg';
import img5 from '../../resource/image/model-08.jpg';
import img6 from '../../resource/image/model-10.jpg';
import img7 from '../../resource/image/collection/slide_img_main03.jpg';
import img8 from '../../resource/image/collection/slide_img_main04.jpg';

const sliderData = [
    {
        id: 1,
        imageSrc: img1,
        title: 'ONNY N YOU / Hair',
        description: 'various waves'
    },
    {
        id: 2,
        imageSrc: img2,
        title: 'ONNY N YOU / Hair',
        description: 'various waves'
    },
    {
        id: 3,
        imageSrc: img3,
        title: 'ONNY N YOU / Hair',
        description: 'various waves'
    },
    {
        id: 4,
        imageSrc: img4,
        title: 'ONNY N YOU / Hair',
        description: 'various waves'
    },
    {
        id: 5,
        imageSrc: img5,
        title: 'ONNY N YOU / Hair',
        description: 'various waves'
    },
    {
        id: 6,
        imageSrc: img6,
        title: 'ONNY N YOU / Hair',
        description: 'various waves'
    },
    {
        id: 7,
        imageSrc: img7,
        title: 'ONNY N YOU / Hair',
        description: 'various waves'
    },
    {
        id: 8,
        imageSrc: img8,
        title: 'ONNY N YOU / Hair',
        description: 'various waves'
    }
];

function MainSlide() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = new Swiper(swiperRef.current, {
                centeredSlides: true,
                spaceBetween: 0,
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                }
            });

            return () => {
                swiper.destroy(true, true);
            };
        }
    }, []);

    return (
        <div className='ony__slider'>
            <div className='ony__slider-info'>
                <h2 className='ony__slider-title main-title'>collection</h2>
                <div className='swiper-pagination'></div>
            </div>
            <div ref={swiperRef} className='swiper ony__swiper'>
                <div className='swiper-wrapper'>
                    {sliderData.map(slide => (
                        <div className='swiper-slide' key={slide.id}>
                            <img src={slide.imageSrc} alt='' />
                            <div className='ony__slider-text'>
                                <h3 className='ony__slider-sub-title'>{slide.title}</h3>
                                <p className='ony__slider-desc'>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainSlide;
