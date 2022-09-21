const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById("movies")
const form = document.getElementById("form")
const search = document.getElementById("search")

async function getMovies(url) {
    const res = await axios.get(url)
    console.log(res)
    showMovies(res.data.results)
}

const get_movie_rating = vote => {
    if (vote >= 8) {    
        value = 'green'
    } else if (vote >= 5) {
        value = 'orange'
    } else {
        value = 'red'
    }
    return value
}

function showMovies(movies) {
    main.innerHTML = ''

    for (movie of movies) {
        const { title, poster_path, vote_average, overview } = movie
        console.log(title)

        movieElement = document.createElement("div")
        movieElement.classList.add('movie')
        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h2 class="">${title}</h2>
                <span class="${get_movie_rating(vote_average)}">${vote_average}</span>
            </div>
            <div class="movie-overview">
                <h2>Overview</h2>
                <p>${overview}</p>
            </div>
        `
        main.appendChild(movieElement)
    }
}

getMovies(API_URL)

form.addEventListener("submit", event => {
    event.preventDefault()
    
    searchTerm = search.value
    if (searchTerm) {
        console.log(searchTerm)
        search.value = ""
        getMovies(SEARCH_API + searchTerm)
    } else {
        window.location.reload()
    }
})
