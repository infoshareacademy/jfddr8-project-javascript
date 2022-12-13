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
    //     let firstletterA = firstWord[0];
    //     let firstletterB = secondWord[0];
    //     return `${firstletterB+firstWord.slice(1)} ${firstletterA+secondWord.slice(1)}`;
         
      
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
//     const mult1 = a.reduce((a,b)=>a*b);
//     const mult2 = arr2.reduce((a,b)=>a*b);
//     const diff = mult1 - mult2;
//     return Math.abs(diff);
  
//     }
// console.log(multiDiff(arr1, arr2))

//zad 4


// const vowels = ["a","e","i","o","u"]
// function countVowels(str) {
//     let counter = 0;
//     for(let letter of str) {
//         if(vowels.includes(letter)) {
//            counter++;
//         }
//     }
//     return counter
// }
// console.log(countVowels('lampard'));


//zad 5

// Napisz funkcję, która przyjmie dwa argumenty - number - "n" i tablicę z numberami. Zwróć nową tablicę z "n" 
// największych numberów z tablicy wyjściowej, np. funkcja (2, [5, 3, 1, 4, 2]) -> [5, 4]. Przyda się funkcja Array.sort().


function highest (n,array){
    function times(n) {
        times(n)
    }
    array.sort().shift()
}


console.log(highest(2,[1,2,3,4,5]))