let addContact = document.querySelector('.addContact');
let newName = document.querySelector('.addName');
let newNumber = document.querySelector('.addNumber');
let addSection = document.querySelector('.add');
let addPara = document.createElement('p');

let search = document.querySelector('.searchContact');
let searchName = document.querySelector('.searchName');
let searchSection = document.querySelector('.search');
let searchPara = document.createElement('p');

let login = document.querySelector('.pwd');
let loginButton = document.querySelector('.loginButton')
let loginSection = document.querySelector('.login')
let loginPara = document.createElement('p');
let append = document.querySelector('.append')
let password = 'happy';

//phonebook 
let phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]

//add contacts
function contactPush(){
    if(newName.value === '' || newNumber.value === ''){
        addPara.textContent = 'Please enter a valid name and number'
    } else {
        addPara.textContent = 'contact added successfully'
        phonebook.push({name: newName.value, number: newNumber.value})
        for(contact of phonebook){
           console.log(contact)
           newName.value = ''
           newNumber.value = ''
    }
    }
}

// search contacts
function searchContact(){
for(let contact of phonebook){
    if(contact.name.toLowerCase() === searchName.value.toLowerCase()){
        searchPara.textContent = `${contact.name}: ${contact.number}`
        searchName.value = ''
        break;
    } else [
    searchPara.textContent = 'contact not found'
    ]
}
}
//login to see contacts
function loginFunction(){
    if(login.value !== password){
        loginPara.textContent = 'Not the right password!';
        loginSection.appendChild(loginPara);
        login.value = '';
        login.focus();
    } else {
        loginPara.textContent = '';
        logoutButton = document.createElement('button');
        logoutButton.setAttribute('class', 'logoutButton');
        logoutButton.textContent = 'logout';
        loginSection.removeChild(loginButton);
        loginSection.appendChild(logoutButton);
        logoutButton.addEventListener('click', logOut);

        for(let contact of phonebook){
        loginPara = document.createElement('p');
        loginPara.textContent = `${contact.name}: ${contact.number}`;
        append.appendChild(loginPara);
        login.value = '';
    }
    }
}

function logOut(){
        loginPara.textContent = 'You have successfully logged out';
        loginSection.appendChild(loginPara);
        loginSection.removeChild(logoutButton);
        loginSection.appendChild(loginButton);
        while (append.firstChild) {
            append.removeChild(append.firstChild);
        }
        loginButton.addEventListener('click', loginFunction);
}

addSection.appendChild(addPara);
searchSection.appendChild(searchPara);

addContact.addEventListener('click', contactPush);
search.addEventListener('click', searchContact);
loginButton.addEventListener('click', loginFunction)