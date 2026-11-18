  AOS.init();
document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');
    const topBtn = document.querySelector('.top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            body.classList.add('scroll');
        } else {
            body.classList.remove('scroll');
        }
    });

    if (topBtn) {
        topBtn.addEventListener('click', (e) => {
            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const tabs = document.querySelectorAll('.guide-tabs li');
    const contents = document.querySelectorAll('.guide-content li');

    function init(num) {
        if (tabs[num] && contents[num]) {
            tabs[num].classList.add('on');
            contents[num].classList.add('on');
        }
    }

    function reset() {
        tabs.forEach((tab) => {
            tab.classList.remove('on');
        });

        contents.forEach((content) => {
            content.classList.remove('on');
        });
    }

    if (tabs.length > 0 && contents.length > 0) {
        init(0);

        tabs.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                reset();
                init(i);
            });
        });

        contents.forEach((content, i) => {
            content.addEventListener('click', () => {
                reset();
                init(i);
            });
        });
    }

    const mNavBtn = document.querySelector('.mob-nav-btn');

    if (mNavBtn) {
        mNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('m-nav-open');
        });
    }

    const gallery = document.querySelector('.gallery');

    if (gallery && typeof Swiper !== 'undefined') {
        new Swiper('.gallery', {
            navigation: {
                nextEl: '.gallery .swiper-button-next',
                prevEl: '.gallery .swiper-button-prev'
            },

            pagination: {
                el: '.gallery .swiper-pagination',
                clickable: true
            },

            loop: true
        });
    }
document.querySelectorAll('.hero .swiper-slide .inner').forEach(inner => {
    inner.addEventListener('click', () => {
        inner.classList.add('closed');
    });
});
});
