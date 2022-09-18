// ika mode activated. form aint submitting, deal with it. lmao
const form = $("form")
form.on("submit", event => event.preventDefault())

const password = $("#password")
const background = $("#background")
password.on("keypress", function (event) { 
    background[0].style.filter = `blur(${20 - event.target.value.length * 2}px)`
})
