// Slider
let els = document.getElementsByClassName('slider-item')
let sliderIn = document.querySelector('.slider-in')
let widthN
let move = 0

init()
autoSlider()

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
    setTimeout(autoSlider, 3000)
}

// Slider 2
let sliderIn2 = document.querySelector('.slider-in2')
let move2 = 0
init2()
autoSlider2()

function init2() {
    console.log('Вычисление...')
    widthN = document.querySelector('.slider').offsetWidth
    sliderIn2.style.width = widthN * els.length + 'px'
    for (let n = 0; n < els.length; n++) {
        els[n].style.width = (widthN / 3) + 'px'
        els[n].style.height = 'auto'
    }
}

function autoSlider2() {
    move2 += widthN / 3
    if (move2 > (widthN / 3) * (els.length - 2)) {
        move2 = 0
    }
    sliderIn2.style.right = move2 + 'px'
    setTimeout(autoSlider2, 3000)
}