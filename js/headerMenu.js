document.addEventListener('DOMContentLoaded', () => {
  const imgHamburger = document.getElementById('img-hamburger');
  const listMenuNav = document.getElementById('list-menu-nav');

  imgHamburger.addEventListener('click', () => {
    if (listMenuNav.classList.contains('hide')) {
      listMenuNav.classList.remove('hide');
    } else {
      listMenuNav.classList.add('hide');
    }
  });
});