// ZADANIE 1
let reverseString = (string) => {
    let newString = string.split("").reverse().join("");
console.log(newString);
  }
let reverseString("piesek");

// ZADANIE 2
"Marek".charAt(0);
"Jurek".charAt(0);
function string(person) {
  const arrayWithWords = person.split(" ")
  const firstLetter = arrayWithWords[0][0]
  const secondLetter = arrayWithWords[1][0]
console.log(`${secondLetter+arrayWithWords[0].slice(1)} ${firstLetter+arrayWithWords[1].slice(1)}`);
}
string("Marek Jurek")







