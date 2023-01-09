const data = document.getElementById('myList');

const localStorageKey = 'favouriteProducts';

fetch('https://dummyjson.com/products')
.then((res)=> res.json())
.then((res)=> {
res.products.forEach(function(element) {
    var titles = document.createElement('li');
    var price = document.createElement('p');
    var btn = document.createElement('button');
 
   titles.innerHTML = element.title +', ' +element.price;
   btn.innerText = 'Dodaj do ulubionych';
    
   data.appendChild(titles);
   data.appendChild(btn);

   btn.addEventListener('click', () => {
    const favouriteProducts = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    favouriteProducts.push(element);
    localStorage.setItem(localStorageKey, JSON.stringify(favouriteProducts));
})
})});








