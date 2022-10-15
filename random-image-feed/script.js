const getRandomSize = () => `${getRandomNr()}x${getRandomNr()}`
const getRandomNr = () => Math.ceil(Math.random() * 10) + 300

const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5

const container = document.querySelector('.container')
const spinnerDiv = document.querySelector(".spinner_div") 
// create our spinner
const spinner = document.createElement('div')
spinner.classList.add("ids-hourglass")

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
        spinnerDiv.appendChild(spinner)
        // set some timeout here so it's not instantaneous
        // update DOM with more images
        setTimeout(() => {
            loadImages()
            spinner.remove()
        }, 1500)
    }
}

loadImages()
window.onscroll = infiniteScroll