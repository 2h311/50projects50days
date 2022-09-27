const contacts = [
    {
    'id': '1',
    'phone': '(415) 555-1212',
    'email': 'sabott@abottassoc.com',
    'company': 'Abbott & Assoc.',
    'name': 'Susan Abott',
    'avatar_url': 'https://avatars.githubusercontent.com/u/2?v=4',
    'starred': false,
    'moreContacts': [{'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'email', 'notes': 'adnai@gmail.com', 'jobs': 'Work'}]
    },
    {
    'id': '2',
    'phone': '(415) 555-1212',
    'email': 'jellen@usaimages.com',
    'company': 'USA Images',
    'name': 'Janet Ellen',
    'avatar_url': 'https://avatars.githubusercontent.com/u/1?v=4',
    'starred': false,
    'moreContacts': [{'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'email', 'notes': 'mascara@gmail.com', 'jobs': 'Work'}]
    },
    {
    'id': '3',
    'phone': '(415) 555-1212',
    'email': 'tony@uxplabs.com',
    'company': 'UXP Labs',
    'name': 'Tony Hahn',
    'avatar_url': 'https://avatars.githubusercontent.com/u/3?v=4',
    'starred': true,
    'moreContacts': [{'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'email', 'notes': 'adonai@mail.ru', 'jobs': 'Work'}]
    },
    {
    'id': '4',
    'phone': '(415) 555-1212',
    'email': 'blouden@fentris.com',
    'company': 'Fentris',
    'name': 'Bob Lauden',
    'avatar_url': 'https://avatars.githubusercontent.com/u/4?v=4',
    'starred': false,
    'moreContacts': [{'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'email', 'notes': 'name@email.com', 'jobs': 'Work'}]
    },
    {
    'id': '5',
    'phone': '(415) 555-1212',
    'email': 'iscott@scottarch.com',
    'company': 'Scott Architects',
    'name': 'Ingrid Scott',
    'avatar_url': 'https://avatars.githubusercontent.com/u/5?v=4',
    'starred': true,
    'moreContacts': [{'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'email', 'notes': 'amolamola@yahoo.com', 'jobs': 'Work'}]
    },
    {
    'id': '6',
    'phone': '(415) 555-1212',
    'email': 'hines@nbcsports.com',
    'company': 'NBC',
    'name': 'Hines Word',
    'avatar_url': 'https://avatars.githubusercontent.com/u/7?v=4',
    'starred': false,
    'moreContacts': [{'info': 'phone', 'notes': '(800) 555-1212', 'jobs': 'Work'}, {'info': 'phone', 'notes': '(800) 555-1002', 'jobs': 'Work'}, {'info': 'email', 'notes': 'xyz@gmail.com', 'jobs': 'Work'}]
    },
    
]

const addContact = ({ name, avatar_url, company, moreContacts }) => {        
    let div = document.querySelector('.contact-info')
    div.innerHTML = `
        <div class="contact-header">
            <img src="${avatar_url}" alt="${name}" id="contact-header--avatar">
            <div class="contact-header--inner">
            <h2>${name}</h2> 
            <p>Title</p>
            <p>${company}</p>
            </div>
        </div>
   
        <table class="contact-table">
            <thead class="deep-blue">
                <th>info</th>
                <th>notes</th>
                <th>jobs</th>
            </thead>
            <tbody></tbody>
        </table>
    `   
    moreContacts.forEach(contact => {
        if (contact.info === 'phone') {
            contactClass = "'fa fa-phone-square fa-lg'"
        } else if (contact.info === 'email') {
            contactClass = "'fa fa-envelope-o fa-lg'"
        }

        div.querySelector('.contact-table tbody').innerHTML += `<tr>
            <td><i class=${contactClass} aria-hidden="true"></i></td>
            <td>${contact.notes}</td>
            <td>${contact.jobs}</td>
        </tr>`        
    })
}

function showMore(id) {
    // find clicked contact
    const foundContact = contacts.find(contact => contact.id === id)
    addContact(foundContact)    
}

const tbody = document.querySelector("tbody")
contacts.forEach(contact => {    
    let { phone, avatar_url, name, company, email, starred, id } = contact
    tbody.innerHTML += `
    <tr class="contact" id=${id} onclick='showMore(this.id)'>
        <td class="contact-name">
            <img src=${avatar_url} alt=${name} class="contact-avatar">
            <span>${name}</span>
        </td>
        <td class="contact-company">${company}</td>
        <td class="contact-email">${email}</td>
        <td class="contact-phone">${phone}</td>
        <td class="contact-star">
            <i class="fa fa-star ${ starred === true ? 'yellow' : 'grey' }" aria-hidden="true"></i>
        </td>
    </tr>
    `
})
