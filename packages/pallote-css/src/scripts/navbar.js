const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const buttonNavbar = document.querySelector('.navbar_button');
const sidebar = document.querySelector('.sidebar');
const buttonSidebarOpen = document.querySelector('.sidebar_button');
const buttonSidebarClose = document.querySelector('.sidebar_button-close');

if (buttonNavbar !== null) {
  buttonNavbar.addEventListener('click', function () {
    buttonNavbar.classList.toggle('js-opened');
    navbar.classList.toggle('js-opened');
    body.classList.toggle('js-navbar');
  });
}

if (buttonSidebarOpen !== null) {
  buttonSidebarOpen.addEventListener('click', function () {
    sidebar.classList.add('js-opened');
    body.classList.add('js-sidebar');
    buttonNavbar.classList.remove('js-opened');
    navbar.classList.remove('js-opened');
    body.classList.remove('js-navbar');
  });
  buttonSidebarClose.addEventListener('click', function () {
    sidebar.classList.remove('js-opened');
    body.classList.remove('js-sidebar');
  });
}
