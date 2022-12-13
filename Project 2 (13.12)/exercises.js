// zad 1 

function reverse(string) {
    const tablica = string.split("")
    const odwroconatablica = tablica.reverse()
    return odwroconatablica.join("");
  }
  console.log(reverse('word'))


  // zad 2

  const str = 'Marek Jurek';
const interchangeChars = (str = '') => {
   const [first, second] = str.split(' ');
   const fChar = first[0];
   const sChar = second[0];
   const newFirst = sChar + first.substring(1, first.length);
   const newSecond = fChar + second.substring(1, second.length);
   const newStr = newFirst + ' ' + newSecond;
   return newStr;
};
console.log(interchangeChars(str));

// zad 3

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
function diffrencevalue(a,b){
  const firstvalue= a.reduce((ac,cur) => ac*cur)
  const secondvalue= b.reduce((ac,cur) => ac*cur)
  return Math.abs(firstvalue-secondvalue)
}
console.log(diffrencevalue(array1,array2))