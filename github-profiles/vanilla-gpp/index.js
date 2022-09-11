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
    getUser(searchedUser).then(data => console.log(data));
    // clear the input field
    form.reset();
});
