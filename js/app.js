// Language Buttons
const langBtn = document.querySelector(".langBtn");
const secMenu = document.querySelector(".sec-menu");
const langsBtns = document.querySelectorAll(".sec-menu button");

langBtn.addEventListener("click", function () {
  secMenu.classList.toggle("active");
})
langsBtns.forEach(li => {
  li.addEventListener("click", function () {
    langsBtns.forEach(lang => lang.classList.remove("active"));
    this.classList.add("active");
    langBtn.innerHTML = `${this.textContent} <i class="fa-solid fa-caret-down"></i>`;
  })
})

// Add Padding Top To Intro Depend On Header
const header = document.getElementById("header");
const intro = document.getElementById("intro");
intro.style.paddingTop = `${header.clientHeight + 50}px`;


// Add bgColor ToHeader when Scrolling
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "#fff";
  } else {
    header.style.backgroundColor = "transparent";
  }
})

// Menu Click
const menu = document.querySelector("header .menu");
const nav = document.querySelector("header nav");
menu.addEventListener("click", function () {
  nav.classList.toggle("active");
})


// About Swiper
let aboutSwiper = new Swiper('.aboutSwiper', {
  loop: true,
  navigation: {
    nextEl: '.about .button-next',
    prevEl: '.about .button-prev',
  },
})

// Portfolio Swiper
let portfolioSwiper = new Swiper('.portfolioSwiper', {
  loop: true,
  navigation: {
    nextEl: '.portfolio .button-next',
    prevEl: '.portfolio .button-prev',
  },
})

// Blog Swiper
let blogSwiper = new Swiper('.blogSwiper', {
  loop: true,
  navigation: {
    nextEl: '.blog .button-next',
    prevEl: '.blog .button-prev',
  },
})


