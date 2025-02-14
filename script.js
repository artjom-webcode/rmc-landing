/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".menu__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("header--active-shadow")
    : header.classList.remove("header--active-shadow");
};
window.addEventListener("scroll", scrollHeader);

/*=============== services-slider ===============*/
const swiperServices = new Swiper(".services-slider", {
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    900: {
      slidesPerView: 4,
      centeredSlides: false,
      loop: true,
      spaceBetween: 20,
    },
  },
});

/*=============== projects filter ===============*/
const list = document.querySelector(".projects__list");
const images = document.querySelectorAll(".projects__gallery-img");
const listItems = document.querySelectorAll(".projects__item");

function filter() {
  list.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;
    const target = event.target;

    /* Для класса активности(оранжевым текстом) */
    if (target.classList.contains("projects__item")) {
      listItems.forEach((listItm) => listItm.classList.remove("projects__item--active"));
      target.classList.add("projects__item--active");
    }

    switch (targetId) {
      case "all":
        getImg("projects__gallery-img");
        break;
      case "architecture":
        getImg(targetId);
        break;
      case "construction":
        getImg(targetId);
        break;
      case "interior":
        getImg(targetId);
        break;
    }
  });
}

filter();

function getImg(classname) {
  images.forEach((img) => {
    if (img.classList.contains(classname)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(`.hero__wrapper, .about, .footer, .availability, .team`);
sr.reveal(`.services-slider__img`, { delay: 600 });
sr.reveal(`.projects__gallery-img`, { interval: 100 });
sr.reveal(`.experience__inner`, { origin: "left" });
