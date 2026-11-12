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

    // 내비게이션 메뉴 클릭 시 해당 섹션으로 부드러운 스크롤
    const navLinks = document.querySelectorAll('header nav a');
    const sections = [
        document.querySelector('#posts'),
        document.querySelector('#photos'),
        document.querySelector('.profile')
    ];

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (sections[index]) {
                sections[index].scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});