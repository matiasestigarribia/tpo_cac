//animacion del carrousel
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel__button--left');
const nextButton = document.querySelector('.carousel__button--right');
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentIndex = slides.findIndex(slide => slide === currentSlide);
    const prevIndex = currentIndex - 1;

    if (currentIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }

    moveToSlide(track, currentSlide, prevSlide);
});

nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentIndex = slides.findIndex(slide => slide === currentSlide);
    const nextIndex = currentIndex + 1;

    if (nextIndex === slides.length) {
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    } else {
        nextButton.classList.remove('is-hidden');
        prevButton.classList.remove('is-hidden');
    }

    moveToSlide(track, currentSlide, nextSlide);
});
