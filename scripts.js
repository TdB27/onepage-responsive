/* add a classe show-icon no .navigation
  add  a classe show no .nav-1-2
*/
const navigationShowIcon = document.querySelector('.navigation')
const navShow = document.querySelector('.navigation .nav-1-2')
const toogle = document.querySelectorAll('.navigation .toogle')

for (element of toogle) {
  element.addEventListener('click', function () {
    navigationShowIcon.classList.toggle('show-icon')
    navShow.classList.toggle('show')
  })
}

/* add a classe show-active no #product */
const menuActivedProduct = document.querySelector('.nav-1 #product')
const activeOpacityProduct = document.querySelector('.nav-1 #opacity-product')
const activeButtonProduct = document.querySelectorAll('#link-product')

for (element of activeButtonProduct) {
  element.addEventListener('click', function () {
    menuActivedProduct.classList.toggle('show-active')
    activeOpacityProduct.classList.toggle('opacity-actived')
  })
}

/* add a classe show-active no #company */
const menuActivedCompany = document.querySelector('.nav-1 #company')
const activeOpacityCompany = document.querySelector('.nav-1 #opacity-company')
const activeButtonCompany = document.querySelectorAll('#link-company')

for (element of activeButtonCompany) {
  element.addEventListener('click', function () {
    menuActivedCompany.classList.toggle('show-active')
    activeOpacityCompany.classList.toggle('opacity-actived')
  })
}

/* add a classe show-active no #connect */
const menuActivedConnect = document.querySelector('.nav-1 #connect')
const activeOpacityConnect = document.querySelector('.nav-1 #opacity-connect')
const activeButtonConnect = document.querySelectorAll('#link-connect')

for (element of activeButtonConnect) {
  element.addEventListener('click', function () {
    menuActivedConnect.classList.toggle('show-active')
    activeOpacityConnect.classList.toggle('opacity-actived')
  })
}
