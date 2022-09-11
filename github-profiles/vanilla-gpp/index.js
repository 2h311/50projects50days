let searchInput = document.querySelector("#search-user");

const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    searchedUser = searchInput.value
    console.log(searchedUser);
    // todo: pass searchedUser to axios 
    // clear the input field
    form.reset();
});

async function getUser(){
    const user = '2h311'
    const usersEndpoint = `https://api.github.com/users/${user}`;
    
    let response = await axios(usersEndpoint);
    
    if(response.status === 200){
        data = response.data;
        console.log(data);
        // This is a successful response
        name = data.name;
        bio = data.bio;
        followers = data.followers;
        followings = data.followings;
        publicRepos = data.public_repos;
        avatar = data.avatar_url;
    }

    // getREpos
    response = await axios(usersEndpoint+"/repos");
    if(response.status === 200){
        data = response.data.slice(0, 5);
        console.log(data);
    }
    
    

};


getUser();