// exercise 1

// Try 1
function reverseText(string) {
	if (typeof string === 'string') {
		let newString = '';
		for (let i = string.length - 1; i >= 0; i--) {
			newString += string[i];
		}
		console.log(newString);
	} else console.log('it is not a string');
}

reverseText('piesek');

//   Try 2
function reverse() {
	return (newString = string.split('').reverse().join(''));
}

reverse('piesek');

//   exercise 2

function reverseWords(str) {
	const arrayWithWords = str.split(' ');
	const firstWord = arrayWithWords[0];
	const secondWord = arrayWithWords[1];
	const firstLette = firstWord[0];
	const secondLetter = secondWord[0];
	return `${secondLetter + firstWord.slice(1)} ${
		firstLette + secondWord.slice(1)
	}`;
}

reverseWords('Marek Jurek');

//  exercise 3

let arr1 = [1, 2, 3];
let arr2 = [4, 2, 8];
function multiDiff(a, b) {
	const mult1 = a.reduce((a, b) => a * b);
	const mult2 = arr2.reduce((a, b) => a * b);
	const diff = mult1 - mult2;
	return Math.abs(diff);
}

multiDiff(arr1, arr2);

// exercise 4

const vowels = ['a', 'e', 'i', 'o', 'u'];
function countVowels(str) {
	let counter = 0;
	for (let letter of str) {
		if (vowels.includes(letter)) {
			counter++;
		}
	}
	return counter;
}

countVowels('mama');

// exercise 5

const newArray = (number, arr) => {
	arr.sort((a, b) => a - b);
	const newArr = arr.slice(-number);
	newArr.sort((a, b) => b - a)
	console.log(newArr);
};
newArray(5, [5, 45, 78, 3, 100, 1, 4, 2, 10, 20, 40]);

// ex 6

const person = {
	George: 15,
	Bettie: 10,
	Anna: 5,
	Maja: 40,
};

const splitReceipt = (object) => {
	const arr = Object.values(object);
	const sum = arr.reduce((a, c) => a + c);
	const average = sum / arr.length;
	const object2 = Object.fromEntries(
		Object.entries(object).map(([key, val]) => [key, val - average])
	);
	console.log(object2);
};

splitReceipt(person);
