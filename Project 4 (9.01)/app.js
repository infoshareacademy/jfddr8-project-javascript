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

function addToFavorites(product) {
  return () => {
    const data = localStorage.getItem("favorites");
    if (!data) {
      localStorage.setItem("favorites", JSON.stringify([product]));
      return;
    }
    const favorites = JSON.parse(data);
    if (favorites.find((favorite) => favorite.id === product.id)) {
      alert("Product already added.");
      return;
    }
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
}

function loadFavorites() {
  const data = localStorage.getItem("favorites");
  if (!data) {
    return;
  }
  const favorites = JSON.parse(data);
  const favoritesList = document.querySelectorAll("ul")[1];
  while (favoritesList.lastChild) {
    favoritesList.removeChild(favoritesList.lastChild);
  }
  favorites.forEach((product) => {
    const listItem = document.createElement("li");
    const title = document.createElement("h3");
    title.innerText = product.title;
    const price = document.createElement("div");
    price.innerText = `$${product.price}`;
    listItem.appendChild(title);
    listItem.appendChild(price);
    favoritesList.appendChild(listItem);
  });
}
loadProducts();
setInterval(loadFavorites, 5000);
