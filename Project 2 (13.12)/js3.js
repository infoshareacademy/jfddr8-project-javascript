//3. Napisz funkcję, która z podanych dwóch tablic z trzema wymiarami, np. [1, 2, 3] i [4, 2, 8]
//obliczy objetosci i zwróci różnicę (wiekszy - mniejszy). Przyda się Array.reduce().

const moreLiquid = (arr1, arr2) => {
   let cartonA = arr1[0] * arr1[1] * arr1[2];
   let cartonB = arr2[0] * arr2[1] * arr2[2];
   return Math.abs(cartonA - cartonB);
}
console.log(moreLiquid([1, 2, 3], [4, 2, 8]));
console.log(moreLiquid([2, 2, 2], [6, 2, 1]));
console.log(moreLiquid([1, 1, 1], [6, 1, 8]));

//const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
//const sumWithInitial = array1.reduce((a, b) => a * b);
//console.log(sumWithInitial);
