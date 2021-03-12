let heightWindow = window.innerHeight
let widthWindow = window.innerWidth

document.querySelector('.header').style.height = heightWindow + 'px'

let els = document.getElementsByClassName('slider-item')
let sliderIn = document.querySelector('.slider-in')
let width

function init() {
    console.log('Вычисление...')
    width = document.querySelector('.slider').offsetWidth
    sliderIn.style.width = width * els.length + 'px'
    for (let n = 0; n < els.length; n++) {
        els[n].style.width = (width / 3) + 'px'
        els[n].style.height = 'auto'
    }
    console.log(width)
}

init()

window.addEventListener('resize', init)

document.onkeydown = event => {
    if (event.key == 'r') {
        location.reload()
    }
}

setTimeout(() => {
    document.querySelector('.header__y').style.opacity = '0.6'
    document.querySelector('.header__b').style.opacity = '0.6'
    document.querySelector('.header__yellow').style.opacity = '0.6'
    document.querySelector('.header__blue').style.opacity = '0.6'
    document.querySelector('.header__y').style.visibility = 'visible'
    document.querySelector('.header__b').style.visibility = 'visible'
    document.querySelector('.header__b').style.backgroundColor = 'blue'
    document.querySelector('.header__y').style.backgroundColor = 'yellow'
}, 2500)

setTimeout(() => {
    document.querySelector('.header__head').style.height = '50px'
}, 3700)