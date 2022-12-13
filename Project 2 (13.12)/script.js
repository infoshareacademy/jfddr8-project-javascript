// Zadanie 1

function reverseText(str) {
  return str.split("").reverse().join("");
}
console.log(reverseText("Asia"));

// Zadanie 2

function swapPlaces(str) {
  let twoWords = str.split(" ");
  return (`${twoWords[1][0] + twoWords[0].slice(1)} ${twoWords[0][0] + twoWords[1].slice(1)}`)
}
console.log(swapPlaces("Marek Jurek"))

//Zadanie 3

let arrOne = [1, 2, 3];
let arrTwo = [4, 2, 8];

function multiDiff(arr1, arr2) {
const mult1 = arr1.reduce((a,b)=>a*b);
const mult2 = arr2.reduce((a,b)=>a*b);
const diff = mult1 - mult2;
if (diff<0) {
  return -diff;
} else {
  return diff
}
}
console.log(multiDiff(arrOne, arrTwo));


let arrOne = [1, 2, 3];
let arrTwo = [4, 2, 8];

function multiDiff(arr1, arr2) {
const mult1 = arr1.reduce((a,b)=>a*b);
const mult2 = arr2.reduce((a,b)=>a*b);
const diff = mult1 - mult2;
  return Math.abs(diff);
}

console.log(multiDiff(arrOne, arrTwo));

//Zadanie 4

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
function countVowels(str) {
  let count = 0;
  for (let letter of str) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
  return count
}

console.log(countVowels("abazur"));


// Zadanie 5

function highestNumbers (n, arr) {
  arr.sort((a,b) => b-a);
  arr.length = n;
   return arr;
   }
 
 console.log(highestNumbers(2, [5, 3, 1, 4, 2]));