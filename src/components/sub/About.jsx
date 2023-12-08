import { useEffect } from 'react';
import gsap from 'gsap';
import aboutImg1 from '../../resource/image/about/profile.jpg';

function About() {
    useEffect(() => {
        gsap.to('.ony-about__introduce-profile-background', { height: 0, duration: 1.5, ease: 'power2.in-out' });
        gsap.to('.ony-about__introduce-img', { scale: 1.2, duration: 4, ease: 'power2.in-out' });
        gsap.to('.ony-about__introduce-name > h2', { y: 0, duration: 1, delay: 1, ease: 'power2.out' });
        gsap.to('.ony-about__introduce-sub-title > p ', { y: 0, duration: 1, delay: 1.3, ease: 'power2.out' });
        gsap.to('.ony-about__introduce-desc', { opacity: 1, duration: 2, delay: 1.9, ease: 'power2.out' });
        gsap.to('.ony-about__history-title > h2', { scrollTrigger: { trigger: '.ony-about__history', start: '-15% center' }, y: 0, duration: 1, ease: 'power2.out' });
        gsap.to('.ony-about__history-item1', { scrollTrigger: { trigger: '.ony-about__history', start: '-15% center', scrub: 2, end: '-25%' }, y: 0, opacity: 1, duration: 1, ease: 'power2.out' });
        gsap.to('.ony-about__history-item2', { scrollTrigger: { trigger: '.ony-about__history', start: '15% center', scrub: 2, end: '-15%' }, y: 0, opacity: 1, duration: 1, ease: 'power2.out' });
        gsap.to('.ony-about__history-item3', { scrollTrigger: { trigger: '.ony-about__history', start: '50% center', scrub: 2, end: 'top' }, y: 0, opacity: 1, duration: 1, ease: 'power2.out' });
    }, []);

    return (
        <div className='ony-about sub-wrap'>
            <div className='ony-about__introduce'>
                <div className='ony-about__introduce-profile'>
                    <div className='ony-about__introduce-profile-background'></div>
                    <img src={aboutImg1} className='ony-about__introduce-img' alt='' />
                </div>
                <div className='ony-about__introduce-text'>
                    <div className='ony-about__introduce-title'>
                        <div className='ony-about__introduce-name'>
                            <h2>Jung you kyoung</h2>
                        </div>
                        <div className='ony-about__introduce-sub-title'>
                            <p>Always be enthusiastic</p>
                        </div>
                    </div>
                    <div className='ony-about__introduce-profile ony-about__introduce-profile--mo'>
                        <div className='ony-about__introduce-profile-background'></div>
                        <img src={aboutImg1} className='ony-about__introduce-img' alt='' />
                    </div>
                    <div className='ony-about__introduce-desc'>
                        ONNU 온앤유는 ONLY AND YOU 줄임말로 "오직 당신을 위한 헤어스타일"을 만들어 드린다는 뜻입니다.
                        <br />
                        단순히 머리는 불편함을 줄여주는 영역을 벗어나 개인의 스타일과 개성을 표현합니다.
                        <br />
                        고객에게 어울리는 헤어스타일을 표현할 수 있게 도움을 드려, 고객의 삶의 질을 향상시켜 주는 것이 ONNU의 역할이라고 생각합니다.
                        <br />
                        사람의 이미지를 아름답게 만들어주어 행복바이러스를 전달해주고 헤어스타일 뿐만아니라 마음까지 모두가 아름다워지는 공간을 만들어 드리겠습니다.
                        <div className='ony-about__introduce-desc--business-name'>
                            &#45;<em>ONNU</em>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ony-about__history'>
                <div className='ony-about__history-title'>
                    <h2>연혁</h2>
                </div>

                <ul className='ony-about__history-list'>
                    <li className='ony-about__history-item ony-about__history-item1'>
                        <div className='ony-about__history-name'>
                            <span>
                                AN ACADEMIC
                                <br /> CAREER
                            </span>
                        </div>
                        <div className='ony-about__history-box'>
                            <span className='ony-about__history-desc'>건국대학교 일반대학원 휴먼이미지학 박사과정 재학 </span>
                            <span className='ony-about__history-desc'>건국대학교 산업대학원 향장학과 석사 졸업</span>
                            <span className='ony-about__history-desc'>부천대학교 뷰티융합비즈니스과 강사</span>
                        </div>
                    </li>
                    <li className='ony-about__history-item ony-about__history-item2'>
                        <div className='ony-about__history-name'>
                            <span>EXPERIENCE</span>
                        </div>
                        <div className='ony-about__history-box'>
                            <span className='ony-about__history-desc'>이훈헤어 원장</span>
                            <span className='ony-about__history-desc'>mod's hair stylist</span>
                            <span className='ony-about__history-desc'>mod's hair 교육팀</span>
                            <span className='ony-about__history-desc'>graphy trend color c5 잡지 화보 촬영</span>
                            <span className='ony-about__history-desc'>graphy 10주년 헤어 디자이너 배틀 세미나 c5 경연</span>
                            <span className='ony-about__history-desc'>hit trend color c5 잡지 화보 촬영</span>
                            <span className='ony-about__history-desc'>styletv c5 촬영</span>
                        </div>
                    </li>
                    <li className='ony-about__history-item ony-about__history-item3'>
                        <div className='ony-about__history-name'>
                            <span>certificate</span>
                        </div>
                        <div className='ony-about__history-box'>
                            <span className='ony-about__history-desc'>국가 헤어 자격증</span>
                            <span className='ony-about__history-desc'>두피전문가 2급 자격증</span>
                            <span className='ony-about__history-desc'>네일테크니션 1급 자격증</span>
                            <span className='ony-about__history-desc'>한국헤나 2급 자격증</span>
                            <span className='ony-about__history-desc'>한국네일아트 2급 자격증</span>
                            <span className='ony-about__history-desc'>한국메이크업 2급 자격증</span>
                            <span className='ony-about__history-desc'>한국메이크업 3급 자격증</span>
                            <span className='ony-about__history-desc'>웰라 교육 수료</span>
                            <span className='ony-about__history-desc'>넘버쓰리 교육 수료</span>
                            <span className='ony-about__history-desc'>서울 국제 미용건강올림픽 퍼머넌트 부분 대상</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
