"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener("DOMContentLoaded", function () {
  var _ref, _ref2;

  var menuItems = document.querySelectorAll('.navi-first__item');
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
  var menuButton = document.querySelector('.menu__btn');
  var menuList = document.querySelector('.menu__btn-list');
  var containerHeader = document.querySelector('.container-header');
  menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    menuList.classList.toggle('active');
    menuButton.classList.toggle('actived');

    if (containerHeader) {
      containerHeader.classList.toggle('active');
    }
  });
  document.addEventListener('scroll', function () {
    document.querySelector('.navi-father').classList.toggle('scrolled', window.pageYOffset > 0);
  });
  new Swiper('.product-slider__container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-arrow-next',
      prevEl: '.swiper-arrow-prev'
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 5,
    centeredSlides: true,
    autoplay: {
      delay: 3000
    },
    loop: true,
    speed: 3000,
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  });
  new Swiper('.slider-info__container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.swiper-arrow-prev',
      nextEl: '.swiper-arrow-next'
    },
    autoplay: {
      delay: 3000
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 3000
  });
  new Swiper('.slider-news__container', (_ref = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    autoplay: false
  }, _defineProperty(_ref, "pagination", {
    el: '.swiper-pagination',
    clickable: true
  }), _defineProperty(_ref, "navigation", {
    prevEl: '.swiper-arrow-prev',
    nextEl: '.swiper-arrow-next'
  }), _defineProperty(_ref, "speed", 3000), _defineProperty(_ref, "breakpoints", {
    992: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  }), _ref));
  new Swiper('.distributors-slider__container', (_ref2 = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    autoplay: {
      delay: 3000
    }
  }, _defineProperty(_ref2, "pagination", {
    el: '.swiper-pagination',
    clickable: true
  }), _defineProperty(_ref2, "navigation", {
    prevEl: '.swiper-arrow-prev',
    nextEl: '.swiper-arrow-next'
  }), _defineProperty(_ref2, "speed", 3000), _defineProperty(_ref2, "breakpoints", {
    320: {
      autoplay: false,
      slidesPerView: 2
    },
    480: {
      slidesPerView: 3
    }
  }), _ref2));
});