// exercise 1

// Try 1
function reverseText (string) {
    if (typeof string === "string") {
      let newString = "";
      for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
      }
      console.log(newString);
    } else console.log("it is not a string");
  };
  
  
//   Try 2
  const reverseText = (string) =>{
      return newString = string.split("").reverse().join("");
      
  }

//   exercise 2


function reverseWords(str) {
    const arrayWithWords = str.split(' ');
    const firstWord = arrayWithWords[0];
    const secondWord = arrayWithWords[1];
    const firstLette = firstWord[0];
    const secondLetter = secondWord[0];
    return `${secondLetter+firstWord.slice(1)} ${firstLette+secondWord.slice(1)}`;

 };


 console.log(reverseWords('Marek Jurek'))


//  exercise 3


let arr1 = [1,2,3];
let arr2 = [4,2,8];
function multiDiff (a,b) {
    const mult1 = a.reduce((a,b)=>a*b);
    const mult2 = arr2.reduce((a,b)=>a*b);
    const diff = mult1 - mult2;
    return Math.abs(diff);
    //     if (diff<0) {
    //     return -diff;
    // } else {
    //     return diff
    // }
    }
console.log(multiDiff(arr1, arr2))


// exercise 4


function countVowels(str) {
    const vowels = ['a', 'e', 'i' , 'o', 'u']
    for (let element of string)
        if (vowels.includes(element))

        

    return str.splite('')

}

console.log(countVowels(mama))


// exercise 5

function twoArguments(n, array) {
    let n = 2
    let array = [2, 3, 4, 5]
    const newArray = [...array]

    console.log(newArray)

}

