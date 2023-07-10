// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx-x");
//   navBar.classList.toggle("active");
// };
// call back functon
const handleMenuClick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

menuIcon.addEventListener("click", handleMenuClick);

// scroll section active link
let Sections = document.querySelectorAll("section");
let NavLinks = document.querySelectorAll("header nav a");

// call back functon
const handleWindowScroll = () => {
  Sections.forEach((section) => {
    let top = window.scrollY;
    let offSet = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offSet && top < offSet + height) {
      NavLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.href.includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });
  // sticky Navbar
  let header = document.querySelector("header");
  header.classList.toggle("Sticky", window.scrollY > 100);

  //   remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
};

window.addEventListener("scroll", handleWindowScroll);
//  scroll reveal
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed js

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Youtuber", "Blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// window.onscroll = () => {
//   Sections.forEach((section) => {
//     let top = window.scrollY;
//     let offSet = section.offsetTop - 150;
//     let height = section.offsetHeight;
//     let id = section.getAttribute("id");

//     if (top >= offSet && top < offSet + height) {
//       NavLinks.forEach((link) => {
//         link.classList.remove("active");

//         if (link.href.includes(id)) {
//           link.classList.add("active");
//         }
//       });
//     }
//   });
//   // sticky Navbar
//   let header = document.querySelector("header");
//   header.classList.toggle("Sticky", window.scrollY > 100);

//   //   remove toggle icon and navbar when click navbar link (scroll)
//   menuIcon.classList.remove("bx-x");
//   navBar.classList.remove("active");
// };
