/*
1. Pobrać listę użytkowników z adresu https://reqres.in/api/users
2. Wyświetlić imię, nazwisko i avatar użytkowników w HTML
3. Stworzyć input na podanie nazwy nowego usera “username” i przycisk “add”. Po kliknięciu przycisku ma się wywołać request POST na url https://reqres.in/api/users. Body requestu ma zawierać pole “name” z wartością z inputa.
4. Request będzie skutkował fejkową odpowiedzią (zwróci tylko datę utworzenia i id), ale i tak chcemy wyświetlić nowego usera jako dodatkowego na zafetchowanej wcześniej liście. Stwórzcie odpowiedni element HTML i wyświetlcie go w taki sposób jak poprzednio zafetchowanych userów, czyli nazwa + avatar. Avatar może być jakimś domyślnym obrazkiem.
5. Odpowiedź przyjdzie od razu, ale spróbujcie zasymulować oczekiwanie na nią (setTimeout), więc zanim wyświetlicie nazwę usera i avatar, wyświetlcie na 5 sekund napis “loading” w tym samym miejscu
6. Zasymulujemy również błąd z serwera. W przypadku, jeśli input na podanie nazwy usera będzie pusty, zmieńcie metodę requestu z ‘POST’ na ‘PSOT’ - to spowoduje, że request zwróci błąd. Złapcie ten błąd i poinformujcie alertem, że należy podać nazwę użytkownika. (W realnej sytuacji walidacja inputa odbyła by się na froncie za pomocą zabezpieczenia pola username, bądź odpowiedź z backendu zawierałaby informację o konieczności uzupełnienia pola w treści errora.)
*/

const URL = 'https://reqres.in/api/users';
const input = document.querySelector('input');
const btn = document.querySelector('button');
const getApi = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const users = data.data
        for (const data in users) {
            const objectUsers = users[data]
            const text = objectUsers.first_name + ' ' + objectUsers.last_name
            const avatar = objectUsers.avatar
            const box = document.createElement('div')
            const paragraph = document.createElement('p')
            const img = document.createElement('img')
            img.setAttribute('src', avatar)
            paragraph.textContent = text
            box.classList.add('.box')
            document.body.appendChild(box)
            box.appendChild(paragraph)
            paragraph.appendChild(img)
        }
    })
}
getApi()

const addCustomer = (name, surname) => {
    fetch("URL", {
      // wysyłamy request metodą POST
      method: "POST",
      // ustawiamy zawartość którą przesyłamy do backendu jako JSON
      headers: { "Content-Type": "application/json" },
      // body to jest zawartość którą przesyłamy do backendu w formacie JSON
      body: JSON.stringify({ name, surname })
    }).then(() => {
    //getApi();
    const box2 = document.createElement('div');
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = name;
    box2.appendChild(paragraph2)
    document.body.append(box2)
    })
  };

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const addName = input.value;
    console.log(addName);
    addCustomer(addName)
})