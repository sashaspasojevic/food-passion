/* hamburger */

const menuBtn = document.querySelector(".nav__btn");
const navLinks = document.querySelector(".nav__links");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navLinks.classList.add("show__links");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navLinks.classList.remove("show__links");
    // navLinks.style.display = "none";
    menuOpen = false;
  }
});

// menuBtn.addEventListener("click", () => {
//   navLinks.classList.toggle("show__links");
//   // navLinks.style.backgroundColor = "white";
// });

/*** modal ***/

const modalBtn = document.querySelector("#modalBTN");
const modalOverlay = document.querySelector(".modal__overlay");
const closeBtn = document.querySelector(".modal__btn");
const modalVideo = document.querySelector("#video");

// for modal
modalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("open__modal");
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("open__modal");
  modalVideo.stopVideo();
});

/*** tab ***/

const tabBtns = document.querySelectorAll(".tab__btn");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((btnActive) => {
      btnActive.classList.remove("tab__active");
    });

    btn.classList.add("tab__active");

    const tabContents = document.querySelectorAll(".tab__content");

    tabContents.forEach((tab) => {
      tab.classList.remove("tab__active");
    });

    document.querySelector(btn.dataset.targetTab).classList.add("tab__active");
  });
});

/*** reviews ***/

const swiper = new Swiper(".swiper", {
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
