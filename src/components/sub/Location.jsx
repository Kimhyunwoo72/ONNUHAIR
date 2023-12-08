import { useEffect } from 'react';
import gsap from 'gsap';
import ReactIframe from 'react-iframe';

function Location() {
    useEffect(() => {
        var tl = gsap.timeline();

        tl.to('.ony-location-title > h2', { y: 0, duration: 1, ease: 'power2.out' });
        tl.to('.ony-location-map-background', { height: 0, duration: 1, ease: 'power2.out' });
        gsap.to('.ony-location-item', { scrollTrigger: { trigger: '.ony-location-list', start: '-100% center' }, stagger: 0.3, opacity: 1, y: 0, duration: 1 });
    }, []);
    return (
        <div className='ony-location sub-wrap'>
            <div className='ony-location-title'>
                <h2>location</h2>
            </div>
            <div className='ony-location-map'>
                <div className='ony-location-map-background'></div>
                <ReactIframe
                    url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.5571155716475!2d126.9494128654969!3d37.47893476185772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f8bdcc031a9%3A0x27634e6b59cfc0a9!2z7Jio7JWk7Jyg!5e0!3m2!1sko!2skr!4v1700444537008!5m2!1sko!2skr'
                    width='100%'
                    height='450'
                    allowfullscreen=''
                    loading='lazy'
                    referrerpolicy='no-referrer-when-downgrade'
                    className='ony-location-map__iframe'
                />
            </div>
            <ul className='ony-location-list'>
                <li className='ony-location-item'>
                    <div className='ony-location-box'>
                        <h3 className='ony-location-sub-title'>주소</h3>
                    </div>
                    <address className='ony-location-address'>
                        <span className='ony-location-desc'>
                            <em className='ony-location-address-title'>지번 :</em>
                            <span>서울시 관악구 봉천동 1568-1</span>
                        </span>
                        <span className='ony-location-desc'>
                            <em className='ony-location-address-title'>도로명 :</em>
                            <span>서울시 관악구 쑥고개로123번지 1층 온앤유</span>
                        </span>
                    </address>
                </li>
                <li className='ony-location-item'>
                    <div className='ony-location-box'>
                        <h3 className='ony-location-sub-title'>연락처</h3>
                    </div>
                    <address className='ony-location-address'>
                        <span className='ony-location-desc'>
                            <em className='ony-location-address-title'>대표번호 :</em>
                            <span>02-877-1101</span>
                        </span>
                    </address>
                </li>
                <li className='ony-location-item'>
                    <div className='ony-location-box'>
                        <h3 className='ony-location-sub-title'>운영시간</h3>
                    </div>
                    <div className='ony-location-address'>
                        <span className='ony-location-desc'>
                            <em className='ony-location-address-title'>운영시간 :</em>
                            <span>10:00 ~ 19:00</span>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Location;
