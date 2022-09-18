// ika mode activated. form aint submitting, deal with it. lmao
const form = document.querySelector("form")
form.addEventListener("submit", event => event.preventDefault())

const password = document.querySelector("#password")
const background = document.querySelector("#background")
password.addEventListener("input", event => background.style.filter = `blur(${20 - event.target.value.length * 2}px)`)
