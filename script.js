function openMenu() {
    const nav = document.querySelector('nav')
    nav.classList.toggle('open')
}

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector)
    if(elements.length > instance) {
        elements[instance].scrollIntoView({behavior: 'smooth'})
    }
}

const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")
const link4 = document.getElementById("link4")
const link5 = document.getElementById("link5")

link1.addEventListener('click', () => {
    scrollToElement('.main')
})

link2.addEventListener('click', () => {
    scrollToElement('.skills')
})

link3.addEventListener('click', () => {
    scrollToElement('.about')
})

link4.addEventListener('click', () => {
    scrollToElement('.portfolio')
})

link5.addEventListener('click', () => {
    scrollToElement('.pricing')
})