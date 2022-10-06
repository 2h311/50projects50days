const getRandomSize = () => `${getRandomNr()}x${getRandomNr()}`
const getRandomNr = () => Math.ceil(Math.random() * 10) + 300

const unsplashURL = 'https://source.unsplash.com/random/'
const container = document.querySelector('.container')
const rows = 5
for (let i = 0; i < rows * 3; i++){
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}