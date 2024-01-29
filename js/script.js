// Toggle class aktive

const navbarnav = document.querySelector('.navbar-nav a');

// ketika hamburger menu dikkli

document.querySelector('#hamburger-menu').onclick = () => {
  navbarnav.classList.toggle('active');
};
