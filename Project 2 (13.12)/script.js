//          1st task
const reverseString = (text) => {
  const newText = text.split("").reverse().join("");
  return newText;
};

reverseString("Agnieszka");

//            2nd task
const changeFirstCharacter = (string) => {
  const firstLetterFirstWord = string.split(" ")[0].slice(0, 1);
  const firstLetterSecondWord = string.split(" ")[1].slice(0, 1);

  const newFirstWord = firstLetterSecondWord + string.split(" ")[0].slice(1);
  const newSecondWord = firstLetterFirstWord + string.split(" ")[1].slice(1);

  const result = newFirstWord + " " + newSecondWord;
  return result;
};

changeFirstCharacter("Marek Jurek");

//          3rd task
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
  return result;
};

volumeDifference();

//      4th task

const vowel = (string) => {
  const vowel = ["a", "ą", "e", "ę", "i", "o", "ó", "u", "y"];
  const letters = string.split("").map((i) => i.toLowerCase());
  let vowelsArr = [];

  for (let i = 0; i < vowel.length; i++) {
    vowelsArr = vowelsArr.concat(
      letters.filter((letter) => letter.includes(vowel[i]))
    );
  }
  console.log("Number of vowel:", vowelsArr.length);
  return vowelsArr.length;
};

vowel("Agnieszka");

//5th task

const transformArray = (number, arr) => {
  const arrFromBigger = arr.sort((a, b) => {
    return b - a;
  });
  const newArray = arrFromBigger.slice(0, number);
  return newArray;
};

transformArray(2, [5, 3, 1, 4, 2]);

//6th task

const shareReceipt = (list) => {
  const amount = Object.values(list);
  const amountPerPerson =
    amount.reduce((sum, price) => sum + price, 0) / amount.length;

  const result = Object.fromEntries(
    Object.entries(list).map(([key, val]) => [key, val - amountPerPerson])
  );
  return result;
};

shareReceipt({
  George: 15,
  Bettie: 10,
  Anna: 5,
});
