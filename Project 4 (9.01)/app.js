const productListElement = document.getElementById("productsConatiner");
const favoritesListElement = document.getElementById("favoritesConatiner");
const FAVORITE_PRODUCTS_KEY = "favoriteProducts"; //local storage, to co w nim jest po kliknięciu

function fetchProducts() {
  fetch("https://dummyjson.com/products", {
    method: "GET",
  })
    .then((result) => result.json()) // przerabiam jsona na obiekt
    .then((result) => {
      const products = result?.products || [];
      products.forEach((product) => {
        const productElement = document.createElement("p");
        const dodajdoFavoritesBtn = document.createElement("button");
        dodajdoFavoritesBtn.innerHTML = "dodaj do ulubionych";
        dodajdoFavoritesBtn.addEventListener("click", () => {
          dodajdoFavorites(product);
        });
        productElement.innerHTML = `${product.title} ${product.price}$`;
        productListElement.append(productElement, dodajdoFavoritesBtn);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function dodajdoFavorites(zaznaczonyProdukt) {
  const favoriteProducts =
    JSON.parse(localStorage.getItem(FAVORITE_PRODUCTS_KEY)) || []; // odczytywanie z local storage( ), get(nazwa zmiennej) // obiekt  na json
  const IDs = favoriteProducts.map((item) => item.id);
  if (IDs.includes(zaznaczonyProdukt.id)) {
    alert("already in favorited");
    return;
  }
  favoriteProducts.push(zaznaczonyProdukt);
  localStorage.setItem(FAVORITE_PRODUCTS_KEY, JSON.stringify(favoriteProducts)); ////tworzymy w local storage, set(nazwa zmiennej, zawartość)
}

setInterval(() => {
  //sciagam z local storage
  if (JSON.parse(localStorage.getItem(FAVORITE_PRODUCTS_KEY))) {
    //jezeli jest cos do sciagniecia
    const favoriteProducts = JSON.parse(
      localStorage.getItem(FAVORITE_PRODUCTS_KEY)
    );
    const MappedProducts = favoriteProducts.map((product) => {
      `${product.title} ${product.price}`;
    }); // to przypisujemy tą wartość do favoriteproducts
    favoritesListElement.innerHTML = MappedProducts.toString();
  }
}, 5000);

fetchProducts();
