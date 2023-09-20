const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const scrollTop = document.querySelector(".scrollTop-btn");
const date = document.getElementById("date");

// Dark / Light Mode Toggle ()
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
