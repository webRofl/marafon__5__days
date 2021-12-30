const activeSlides = (activeSlide) => {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            cleanActiveClass();
            slide.classList.add('active');
        });
    });

    const cleanActiveClass = () => {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
    }
}

activeSlides(2);