var lastScroll = 0
window.onscroll = function (e) {
  let navbar = document.getElementsByClassName('navbar')[0]
  let body = document.body

  if (window.scrollY - lastScroll > 0 && window.scrollY > 0 && window.scrollY > 0) {
    if (navbar.classList.contains('test')) {
      navbar.classList.remove('test')
      navbar.classList.add('no-test')

      body.classList.remove('content-test')
      body.classList.add('content-no-test')
    }
  }
  else if (window.scrollY - lastScroll < 0 && window.scrollY < 10) {
    if (!navbar.classList.contains('test')) {
      navbar.classList.add('test')
      navbar.classList.remove('no-test')

      body.classList.add('content-test')
      body.classList.remove('content-no-test')

    }
  }
  lastScroll = window.scrollY
}

window.onload = function () {
  let navbar = document.getElementsByClassName('navbar')[0]
  let body = document.body

  navbar.classList.add('test')
  navbar.classList.remove('no-test')

  body.classList.add('content-test')
  body.classList.remove('content-no-test')
}