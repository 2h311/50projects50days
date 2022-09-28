const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerText = 0

    const updateCount = () => {
        const target = +counter.getAttribute('data-target')
        const text = +counter.innerText
        
        const increment = target / 200
        if (text < target) {
            counter.innerText = Math.ceil(text + increment)
            setTimeout(updateCount, 10)
        } else {
            counter.innerText = target
        }
    }
    updateCount()
})