//5. Napisz funkcję, która przyjmie dwa argumenty - number - "n" i tablicę z numberami.
//Zwróć nową tablicę z "n" największych numberów z tablicy wyjściowej,
//Czyli zwróć taką ilość wyników licząc on najwyższego jaka jest w zmiennej n
//np. funkcja (2, [5, 3, 1, 4, 2]) -> [5, 4]. Przyda się funkcja Array.sort().

const arrN = (n, arr) => {
    function compareNumbers(a, b) {
        return a - b;
      };
    // Nie wiem dlaczego compareNumbers działa;
    let reverseArr = arr.sort(compareNumbers).reverse();
    return reverseArr.slice(0, n)
}
console.log(arrN(2, [5, 3, 1, 4, 2]));
console.log(arrN(4, [100, 200, 1, 4, 2]));
console.log(arrN(2, [-100, 100, 0, 4, 2]));
console.log(arrN(1, []));
console.log(arrN(0, [7, 7, 1, 10]));
console.log(arrN(-3, [7, 7, 1, 10, 100000]));
console.log(arrN(10, [2, 1, 10, 100000]));