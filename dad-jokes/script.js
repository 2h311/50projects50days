const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

// async function generateJoke() {
//     const config = {headers: { Accept: 'application/json' }}
//     const res = await fetch('https://icanhazdadjoke.com', config)
//     const data = await res.json()
//     jokeEl.innerHTML = data.joke
// }

const generateJoke = async () => {
    const res = await axios.get('https://icanhazdadjoke.com', {headers: {'Accept': 'application/json'}})
    joke = await res.data.joke
    jokeEl.innerHTML = joke
}

jokeBtn.addEventListener('click', generateJoke)
generateJoke()