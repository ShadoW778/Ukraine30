let heightWindow = window.innerHeight

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

let scroll = false

document.onscroll = () => {
    if (scroll !== true) {
        return false
    }
}

setTimeout(() => {
    scroll = true
}, 3000)

// function bodyLocker() {
//     document.querySelector('body').style.overflow = 'hidden'
//     setTimeout(bodyUnlocker, 2500)
// }

// bodyLocker()

// function bodyUnlocker() {
//     document.querySelector('body').style.overflow = 'visible'
// }