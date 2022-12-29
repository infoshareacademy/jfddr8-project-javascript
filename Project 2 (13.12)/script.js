// 1st task
const reverseString = (text) => {
  const newText = text.split("").reverse().join("");
  console.log(newText);
};

reverseString("Agnieszka");

//2nd task
const changeFirstCharacter = (string) => {
  const firstLetterFirstWord = string.split(" ")[0].slice(0, 1);
  const firstLetterSecondWord = string.split(" ")[1].slice(0, 1);

  const newFirstWord = firstLetterSecondWord + string.split(" ")[0].slice(1);
  const newSecondWord = firstLetterFirstWord + string.split(" ")[1].slice(1);

  console.log(newFirstWord + " " + newSecondWord);
};

changeFirstCharacter("Marek Jurek");

// 3rd task
const volumeDifference = () => {
  const firstArr = [1, 2, 3];
  const secondArr = [4, 2, 8];

  const firstVolume = firstArr.reduce(
    (volume, currentValue) => volume * currentValue,
    1
  );

  const secondVolume = secondArr.reduce(
    (volume, currentValue) => volume * currentValue,
    1
  );

  let result;
  if (firstVolume >= secondVolume) {
    result = firstVolume - secondVolume;
  } else {
    result = secondVolume - firstVolume;
  }

  console.log(result);
};

volumeDifference();

//4rd task

const vowel = (string) => {
  const vowel = [
    "a",
    "ą",
    "e",
    "ę",
    "i",
    "o",
    "ó",
    "u",
    "y",
    "A",
    "Ą",
    "E",
    "Ę",
    "I",
    "O",
    "Ó",
    "U",
    "Y",
  ];
  const letters = string.split("");
  let vowelsArr = [];

  for (let i = 0; i < vowel.length; i++) {
    vowelsArr = vowelsArr.concat(
      letters.filter((letter) => letter.includes(vowel[i]))
    );
  }

  console.log("Number of vowel:", vowelsArr.length);
};

vowel("Agnieszka");

//5th task
