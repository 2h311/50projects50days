const APIURL = 'https://api.github.com/users/'

const main = $('#main')
const search = $('#search')[0]
const form = $('#form')

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch(err) {
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.html(cardHTML)
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.html(cardHTML)
}

function addReposToCard(repos) {
    const reposEl = $('#repos')
    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = $("<a></a>")
            repoEl.addClass('repo')
            repoEl[0].href = repo.html_url
            repoEl[0].target = '_blank'
            repoEl.text(repo.name) 

            reposEl.append(repoEl)
        })
}

form.on('submit', (e) => {
    e.preventDefault()

    const user = search.value
    if(user) {
        console.log(user)
        getUser(user)
        search.value = ''
    }
})