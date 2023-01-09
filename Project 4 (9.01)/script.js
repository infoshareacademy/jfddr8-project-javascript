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
  const favoriteProducts =
    JSON.parse(localStorage.getItem(localStorageKey)) || [];
  const isInFavorites = favoriteProducts.some(
    (favoriteProduct) => favoriteProduct.title === product.title
  );
  if (isInFavorites) {
    alert(`${product.title} is already in your favorites!`);
  } else {
    favoriteProducts.push(product);
    localStorage.setItem(localStorageKey, JSON.stringify(favoriteProducts));
  }
};

const displayFavorites = () => {
  const favoriteProducts =
    JSON.parse(localStorage.getItem(localStorageKey)) || [];
  const favoriteUl = document.createElement("ul");
  favoriteElement.appendChild(favoriteUl);
  favoriteElement.innerHTML = "";
  favoriteProducts.forEach((product) => {
    const favoriteLi = document.createElement("li");
    favoriteLi.innerText = `${product.title} ${product.price}`;
    favoriteElement.appendChild(favoriteLi);
  });
};

setInterval(displayFavorites, 5000);

displayFavorites();
