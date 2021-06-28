const upBtnd = document.querySelector('.up-button');
const downBtnd = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

const container = document.querySelector('.container')

const heigth = container.clientHeight

sidebar.style.top = `-${(slidesCount - 1)*100}vh`;

let ativeSlideIndex = 0;


upBtnd.addEventListener('click', () =>{
    moveSlides('up')
})


downBtnd.addEventListener('click', () =>{
    moveSlides('down')
})

function moveSlides(direction) {
    if (direction === 'up') {
        ativeSlideIndex++
        if (ativeSlideIndex === slidesCount)
        {
            ativeSlideIndex = 0
        }
    }

    if (direction === 'down') {
        ativeSlideIndex--;
        if (ativeSlideIndex < 0)
        {
            ativeSlideIndex = slidesCount - 1
        }
    }
    mainSlide.style.transform = `translateY(-${ativeSlideIndex * heigth}px)`
    sidebar.style.transform = `translateY(${ativeSlideIndex * heigth}px)`

}