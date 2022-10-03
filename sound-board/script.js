const sounds = document.querySelectorAll('audio')
console.log(buttons)
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound.getAttribute('id')
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound.getAttribute('id')).play()
    })
    buttons.appendChild(btn) // this shouldn't be working, but somehow it is
})

const stopSongs = () => {
    sounds.forEach(song => {
        song.pause()
        song.currentTime = 0
    })
}
