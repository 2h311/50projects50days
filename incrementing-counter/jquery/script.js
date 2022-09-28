const counters = $(".counter")

counters.each((index, counter) => {
    counter = $(counter)
    counter.text(0)
    
    const updateCount = () => {
        const target = +counter.attr('data-target')
        const text = +counter.text()
        
        const increment = target / 200
        if (text < target) {
            counter.text(Math.ceil(text + increment)) 
            setTimeout(updateCount, 10)
        } else {
            counter.text(target) 
        }
    }
    updateCount()
})