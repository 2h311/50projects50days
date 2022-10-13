const getRandomSize = () => `${getRandomNr()}x${getRandomNr()}`
const getRandomNr = () => Math.ceil(Math.random() * 10) + 300

const unsplashURL = 'https://source.unsplash.com/random/'
const container = document.querySelector('.container')
const rows = 5

function loadImages() {
    for (let i = 0; i < rows * 3; i++){
        const img = document.createElement('img')
        img.src = `${unsplashURL}${getRandomSize()}`
        container.appendChild(img)
    }
}

function infiniteScroll () {
    totalPageHeight = document.body.scrollHeight
    scrollPoint = window.scrollY + window.innerHeight
    if (scrollPoint >= totalPageHeight) {
        // set some timeout here so it's not instantaneous
        // update DOM with more images
        setTimeout(loadImages, 1000)
    }
}

loadImages()
window.onscroll = infiniteScroll