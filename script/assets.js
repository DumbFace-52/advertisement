// Select the menu icon and nav links
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class when the menu icon is clicked
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
