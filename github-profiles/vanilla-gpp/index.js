const searchInput = document.querySelector("#search-user");
const form = document.querySelector("form");
const mainElement = document.querySelector("main.user");
const infoContainer = document.querySelector("div.info-container--inner");

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
        if (!data){
            notify = document.querySelector(".notification");
            notify.innerText = "No profile with this username";
        }else{
            const avatarImageElement = document.querySelector('img');
            avatarImageElement.classList.add('userAvatar');
            avatarImageElement.setAttribute("src", data.avatar_url);
            
            const headerElement = document.createElement("h2");
            headerElement.classList.add("user-name");
            headerElement.innerText = data.name;
    
            const paragraphElement = document.createElement("p");
            paragraphElement.classList.add("user-bio");
            paragraphElement.innerText = data.bio;
    
            const userRepo = document.createElement("div");
            userRepo.classList.add("user-repos");
            data.repos.forEach((repo =>{
                anchorElement = document.createElement("a");
                anchorElement.setAttribute("href", repo.html_url);
                anchorElement.innerText = repo.name;
                userRepo.append(anchorElement);
            }));

            // followers
            let listFollowersElement = document.createElement("li");
            listFollowersElement.innerHTML = `${data.followers} <strong>Followers</strong>`;
            
            // followings
            let listFollowingElement = document.createElement("li");
            listFollowingElement.innerHTML = `${data.followings} <strong>Following</strong`;
            
            // repos
            listReposElement = document.createElement("li");
            listReposElement.innerHTML = `${data.publicRepos} <strong>Repo</strong`;
        
            const unorderedListElement = document.createElement("ul");
            unorderedListElement.classList.add("user-stats");
            unorderedListElement.append(listFollowersElement, listFollowingElement, listReposElement);
            
            // clear the main.user if there's any element in it to accomodate new HTMLElements            
            mainElement.innerHTML = "";
            mainElement.append(headerElement, paragraphElement, unorderedListElement, userRepo); 
        }
        infoContainer.style.visibility = "visible";
    });
    form.reset();
});
