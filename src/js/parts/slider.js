function slider() {
    let slideIndex = 1,
        sliderItem = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        slider_dots = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
     
    showSlides(slideIndex);
    function showSlides(n) {
        if(n > sliderItem.length) {
            slideIndex = 1;
        } if (n < 1){
            slideIndex = slideIndex.length;
        }

        // ахуенна
        sliderItem.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        sliderItem[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += 1);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    slider_dots.addEventListener('click', function(event) {
        for (let i = 0;i<dots.length+1; i++){
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;