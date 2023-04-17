let navOpen = document.querySelector('.fa-bars')

let navClose = document.querySelector('.fa-xmark')

let navigation = document.querySelector('.nav-links')

navOpen.addEventListener('click', function () {
    navigation.style.top = '0'
})

navClose.addEventListener('click', function () {
    navigation.style.top = '-100px'
})