let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev-slide', 'next-slide', 'hidden');

        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index === (currentSlide - 1 + totalSlides) % totalSlides) {
            slide.classList.add('prev-slide');
        } else if (index === (currentSlide + 1) % totalSlides) {
            slide.classList.add('next-slide');
        } else {
            slide.classList.add('hidden');
        }
    });
}

// 初始化轮播图显示
updateCarousel();
