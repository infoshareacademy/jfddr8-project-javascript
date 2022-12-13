6*. Napisz funkcję, która pomoże podzielić po równo rachunek osobom,
które zapłaciły wyjściowo różną kwotę. Funkcja ma przyjmować obiekt,
w którym kluczami będą imiona osób, a wartościami kwoty, które zapłacili,
np: {George: 15, Bettie: 10, Anna: 5}. Funkcja ma zwrócić obiekt w takiej samej formie,
ale jako wartości mają być podane kwoty należności każdej z osób,
czyli w tym przypadku byłoby to {George: 5, Bettie: 0, Anna: -5},
bo George ma otrzymać z powrotem 5, Bettie jest na czysto, a Anna musi dopłacić 5.
Mogą przydać się funkcje obiektowe, typu Object.values, i np. Array.reduce.

const receipt = (obj) => {
    
}

console.log(receipt({George: 15, Bettie: 10, Anna: 5}));
console.log(receipt({George: 20, Bettie: 0, Anna: 10, Adam: 20}));
console.log(receipt({Adam: 1, Anna: 2, Ewa: 3, Jan: 4, Janusz: 0}));

