//  @@@@@@@@@@@@@@@@@@ PRELOADER @@@@@@@@@@@@@@@@@@
onload = () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 3000);
};

//  @@@@@@@@@@@@@@@@@@ SHOW NAVBAR @@@@@@@@@@@@@@@@@@

const toggle = document.getElementById('header-toggle');
const sidebar = document.getElementById('sidebar');
const bodypd = document.getElementById('body');
const headerpd = document.getElementById('header');

toggle.addEventListener('click', () => {
  // show navbar
  sidebar.classList.toggle('show');
  // change icon
  toggle.classList.toggle('bx-x');
  // add padding to body
  bodypd.classList.toggle('body-pd');
  // add padding to header
  headerpd.classList.toggle('body-pd');
});

//  @@@@@@@@@@@@@@@@@@  ACTIVE LINK @@@@@@@@@@@@@@@@@@

const linkColor = document.querySelectorAll('.nav__link');

linkColor.forEach((l) =>
  l.addEventListener('click', function activeLink() {
    linkColor.forEach((l) => l.classList.remove('active'));
    this.classList.add('active');
  })
);
