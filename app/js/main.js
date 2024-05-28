document.addEventListener('DOMContentLoaded', function () {
  let burger = document.querySelector('.burger');
  let menuList = document.querySelector('.menu__items');
  let menuLinks = document.querySelectorAll('.menu__items a');

  function toggleMenu() {
    burger.classList.toggle('burger--active');
    menuList.classList.toggle('menu__items--active');

    if (menuList.classList.contains('menu__items--active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  burger.addEventListener('click', toggleMenu);

  menuLinks.forEach(function (link) {
    link.addEventListener('click', toggleMenu);
  });
});



// var swiper = new Swiper(".reviews-swiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 15,
//     },
//     768: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },
//   },
// });

var swiper = new Swiper(".reviews-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
  },
});