const codes = $(".code")
codes[0].focus()

codes.each(function (index, code) {
    $(this).on("keydown", ({ key }) => {
        if ((key >= 0) && (key <= 9)) {
            $(this).val('')
            next = index + 1
            if (!(next >= codes.length)) setTimeout(() => $(codes[next]).focus(), 10) 
        } else if (key === 'Backspace') {
            previous = index - 1
            if (!(previous < 0)) setTimeout(() => {
                $(codes[previous]).focus()
                $(codes[previous]).val('')
            }, 10)
        }
    })
})