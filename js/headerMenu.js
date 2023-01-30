document.addEventListener('DOMContentLoaded', () => {
  const imgHamburger = document.getElementById('img-hamburger');
  const listMenuNav = document.getElementById('list-menu-nav');
  const inputSearch = document.getElementById('input-search');

  imgHamburger.addEventListener('click', () => {
    if (listMenuNav.classList.contains('hide')) {
      listMenuNav.classList.remove('hide');
    } else {
      listMenuNav.classList.add('hide');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      imgHamburger.classList.add('hide');
      listMenuNav.classList.remove('hide');
      inputSearch.classList.add('hide');
    } else {
      imgHamburger.classList.remove('hide');
      listMenuNav.classList.add('hide');
      inputSearch.classList.remove('hide');
    }
  });

  if (window.innerWidth >= 768) {
    imgHamburger.classList.add('hide');
    listMenuNav.classList.remove('hide');
    inputSearch.classList.add('hide');
  } else {
    imgHamburger.classList.remove('hide');
    listMenuNav.classList.add('hide');
    inputSearch.classList.remove('hide');
  }
});