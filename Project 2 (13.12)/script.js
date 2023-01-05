// 1 string reverse
function solution(str){
    return str.split('').reverse().join('');  
  }

// alt
const solution = str => [...str].reverse().join('');


// alt2
function solution(str){
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--)
      newStr += str[i];
    return newStr;
  }

// 2 swap letters
function swap(words) {
  const [firstWord, secondWord] = words.split(' ')
  return `${secondWord[0]+firstWord.slice(1)} ${firstWord[0]+secondWord.slice(1)}`
}

//3 z podanych dwóch arrayek z trzema wymiarami, np. [1, 2, 3] i [4, 2, 8] oblicz objetosci i podaj róznicę (wiekszy - mniejszy);

function findDifference(a, b) {
  const firstSum = a.reduce((a, b) => a*b);
  const secondSum = b.reduce((a, b) => a*b);
  
  return Math.abs(firstSum - secondSum);
}

function findDifference(a, b) {
  return Math.abs(a.reduce((a, b) => a*b) - b.reduce((a, b) => a*b))
}

//4 vowels number
function vowelsNumber(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let count = 0;
  
  const arr = str.split("");
  arr.forEach(el => {
    if (vowels.includes(el)) {
      count++
    }
  })
  return count;
};

//alt

function vowelsNumber(str) {
  return str.split("").filter(letter => "aeiouy".includes(letter)).length
};

//5 largest from array with given amount of largest items
function largest(n,xs){
  xs.sort((a, b) => b - a).splice(n)
  return xs
}


//alt
function largest(n,xs){
  const result = xs.sort((a , b) => b - a)
  result.length = n

  return result
}

//6 bill split
function splitTheBill(x) {
    const evenPart = Object.values(x).reduce((a, b) => a + b, 0) / Object.values(x).length;
  
    Object.keys(x).forEach(key => {
      x[key] = x[key] - evenPart;
    })
  
  return x;

}


