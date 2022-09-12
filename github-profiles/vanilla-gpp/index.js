const searchInput = document.querySelector("#search-user");
const form = document.querySelector("form");

async function getUser(user){
    const usersEndpoint = `https://api.github.com/users/${user}`;
    try {
        let response = await axios(usersEndpoint);
        if(response.status === 200){
            data = response.data;      
            response = await axios(data.repos_url);    
            if(response.status === 200) firstFiveRepos = response.data.slice(0, 5);
            return {
                "name": data.name || data.login,
                "bio": data.bio,
                "followers": data.followers, 
                "followings": data.following,
                "publicRepos": data.public_repos,
                "avatar_url": data.avatar_url,
                "repos": firstFiveRepos,
            }
        }   
    } catch (error) {
        return false
    }
};

form.addEventListener("submit", function(event){
    event.preventDefault();
    searchedUser = searchInput.value
    getUser(searchedUser).then(data => {
        console.log(data);

        const avatarImageElement = document.querySelector('img');
        avatarImageElement.classList.add('userAvatar');
        avatarImageElement.setAttribute("src", data.avatar_url);

        document.querySelector(".user-name").innerText = data.name;
        document.querySelector(".user-bio").innerText = data.bio;

        const userRepo = document.querySelector(".user-repos");
        data.repos.forEach((repo =>{
            console.log(repo.name, repo.url);
            anchorElement = document.createElement("a");
            anchorElement.setAttribute("href", repo.html_url);
            anchorElement.innerText = repo.name;
            userRepo.append(anchorElement);
        }));

        // followers
        let listElement = document.createElement("li");
        listElement.innerHTML = `${data.followers} <strong>Followers</strong>`;
        document.querySelector(".user-stats").appendChild(listElement);
        console.log(data.followers);

        // followings
        listElement = document.createElement("li");
        listElement.innerHTML = `${data.followings} <strong>Following</strong`;
        document.querySelector(".user-stats").appendChild(listElement);

        // repos
        listElement = document.createElement("li");
        listElement.innerHTML = `${data.publicRepos} <strong>Repo</strong`;
        document.querySelector(".user-stats").appendChild(listElement);
    });
    // clear the input field
    form.reset();
});
