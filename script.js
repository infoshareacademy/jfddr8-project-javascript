const btns = document.getElementsByClassName('.btn');
const ulProducts = document.querySelector('.ul-products');
const ulFavorites = document.querySelector('.ul-favorites');
const ulLocal = document.querySelector('.ul-local');

const URL = 'https://dummyjson.com/products';

let productID = 0;
const object = {};

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

				divLI.innerHTML = `<li id="${productID}">Title:${title}, Price: ${price}</li>
                <button class="btn" onclick="addToLocal(${productID})">Dodaj do ulubionych</button>`;

				ulProducts.appendChild(divLI);
				productID++;



                // localStorage.setItem(`${title}`, `${price}`)


                
			}
		});
};

getApi();

const addToLocal = (id) => {
	const liToLocal = document.getElementById(id);
	const text = liToLocal.textContent;
    

	if (!ulLocal.textContent.includes(text)) {
		const newLiToLocal = document.createElement('li');
		newLiToLocal.textContent = text;
        localStorage.setItem(text, JSON.stringify(text));
		ulLocal.appendChild(newLiToLocal);

	} else {
		alert('Ten produkt jest już w ulubionych!');
	}
};

const addToFav = () => {
	ulFavorites.innerHTML = ulLocal.innerHTML;
	// ulFavorites.innerHTML = localStorage
	

};

setInterval(addToFav, 5000);