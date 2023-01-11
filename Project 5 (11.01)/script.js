const URL = 'https://reqres.in/api/users';
const input = document.querySelector('input')
const btn = document.querySelector('button')

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
            // box.classList.add('.box')
            document.body.appendChild(box)
            box.appendChild(paragraph)
            paragraph.appendChild(img)
        }
        
    })
}

getApi()


const addCustomer = (name) => {
fetch(URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name})
}).then(() => {
    // getApi()
    const box2 = document.createElement('div')
    const paragraph2 = document.createElement('p')
    const img = document.createElement('img');
    img.setAttribute('src', 'https://reqres.in/img/faces/1-image.jpg')
    paragraph2.textContent = name
    paragraph2.appendChild(img)
    box2.appendChild(paragraph2)
    document.body.append(box2)

})


}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const addName = input.value
    console.log(addName);
    addCustomer(addName)
} )

