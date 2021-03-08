let heightWindow = window.innerHeight
// document.querySelector('header').style.backgroundSize = `100% ${heightWindow}px`

document.onkeydown = event => {
    if (event.key == 'r') {
        location.reload()
    }
}

setTimeout(() => {
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