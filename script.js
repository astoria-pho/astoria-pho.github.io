document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.carousel .slides img');
    let currentIndex = 0;

    function showSlide(index) {
        slides[currentIndex].classList.remove('active');
        slides[index].classList.add('active');
        currentIndex = index;
    }

    document.querySelector('.next').addEventListener('click', function() {
        let nextIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : 0;
        showSlide(nextIndex);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        let prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : slides.length - 1;
        showSlide(prevIndex);
    });

    showSlide(currentIndex); // Show the first slide initially
});