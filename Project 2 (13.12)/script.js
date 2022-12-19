// Exercise 1

// let reverseString = (string) =>{
//     let newString = string.split("").reverse().join("");
//     return newString;
// }

// reverseString("piernik");

// Exercise 2

// "Marek".charAt(0);
// "Jurek".charAt(0);

// function string(person) {
//   const arrayWithWords = person.split(" ")
//   const firstLetter = arrayWithWords[0][0]
//   const secondLetter = arrayWithWords[1][0]
//  return `${secondLetter+arrayWithWords[0].slice(1)} ${firstLetter+arrayWithWords[1].slice(1)}`;
// };

// string("Marek Jurek");

// Exercise 3

// let arr1 = [1, 2, 3];
// let arr2 = [4, 2, 8];

// function volumeArrays (firstArray, secondArray) {
//   const volume1 = firstArray.reduce((firstArray, secondArray) => firstArray*secondArray);
//   const volume2 = secondArray.reduce((firstArray, secondArray) => firstArray*secondArray);
//   const arraysVolume = volume1 - volume2;
//   return Math.abs(arraysVolume);
// }
// console.log(volumeArrays(arr1, arr2));

// Exercise 4

// const vowels = ["a","e","i","o","u"];

// function howManyVowels(string) {
//   let counter = 0;
//   for(let letter of string) {
//     if (vowels.includes(letter)) {
//     counter++
//     }
//   }
//   return counter;
// }

// console.log(howManyVowels("jaguar"));

// Exercise 5

// function highestNumber(n, array) {
//   let sortedArray = array.sort().reverse().slice(0,n)
//   return sortedArray

// }

// console.log(highestNumber(2,[1,2,3,4,5]))

// Exercise 6

// function splitBill(amountPayed){
//     const totalAmountPaid = Object.values(amountPayed).reduce((acc, amount) => acc + amount);
//     const amountDept = totalAmountPaid / Object.keys(amountPayed).length
//     const amountDueForEachPerson = {}
//         for (let [person, payed] of Object.entries(amountPayed)){
//             amountDueForEachPerson[person] = amountDept - payed;
//         }
    
//     return amountDueForEachPerson
// }

// console.log(splitBill({George: 15, Bettie: 10, Anna: 5}))

