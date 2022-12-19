//zad 1
// const reverseText = (string) => {
//     let newString = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//       newString += string[i];
//     }
//     return newString
// };

// const reverseText = (string) =>{
//     return string.split("").reverse().join("");

// }

// reverseText("infoShare"); // => erahSofni
// reverseText("iSA"); // => ASi
// reverseText("Adam"); // => madA

//zad 2

// const splitString = (string) => {
//     const newString = string.split(" ");
//     let firstWord = newString[0];
//     let secondWord = newString[1];
//     let firstLetterA = firstWord[0];
//     let firstLetterB = secondWord[0];
//     return `${firstLetterB+firstWord.slice(1)} ${firstLetterA+secondWord.slice(1)}`;

//      console.log(firstWord);
//      console.log(secondWord);
//      console.log(firstletterA);
//      console.log(firstletterB);

//    }

//    console.log(splitString("Adam Kocinski"))

// zad 3
// let arr1 = [1,2,3];
// let arr2 = [4,2,8];
// function multiDiff (a,b) {
//     const multi1 = a.reduce((a,b)=>a*b);
//     const multi2 = arr2.reduce((a,b)=>a*b);
//     const difference = multi1 - multi2;
//     return Math.abs(difference);

//     }
// console.log(multiDiff(arr1, arr2))

//zad 4

// const vowels = ["a", "e", "i", "o", "u"];

// function howManyVowels(string) {
//   let counter = 0;
//   for (let letter of string) {
//     if (vowels.includes(letter)) {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(howManyVowels("alibaba"));

//zad 5

// Napisz funkcję, która przyjmie dwa argumenty - number - "n" i tablicę z numberami. Zwróć nową tablicę z "n"
// największych numberów z tablicy wyjściowej, np. funkcja (2, [5, 3, 1, 4, 2]) -> [5, 4]. Przyda się funkcja Array.sort().


// function highestNumber(n, array) {
//     let sortedArray = array.sort().reverse().slice(0,n)
//     return sortedArray

// }

// console.log(highestNumber(2,[1,2,3,4,5]))

//zad 6 sposób1

// function splitBill(amountPayed){
//     const totalAmountPaid = Object.values(amountPayed).reduce((acc, amount) => acc + amount); // 30zl
//     const amountDept = totalAmountPaid / Object.keys(amountPayed).length // 10zl
//     const amountDueForEachPerson = {}
//         for (let [person, payed] of Object.entries(amountPayed)){
//             amountDueForEachPerson[person] = amountDept - payed;
//         }
    
//     return amountDueForEachPerson
// }

// console.log(splitBill({George: 15, Bettie: 10, Anna: 5}))

//zad 6 sposób2

// function splitBill(amountPayed){
//     const totalAmountPaid = Object.values(amountPayed).reduce((acc, amount) => acc + amount);
//     const amountDept = totalAmountPaid / Object.keys(amountPayed).length
//     const amountDueForEachPerson = {}
//     Object.keys(amountPayed).forEach(person => {
//         amountDueForEachPerson[person] = amountPayed[person] - amountDept
//     });

//     return amountDueForEachPerson
// }

// console.log(splitBill({George: 15, Bettie: 10, Anna: 5}))