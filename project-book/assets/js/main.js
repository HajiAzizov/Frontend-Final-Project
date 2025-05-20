"use strict"

const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Add other options like autoplay if needed
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
  });
