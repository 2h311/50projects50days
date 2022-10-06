const getData = async (url='https://randomuser.me/api?results=50') => {
    const response = await axios({
        method: 'get',
        url: url
    })
    const results = await response.data.results
    // clear result
    result.innerHTML = ''
    
    results.forEach(user => {
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(li)
    })
}

const filterData = searchTerm => {
    console.log(searchTerm)
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }        
    })
}

const result = document.querySelector('#result')
const filter = document.querySelector('#filter')
const listItems = new Array()

getData()
filter.addEventListener('input', (e) => filterData(e.target.value))
