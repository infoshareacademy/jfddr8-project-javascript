//2. Napisz funkcję, która jako argument będzie przyjmować string
//złożony z dwóch słów oddzielonych spacją,
//a zwracać będzie string złożony z tych samych dwóch słów, jednak pierwsze
//litery obu słów mają być zamienione miejscami,
//np: "Marek Jurek" => "Jarek Murek". Mogą przydać się split() i slice().

const changeFirstLetter = (twoWords) => {
    let splitWords = twoWords.split(' ');
    let firstWord = splitWords[0];
    let secondWord = splitWords[1];
    let firstLetter1 = firstWord[0];
    let firstLetter2 = secondWord[0];
    return `${firstLetter2}${firstWord.slice(1)} ${firstLetter1}${secondWord.slice(1)}`;
}

console.log(changeFirstLetter("Łukasz Śmigiel"));
console.log(changeFirstLetter("Adam Kowalski"));
console.log(changeFirstLetter("Wóz ma swoją specyfikę"));

/*
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"*/