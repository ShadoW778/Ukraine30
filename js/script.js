let heightWindow = window.innerHeight
let widthWindow = window.innerWidth

document.querySelector('.header').style.height = heightWindow + 'px'

// let els = document.getElementsByClassName('slider-item')

// for (let n = 0; n < els.length; n++) {
//     els[n].style.width = (widthWindow / 3) + 'px'   
// }

document.onkeydown = event => {
    if (event.key == 'r') {
        location.reload()
    }
}

setTimeout(() => {
    document.querySelector('.header__rest', '.header__flag').style.opacity = '0.6'
    document.querySelector('.header__y').style.backgroundColor = 'yellow'
    document.querySelector('.header__y').style.visibility = 'visible'
    document.querySelector('.header__b').style.backgroundColor = 'blue'
    document.querySelector('.header__b').style.visibility = 'visible'
}, 2500)

setTimeout(() => {
    document.querySelector('.header__head').style.height = '50px'
}, 3700)


// function bodyLocker() {
//     document.querySelector('body').style.overflow = 'hidden'
//     setTimeout(bodyUnlocker, 2500)
// }

// bodyLocker()

// function bodyUnlocker() {
//     document.querySelector('body').style.overflow = 'visible'
// }