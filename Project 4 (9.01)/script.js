const btns = document.getElementsByClassName('.btn');
const ulProducts = document.querySelector('.ul-products');
const ulFavorites = document.querySelector('.ul-favorites');

const URL = 'https://dummyjson.com/products';

let productID = 0;

const getApi = () => {
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			const products = data.products;

			for (i = 0; i < products.length; i++) {
				const title = products[i].title;
				const price = products[i].price;
				const divLI = document.createElement('div');
				divLI.setAttribute('class', 'box-products');
				divLI.innerHTML = `<li id="${productID}"> Title: ${title}, Price: ${price}</li>
                <button class="btn" onclick="addToLocal(${productID})">Dodaj do ulubionych</button>`;
				ulProducts.appendChild(divLI);
				productID++;
			}
		});
};

getApi();

const addToLocal = (id) => {
	const liToLocal = document.getElementById(id);
	const text = liToLocal.textContent;
	const arr = Object.keys(localStorage);
	
	if (arr.includes(text)) {
		alert('Ten produkt jest już w ulubionych!');
	} else {
		localStorage.setItem(text, text);
	}
};

const addToFav = () => {
	ulFavorites.innerHTML = Object.keys(localStorage);
};

setInterval(addToFav, 5000);