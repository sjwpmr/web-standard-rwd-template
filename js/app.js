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
    const sections = [
        document.querySelector('#posts'),
        document.querySelector('#photos'),
        document.querySelector('#gaids')
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





const tabs=document.querySelectorAll('.guide-tabs li ')
const contents= document.querySelectorAll('.guide-content li')


init(0)

function init(num){
    tabs[num].classList.add('on')
    contents[num].classList.add('on')
}

function reset(){
    for(let i=0 ;i<tabs.length;i++){
        
        tabs[i].classList.remove('on')
        contents[i].classList.remove('on')
    }
}


tabs.forEach(function(tab,i){
    tab.addEventListener('click',function(){
        console.log(i)
        reset()
        init(i)
    })

})