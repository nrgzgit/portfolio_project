const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const scrollTop = document.querySelector(".scrollTop-btn");
const date = document.getElementById("date");

// Light Mode Toggle ()
function lightMode() {
  document.body.classList.toggle("light-mode");
}

// Navigation Toggle - Media Query (appears on min width)
navToggle.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
});

//Scroll Back To Top Button (appears on 800px scroll)

function checkScrollPosition() {
  if (window.scrollY > 800) {
    scrollTop.style.visibility = "visible";
  } else {
    scrollTop.style.visibility = "hidden";
  }
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", checkScrollPosition);

// Footer Date
date.innerHTML = new Date().getFullYear();

// Highlight Text On Scroll
// const paragraphToHighlight = document.querySelectorAll(".highlight");
// function isInViewport(element) {
//   const distance = element.getBoundingClientRect();
//   return (
//     distance.top >= 0 &&
//     distance.left >= 0 &&
//     distance.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     distance.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
// window.addEventListener(
//   "scroll",
//   function (event) {
//     paragraphToHighlight.forEach((element) => {
//       if (isInViewport(element)) {
//         element.classList.add("highlighted");
//       }
//     });
//   },
//   false
// );
