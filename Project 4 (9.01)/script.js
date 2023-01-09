const productElement = document.querySelector(".products");
const favoriteElement = document.querySelector(".favorites");

const fetchProducts = () => {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((results) => {
      const products = results.products;
      const productUL = document.createElement("ul");
      productElement.appendChild(productUL);
      products.forEach((product) => {
        const productLi = document.createElement("li");
        productLi.innerHTML = `
            <span>${product.title}</span>
            <span>${product.price}</span>
            <button class='button'>Add to favorite</button>
            `;

        productUL.appendChild(productLi);
      });
    });
};

fetchProducts();
