const array1 = [1, 2, 3];
const array2 = [4, 2, 8];

function objetosc(array1, array2) {
  const reducer1 = (a, b) => a * b;
  const result1 = array1.reduce(reducer1);
  const result2 = array2.reduce(reducer1);
  if (result1 > result2) {
    console.log(result1 - result2);
  } else {
    console.log(result2 - result1);
  }
}

objetosc(array1, array2);
