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
let loginButton = document.querySelector('.loginButton');
let loginSection = document.querySelector('.login');
let loginPara = document.createElement('p');
let append = document.querySelector('.append');
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
           newName.value = ''
           newNumber.value = '' //has to be after the push otherwise it push blank values
    
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

//login function to see contacts
function loginFunction(){
    if(login.value !== password){
        loginPara.textContent = 'Not the right password!';
        loginSection.appendChild(loginPara);
        login.value = '';
        login.focus();
    } else {
        loginPara.textContent = '';
        login.value = '';
        createLogoutButton();
        loginSection.removeChild(loginButton);
        loginSection.appendChild(logoutButton);
        showContacts();
    }
}

//append the contacts to the page
function showContacts(){
    for(let contact of phonebook){
        loginPara = document.createElement('p');
        loginPara.textContent = `${contact.name}: ${contact.number}`;
        append.appendChild(loginPara);
    }
}

//creates logout button and add logout function to it
function createLogoutButton(){
    logoutButton = document.createElement('button');
    logoutButton.setAttribute('id', 'btn');
    logoutButton.textContent = 'logout';
    logoutButton.addEventListener('click', logOut);
}

//reset the logged in features when logged out button is pushed
function logOut(){
        loginPara.textContent = 'You have successfully logged out';
        loginSection.appendChild(loginPara);
        loginSection.removeChild(logoutButton);
        loginSection.appendChild(loginButton);
        while (append.firstChild) { //while append.firstChild is true removes all append.firstChild
            append.removeChild(append.firstChild);
        }
        loginButton.addEventListener('click', loginFunction);
}

addSection.appendChild(addPara);
searchSection.appendChild(searchPara);

addContact.addEventListener('click', contactPush);
search.addEventListener('click', searchContact);
loginButton.addEventListener('click', loginFunction)