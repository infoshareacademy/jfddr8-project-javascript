//4. Napisz funkcję, która zwróci liczbę samogłosek w podanym argumencie stringu,
//np. "lampart" -> 2. Może się przydać split() i includes().

const howManyVowels = (text) => {
    let pattern = /[a,e,y,u,i,o]/gi;
    let result = text.match(pattern).join("").length;
    return text + " -> " + result
}
console.log(howManyVowels("lampart"));
console.log(howManyVowels("Witaj"));
console.log(howManyVowels("Siema Spoko"));
console.log(howManyVowels("CO TO JEST?"));
