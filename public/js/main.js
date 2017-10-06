var navBurger = document.getElementById('nav-burger')
var navMenu = document.getElementById('nav-menu')

navBurger.addEventListener('click', function () {
  navBurger.classList.toggle('change')
  navMenu.classList.toggle('dn')
})
