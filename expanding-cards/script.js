const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        // remove active class
        document.querySelector(".active").classList.remove("active")
        // removeActiveClasses()
        panel.classList.add("active")
    })
})

function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove("active"))
}