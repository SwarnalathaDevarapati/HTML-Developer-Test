document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById('prevButton');
    const nextBtn = document.getElementById('nextButton');
    let slides = document.querySelectorAll('.slides > div');
    let currentSlide = 0;

    function hideSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
    }

    function showSlide() {
        hideSlides(); 
        slides[currentSlide].style.display = 'block';
    }

    showSlide();

    window.nextSlide = function() {
        hideSlides();
        if(currentSlide === slides.length-1) currentSlide = -1;
        currentSlide++;
        slides[currentSlide].style.display = 'block';
    };

    window.previousSlide = function() {
        hideSlides();
        if(currentSlide === 0) currentSlide = slides.length;
        currentSlide--;
        slides[currentSlide].style.display = 'block';
    };

    nextBtn.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', previousSlide);
});
