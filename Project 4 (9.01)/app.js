async function loadProducts() {
  const { products } = await fetch("https://dummyjson.com/products").then(
    (response) => response.json()
  );
  const list = document.querySelector("ul");
  products.forEach((product) => {
    const listItem = document.createElement("li");
    const title = document.createElement("h3");
    title.innerText = product.title;
    const price = document.createElement("div");
    price.innerText = `$${product.price}`;
    const btn = document.createElement("button");
    btn.innerText = "Add to favorites";
    btn.onclick = addToFavorites(product);
    listItem.appendChild(title);
    listItem.appendChild(price);
    listItem.appendChild(btn);
    list.appendChild(listItem);
  });
}
