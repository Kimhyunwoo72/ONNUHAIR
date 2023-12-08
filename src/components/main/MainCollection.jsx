import React, { useRef, useEffect } from 'react';

import img1 from '../../resource/image/slider01.jpg';
import img2 from '../../resource/image/slider02.jpg';
import img3 from '../../resource/image/slider03.jpg';
import img4 from '../../resource/image/slider04.jpg';

import img5 from '../../resource/image/slider05.jpg';
import img6 from '../../resource/image/slider06.jpg';
import img7 from '../../resource/image/slider07.jpg';
import img8 from '../../resource/image/slider08.jpg';

function MainCollection() {
    const swiperRef = useRef(null);

    useEffect(() => {}, []);

    return (
        <div className='ony__collection'>
            <div className='ony__collection-text'>
                <div className='ony__collection-sub-title'>STORIES</div>
                <div className='ony__collection-title'>
                    Know our
                    <br />
                    Stories
                </div>
            </div>
            <div className='ony__collection-slider ony__collection-slider--up'>
                <div className='ony__collection-slider-box'>
                    <img className='ony__collection-slider-img' src={img3} alt='' />
                    <img className='ony__collection-slider-img' src={img2} alt='' />
                    <img className='ony__collection-slider-img' src={img1} alt='' />
                    <img className='ony__collection-slider-img' src={img4} alt='' />
                </div>
            </div>
            <div className='ony__collection-slider ony__collection-slider--down'>
                <div className='ony__collection-slider-box'>
                    <img className='ony__collection-slider-img' src={img5} alt='' />
                    <img className='ony__collection-slider-img' src={img8} alt='' />
                    <img className='ony__collection-slider-img' src={img6} alt='' />
                    <img className='ony__collection-slider-img' src={img7} alt='' />
                </div>
            </div>
        </div>
    );
}

export default MainCollection;
