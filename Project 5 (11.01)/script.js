const URL = 'https://reqres.in/api/users';
const getApi = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const users = data.data
        // console.log(users);
        for (const data in users) {
            const objectUsers = users[data]
            const text = objectUsers.first_name + ' ' + objectUsers.last_name
            // console.log(text);
            const avatar = objectUsers.avatar
            // console.log(avatar);
            const box = document.createElement('div')
            const paragraph = document.createElement('p')
            const img = document.createElement('img')
            img.setAttribute('src', avatar)
            // console.log(img);
            paragraph.textContent = text
            // console.log(paragraph);
            box.classList.add('.box')
            document.body.appendChild(box)
            box.appendChild(paragraph)
            paragraph.appendChild(img)
        }
    })
}
getApi()

const AddCustomers = () => {
const requestPost = () => {
    fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name})
    }).then(() => {
        getApi()
    })
}}

btn.addEventListener('click', (event) => {
    event.preventDefault();

})
