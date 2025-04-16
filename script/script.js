// JavaScript for mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// Back to Top Button functionality
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  // Show the button after scrolling 200px
  if (window.scrollY > 200) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
