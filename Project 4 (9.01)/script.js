const productElement = document.querySelector(".products");
const favoriteElement = document.querySelector(".favorites");
const localStorageKey = "FavoriteProducts";

const fetchProducts = () => {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((results) => {
        const products = results.products;
        const productUL = document.createElement("ul");
        productUL.classList.add("cos");
        productElement.appendChild(productUL);
        products.forEach((product) => {
            const productLi = document.createElement("li");
            const button = document.createElement("button");
            button.innerText = "Add to favorite";
            button.addEventListener("click", () => addToFavorite(product));
            productLi.innerText = product.title + " " + product.price;
            productLi.append(button);

        productUL.appendChild(productLi);
      });
    });
};

fetchProducts();
const addToFavorite = (product) => {
    const favoriteProducts = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    favoriteProducts.push(product);
    localStorage.setItem(localStorageKey,JSON.stringify(favoriteProducts))   
};