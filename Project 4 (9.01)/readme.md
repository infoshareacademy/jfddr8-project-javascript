## Projekt 4 - asynchroniczność w JS

1. Stworzyć html z dwiema kolumnami: “products” i “favorites”
2. Pobrać produkty ze strony https://dummyjson.com/products i wyświetlić je w formie listy w divie “products”. Każdy element listy ma zawierać tytuł produktu i jego cenę.
3. Dla każdego produktu ma się pojawić przycisk “dodaj do ulubionych”. Użycie przycisku ma spowodować dodanie produktu do localStorage. Jeżeli już wcześniej dodaliśmy taki produkt do ulubionych, nie dodajemy go ponownie. Zamiast tego ma się pojawić alert informujący o tym, że produkt jest już w ulubionych.
4. Stworzyć interwał, który co 5 sekund sprawdza listę ulubionych w localStorage i wyświetla wszystkie znajdujące się tam produkty jako listę tytułów i cen w divie “favorites” (może być ciągiem po przecinku). W efekcie po dodaniu nowego ulubionego produktu, za 5 sekund powinien się on pojawić również w “favorites”
