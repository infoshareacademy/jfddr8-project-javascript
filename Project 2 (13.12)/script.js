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
