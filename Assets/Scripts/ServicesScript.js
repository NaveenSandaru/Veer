//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.card__article, .item');

    const scrollReveal = () => {
        let scrollPos = window.scrollY;
        items.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top + window.scrollY;
            if (itemTop < scrollPos + window.innerHeight * 0.85) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(50px)';
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); 
     // Run the function on page load to show visible items
});

/*==============SHOW SCROLLL UP===========================*/
const scrollup = () =>{
    const scrollup = document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                          : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollup)

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.ho');
    elements.forEach(function(element) {
        element.style.display = 'block'; // Makes the elements visible
    });
});

