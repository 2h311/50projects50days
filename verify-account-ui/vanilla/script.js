const codes = document.querySelectorAll(".code")
codes[0].focus()

codes.forEach((code, index) => {
    code.addEventListener("keydown", ({ key }) => {
        console.log(key)
        if (key >= 0 && key <= 9) {
            code.value = ''
            next = index + 1
            if (!(next >= codes.length)) setTimeout(() => codes[next].focus(), 10)
        } else if (key === 'Backspace') {
            previous = index - 1
            if (!(previous < 0)) setTimeout(() => { 
                codes[previous].focus()
                codes[previous].value = ''
            }, 10)
        }
    })
})