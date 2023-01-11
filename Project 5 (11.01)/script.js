const containerData = document.querySelector('#data');
const addButton = document.querySelector('#addMe');
const inputUser = document.querySelector('#username');

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(result => {
        console.log(result.data);
        const userData = result.data
        const userElement = userData.map((element) => {
            const innerUserElement = document.createElement('div');
            innerUserElement.innerHTML = `
            <img src=${element.avatar}></img> ${element.first_name} ${element.last_name}`;
            return innerUserElement
        })
        containerData.append(...userElement)
    })
    .catch(error => {
        console.log(error)
    });
    
const listOfUsers = () => (containerData.innerHTML = '');
listOfUsers();

addUsers = () => {
    fetch('https://reqres.in/api/users'),{
        method: 'POST',
        headers: { 'Content-Type': "application/json"},
        body: JSON.stringify({username}),
    }
}

addButton.addEventListener('click', addUsers)