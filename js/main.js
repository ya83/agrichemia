document.addEventListener("DOMContentLoaded", function () {

    let menuItems = document.querySelectorAll('.navi-first__item');
    menuItems.forEach(function (el) {
        el.addEventListener('mouseover', function (e) {
            this.classList.add('hovered');
            this.parentNode.classList.add('hovered');
        });
        el.addEventListener('mouseout', function (e) {
            this.classList.remove('hovered');
            this.parentNode.classList.remove('hovered');
        });
    });
    let menuButton = document.querySelector('.menu__btn');
    let menuList = document.querySelector('.menu__btn-list');
    menuButton.addEventListener('click', function (e) {
        e.preventDefault();
        menuList.classList.toggle('active');
        menuButton.classList.toggle('actived')
    });


    document.addEventListener('scroll', function () {
        document.querySelector('.navi-father').classList.toggle('scrolled', window.pageYOffset > 70);
    });

    new Swiper('.product-slider__container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-arrow-next',
            prevEl: '.swiper-arrow-prev',
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween : 5,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        speed: 3000,
        breakpoints: {
            640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },

        }

    });
    new Swiper('.slider-info__container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.swiper-arrow-prev',
            nextEl: '.swiper-arrow-next',
        },
        autoplay: {
            delay: 3000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        speed: 3000
    });
    new Swiper('.slider-news__container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        autoplay: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.swiper-arrow-prev',
            nextEl: '.swiper-arrow-next',
        },
        speed: 3000,
        breakpoints: {
            992: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            }

        }
    });
    new Swiper('.distributors-slider__container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.swiper-arrow-prev',
            nextEl: '.swiper-arrow-next',
        },
        speed: 3000,
        breakpoints: {
            320: {
                autoplay: false,
                slidesPerView: 2,

            },
            480: {
                slidesPerView: 3,
            },
 
        }
    });
});