import { gsap } from 'gsap';

  // 함수 내용
const kvWidth = document.querySelector('.ony__kv').clientWidth;

gsap.to('.ony__background', {
  height: 0,
  duration: 1,
  ease: 'power2.inOut'
});

gsap.to('.ony__kv-background', {
  height: 0,
  duration: 1.2,
  ease: 'power2.inOut'
});

// kv
if (kvWidth > 768) {
  gsap.to('.ony__kv-wrap', {
    scrollTrigger: {
      trigger: '.ony__kv',
      start: '40% center',
      end: 200 + '%',
      scrub: 1,
      pin: true
    },
    scale: 1.1,
    backgroundPositionY: 90 + '%',
    ease: 'none',
    duration: 1
  });
}

// kv

// main-about

// parallax-effext
if (kvWidth > 768) {
  gsap.to('.ony__about', {
    scrollTrigger: {
      trigger: '.ony__about',
      start: 'top center',
      end: '+2000',
      scrub: 1
    },
    y: -40 + '%',
    ease: 'none'
  });
}

gsap.to('.ony__about-text-show > span', {
  scrollTrigger: {
    trigger: '.ony__about',
    start: '-10% center'
  },
  stagger: 0.3,
  y: 0,
  duration: 1,
  ease: 'power2.out'
});
// main-about

// ony__slider
// parallax-effext
if (kvWidth > 768) {
  gsap.to('.ony__slider', {
    scrollTrigger: {
      trigger: '.ony__about',
      start: 'bottom center',
      end: '+2000',
      scrub: 1
    },
    y: -40 + '%',
    ease: 'none'
  });
}
// ony__slider

// ony__collection
// parallax-effext
if (kvWidth > 768) {
  gsap.to('.ony__collection', {
    scrollTrigger: {
      trigger: '.ony__slider',
      start: 'bottom center',
      end: '+2000',
      scrub: 1
    },
    y: -40 + '%',
    ease: 'none'
  });
}
// ony__collection

// ony__link
// parallax-effext
if (kvWidth > 768) {
  gsap.to('.ony__link', {
    scrollTrigger: {
      trigger: '.ony__link',
      start: '-100% center',
      end: '+1000',
      scrub: 1
    },
    y: -100 + '%',
    ease: 'none'
  });
}
gsap.to('.ony__link-sub-title > div', {
  scrollTrigger: {
    trigger: '.ony__link',
    start: '-50% center'
  },
  stagger: 0.3,
  y: 0,
  duration: 1,
  ease: 'power2.out'
});

gsap.to('.ony__link-view', {
  scrollTrigger: {
    trigger: '.ony__link',
    start: '-10% center'
  },
  stagger: 0.3,
  y: 0,
  duration: 1.5,
  ease: 'power2.out'
});

gsap.to('.ony__link-arrow', {
  scrollTrigger: {
    trigger: '.ony__link',
    start: '-10% center'
  },
  stagger: 0.3,
  opacity: 1,
  duration: 3,
  ease: 'power2.out'
});
// ony__link

// ony__shop
gsap.to('.ony__shop-prev', {
  scrollTrigger: {
    trigger: '.ony__shop',
    start: '-40% center',
    scrub: 1
  },
  y: -80 + '%',
  duration: 1
});

gsap.to('.ony__shop-main', {
  scrollTrigger: {
    trigger: '.ony__shop',
    start: '-40% center',
    scrub: 1
  },
  y: -30 + '%',
  duration: 1
});

gsap.to('.ony__shop-next > span', {
  scrollTrigger: {
    trigger: '.ony__shop',
    start: '-40% center',
    scrub: 1
  },
  y: -140 + '%',
  duration: 1
});
// ony__shop

//  ony__news
// parallax-effext
if (kvWidth > 768) {
  gsap.to('.ony__news', {
    scrollTrigger: {
      trigger: '.ony__shop',
      start: '-20% center',
      scrub: 1
    },
    y: -40 + '%',
    ease: 'none'
  });
}
// ony__shop-next
gsap.to('.ony__collection-slider--up > .ony__collection-slider-box', {
  scrollTrigger: {
    trigger: '.ony__collection',
    start: '-30% center',
    scrub: 1
  },
  y: -40 + '%',
  duration: 0.1
});

gsap.to('.ony__collection-slider--down > .ony__collection-slider-box', {
  scrollTrigger: {
    trigger: '.ony__collection',
    start: '-30% center',
    scrub: 1
  },
  y: 30 + '%',
  duration: 0.1
});
// ony__shop-next