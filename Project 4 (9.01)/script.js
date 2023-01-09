let updateFavorites = () => {
    const localStorageKey = "favoriteProducts";
    let favorites = document.getElementById("myFavorites");
    favorites.innerHTML = '';
    let favoriteProducts =
          JSON.parse(localStorage.getItem(localStorageKey)) || [];
          for (const favoriteProduct of favoriteProducts) {
            let fav = document.createElement('li');
            fav.innerHTML = favoriteProduct.title + " - " + favoriteProduct.price;
            favorites.appendChild(fav);
          }
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    const data = document.getElementById("myList");

    res.products.forEach(function (product) {
      var title = document.createElement("li");
      var btn = document.createElement("button");

      const localStorageKey = "favoriteProducts";

      title.innerHTML = product.title + " - " + product.price;
      btn.innerText = "Dodaj do ulubionych";

      data.appendChild(title);
      data.appendChild(btn);

      btn.addEventListener("click", () => {

        let favoriteProducts =
          JSON.parse(localStorage.getItem(localStorageKey)) || [];
        
          let isDuplicate = false;

            for (const favoriteProduct of favoriteProducts) {
                console.log(favoriteProduct)
                if (favoriteProduct.id === product.id) {
                    alert("Produkt już dodany do ulubionych");
                    isDuplicate = true;
                    break;
                }
              }

            if (!isDuplicate) {
                    favoriteProducts.push(product);
                    localStorage.setItem(
                        localStorageKey,
                        JSON.stringify(favoriteProducts)
                    );
                    updateFavorites()
            }

      });
    });
  });

  setInterval(function () {
    updateFavorites()
  }, 5000);

