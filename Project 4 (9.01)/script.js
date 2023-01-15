// przechwytujemy istniejące elementy HTML
const productListElement = document.getElementById('productsContainer');
const favoritesListElement = document.getElementById('favoritesContainer');
// tworzymy klucz dla localStorage, pod którym będziemy przechowywać dane
const FAVORITE_PRODUCTS_KEY = 'favoriteProducts';

//ustawiamy interwał co 5 sekund odświezający listę ulubionych produktów
setInterval(() => {
    // jezeli istnieją dane w localStorage pod podanym kluczem...
    if(JSON.parse(localStorage.getItem(FAVORITE_PRODUCTS_KEY))) {
        // ...to przypisujemy je tutaj do zmiennej
        const favoriteProducts = JSON.parse(localStorage.getItem(FAVORITE_PRODUCTS_KEY));
        // a tutaj przypisujemy do zmiennej to, co zwraca mapa po wszystkich elementach tablicy. 
        // od razu wyciągamy interesujący nas string złozony z nazwy i ceny produktu.
        const productsMap = favoriteProducts.map(product => `${product.title} ${product.price}$`);
        // konwertujemy wynik mapy do stringa i przypisujemy jako HTML do naszego diva
        favoritesListElement.innerHTML = productsMap.toString();
    }
}, 5000);

function addToFavorites(selectedProduct) {
    // przechwytujemy tablicę ulubionych produktów z localStorage, a jeśli nic tam nie ma, to bierzemy pustą tablicę
    const favoriteProducts = JSON.parse(localStorage.getItem(FAVORITE_PRODUCTS_KEY)) || [];
    // unikalność produktu będziemy sprawdzać po id, więc robimy sobie tablicę IDków z ulubionych produktów
    const ids = favoriteProducts.map(item => item.id);
    // jezeli id nowo dodawanego produktu juz się znajduje w localStorage, no to wyświetlamy alert i robiąc return dajemy JSowi znać, ze nie idziemy juz dalej w tej funkcji
    if (ids.includes(selectedProduct.id)) {
        alert('already favorited');
        return;
    }
    // ale jeśli id jest nowe, dodajemy produkt do naszej tablicy
    favoriteProducts.push(selectedProduct);
    // i zapisujemy ją do localStorage pod ustalonym kluczem
    localStorage.setItem(FAVORITE_PRODUCTS_KEY, JSON.stringify(favoriteProducts));
}

function fetchProducts() {
    fetch('https://dummyjson.com/products', {
        method: 'GET'
    })
        .then(result => result.json())
        .then(result => {
            // przypisujemy produkty do zmiennej products. Znak zapytania pozwala JSowi "wątpić" 
            // czy taki obiekt w ogole jest, jeśli by go nie było, to dostaniemy undefined i 
            // przypiszemy do zmiennej pustą tablicę. Bez znaku zapytania dostalibyśmy JSowy błąd, ze odwołujemy się do właściwości nieistniejącego obiektu.
            const products = result?.products || [];
            // robimy pętle po wszystkich produktach
            products.forEach(product => {
                // tworzymy potrzebne elementy HTML per kazdy produkt
                const productElement = document.createElement('p');
                const addToFavoritesBtn = document.createElement('button');
                addToFavoritesBtn.innerText = "Dodaj do ulubionych";
                // dodajemy eventListener do kazdego przycisku i przekazujemy mu w argumencie dane pojedynczego produktu (beda potrzebne, aby JS wiedział, co chcemy dokładnie dodać do ulubionych)
                addToFavoritesBtn.addEventListener('click', () => addToFavorites(product));
                productElement.innerText = `${product.title} ${product.price}$`;
                // przypinamy utworzone elementy HTML do diva z produktami
                productListElement.append(productElement, addToFavoritesBtn);
            });
        })
        .catch(error => {
            console.log(error);
        })
}

// odpalamy funkcję fetchującą
fetchProducts();