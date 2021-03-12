let heightWindow = window.innerHeight
let widthWindow = window.innerWidth

document.onkeydown = event => {
    if (event.key == 'r') {
        location.reload()
    }
}

// Changing header's height
document.querySelector('.header').style.height = heightWindow + 'px'

// Slider
let els = document.getElementsByClassName('slider-item')
let sliderIn = document.querySelector('.slider-in')
let widthN
let move = 0

init()
setTimeout(autoSlider, 4000)

function init() {
    console.log('Вычисление...')
    widthN = document.querySelector('.slider').offsetWidth
    sliderIn.style.width = widthN * els.length + 'px'
    for (let n = 0; n < els.length; n++) {
        els[n].style.width = (widthN / 3) + 'px'
        els[n].style.height = 'auto'
    }
}

window.addEventListener('resize', init)

function autoSlider() {
    move += widthN / 3
    if (move > (widthN / 3) * (els.length - 2)) {
        move = 0
    }
    sliderIn.style.right = move + 'px'
    if (move == (widthN / 3) * (els.length - 2)) {
        setTimeout(autoSlider, 6500)
    }
    else {
        setTimeout(autoSlider, 4000)
    }
}

// Changing properties
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
    if (widthWindow < 700) {
        document.querySelector('.header__head').style.height = '36px'
    }
    else {
        document.querySelector('.header__head').style.height = '50px'
    }
}, 3700)