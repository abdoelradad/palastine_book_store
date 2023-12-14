/* Minimize Header on scroll */
const changeHeader = () => {
  const header = document.getElementById("header");
  const navbar = document.querySelector(".nav");
  const navLogo = document.querySelector(".nav__logo");
  const navMenu = document.querySelector(".nav__menu");
  const socialMedia = document.querySelector(".social__media-box");
  const textWrapper = document.querySelector(".text-wrapper");
  const title = document.querySelector(".title");
  const titleRight = document.querySelector(".title-right");
  const buttons = document.querySelector(".buttons");

  if (this.scrollY > 150) {
    header.classList.add("add-shadow");
    navbar.classList.add("changeHeader");
    navLogo.classList.add("changeHeader");
    navMenu.classList.add("changeHeader");
    socialMedia.classList.add("social__box-hide");
    textWrapper.classList.add("remove");
    title.classList.add("remove");
    titleRight.classList.add("remove");
    buttons.classList.add("change");
  } else {
    header.classList.remove("add-shadow");
    navbar.classList.remove("changeHeader");
    navLogo.classList.remove("changeHeader");
    navMenu.classList.remove("changeHeader");
    socialMedia.classList.remove("social__box-hide");
    textWrapper.classList.remove("remove");
    title.classList.remove("remove");
    titleRight.classList.remove("remove");
    buttons.classList.remove("change");
  }
};
window.addEventListener("scroll", changeHeader);

/* swiper for test */
let swiperTestimonial = new Swiper(".testimonial__container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

/* scroll reveal animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(".search-data");
sr.reveal(".input__group", { delay: 700 });
sr.reveal(".best-books__container, .testimonial__container", {
  delay: 700,
  origin: "left",
});
sr.reveal(".authors", {
  delay: 700,
  origin: "right",
});

/* categ buttons */
const categBtns = document.querySelectorAll(".category__item");
const categories = document.querySelector(".categoris__container");
var mixer = mixitup(categories);
function activeCateg() {
  categBtns.forEach((l) => l.classList.remove("active-item"));
  this.classList.add("active-item");
}
categBtns.forEach((l) => l.addEventListener("click", activeCateg));
