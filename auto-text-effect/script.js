const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
speedEl.addEventListener('input', (event) => speed = 300 / event.target.value)

const writeText = () => {
    textEl.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) idx = 1
    setTimeout(writeText, speed)
}

let idx = 1
const text = 'We Love Programming'
let speed = 300 / speedEl.value

writeText()