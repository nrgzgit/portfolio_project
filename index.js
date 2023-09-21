const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const scrollTop = document.querySelector(".scrollTop-btn");
const date = document.getElementById("date");

// Dark / Light Mode Toggle ()
function lightMode() {
  const body = document.body;
  body.classList.toggle("light-mode");
  const isLightMode = body.classList.contains("light-mode");
  localStorage.setItem("lightMode", isLightMode);
}

// Check if user previously selected light mode and apply it on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLightMode = localStorage.getItem("lightMode");

  if (savedLightMode === "true") {
    document.body.classList.add("light-mode");
  }
});

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
