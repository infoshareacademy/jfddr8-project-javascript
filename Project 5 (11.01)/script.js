// przechwytujemy istniejący element HTML
const usersListElement = document.querySelector('.usersContainer');

function fetchUsers() {
    fetch('https://reqres.in/api/users', {method: 'GET'})

        .then((response) => response.json())
        .then((result) => {
            // tutaj podobnie jak w zadaniu czwartym, zapobiegamy JSowym errorom, gdyby nasze dane nie miały spodziewanego przez nas kształtu
            const users = result?.data || [];
            // robimy mapę po wszystkich uzytkownikach, tworzymy element HTML per uzytkownik i przypisujemy mu jakąś wewnętrzną treść. Całą mapę przypisujemy do zmiennej, wazne, zeby znalazł się w niej zatem "return"!
            const userElements = users.map(user => {
                const userSingleElement = document.createElement('div');
                userSingleElement.innerHTML = `<p>${user.first_name} ${user.last_name}</p><img alt="image" src="${user.avatar}" onerror=""/>`;
                return userSingleElement;
            });
            // przypisujemy wynik mapy za pomocą spread operatora do przechwyconego diva. Moglibyśmy tutaj tez znowu uzyc innerHTML zamiast append jak w 4 zadaniu, ale trzeba sobie urozmaicać pracę :)
            usersListElement.append(...userElements);
        })
        .catch(error => {
            console.error(error);
        });
}

// pobieramy userów
fetchUsers();

// przechwytujemy przycisk do dodawania nowego usera
const addUserButtonElement = document.querySelector('.addUserBtn');

function addUser() {
    const addUserInputElement = document.querySelector('.addUser');
    // odczytujemy wartość z inputa. Wazne, aby robic to wewnątrz tej funkcji, bo to właśnie po naciśnięciu przycisku interesuje nas co jest wpisane w inpucie.
    const userName = addUserInputElement.value;
    fetch('https://reqres.in/api/users', {
        //jezeli input jest wypełniony, uzywamy prawidłowej metody 'POST'. Jeśli wartość jest pusta, zmieniamy na błędną metodę 'PSOT', która spowoduje, ze Promise się nie zrealizuje.
        method: userName ? 'POST' : 'PSOT',
        // w body requestu przekazujemy nazwę naszego usera
        body: JSON.stringify({
            name: userName,
        })
    })
        .then(() => {
            // jezeli wszystko jest ok, tworzymy nowy div
            const userElement = document.createElement('div');
            // wyswietlamy napis 'loading' chcąc zasymulować opóźnienie na serwerze
            userElement.innerHTML = '<p>Loading</p>';
            usersListElement.append(userElement);
            // po 5 sekundach wyświetlamy porządany HTML, czyli naszą nazwę usera + fejkowy avatar
            setTimeout(() => {
                userElement.innerHTML = `<p>${userName}</p><img alt="image" src="https://www.w3schools.com/howto/img_avatar.png"/>`;
            }, 5000);
        })
        // jezeli input był jednak pusty, to wpadniemy tutaj i wyświetlimy alert
        .catch(err => alert('Please provide a username'));
}