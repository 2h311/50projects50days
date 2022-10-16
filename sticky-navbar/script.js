const nav = document.querySelector(".nav")
window.addEventListener("scroll", fixNav)

function fixNav(){
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
}

// this only works in this scenario
// if the page loads. it's a goner
const navLinks = document.querySelector("ul.nav-links")
const navLinkList = document.querySelectorAll("a.nav-link")
navLinks.addEventListener("click", function(event){
    navLinkList.forEach(link => link.classList.remove("current"))
    event.target.classList.add("current")
})
