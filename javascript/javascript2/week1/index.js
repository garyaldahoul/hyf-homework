// Find The Shortest Word

// Just for >>>>>>>>>>>console

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestDanishWord(array) {
  let shortestWord = "";
  shortestWordLength = array[0].length;
  for (let i = 0; i < array.length; i++) {
    array[i].length < shortestWordLength &&
      (shortestWordLength = array[i].length) &&
      (shortestWord = array[i]);
  }
  return shortestWord;
}

console.log(getShortestDanishWord(danishWords));

// Extra >>>>>>>>> Enter The Text <> Get The Result In Your page  <<<<<<<<<

const yourText = document.getElementById("yourText");
const showShortestWord = document.getElementById("showShortestWord");

function getShortestWord() {
  let wordsArray = yourText.value.split(" ");
  let shortestWord = "";
  shortestWordLength = wordsArray[0].length;
  for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i].length < shortestWordLength &&
      (shortestWordLength = wordsArray[i].length) &&
      (shortestWord = wordsArray[i]);
  }
  showShortestWord.innerHTML = `The Shortest Word is ${shortestWord} has ${shortestWordLength} letters.`;
  return showShortestWord;
}

//  Find And Count The Danish Letters

const danishText = document.getElementById("danishText");
const showDanishLetters = document.getElementById("showDanishLetters");

function countDanishLetters() {
  let danishWordsArray = danishText.value.split(" ");
  console.log(danishWordsArray);
  let totalDanishLetters = 0;
  let åCountLetter = 0;
  let øCountLetter = 0;
  let æCountLetter = 0;
  for (let i = 0; i < danishWordsArray.length; i++) {
    (danishWordsArray[i].includes("å") ||
      danishWordsArray[i].includes("ø") ||
      danishWordsArray[i].includes("æ")) &&
      (totalDanishLetters += 1);

    danishWordsArray[i].includes("å") && (åCountLetter += 1);
    danishWordsArray[i].includes("ø") && (øCountLetter += 1);
    danishWordsArray[i].includes("æ") && (æCountLetter += 1);
  }

  //totalDanishLetters = åCountLetter + æCountLetter + øCountLetter;
  console.log(åCountLetter, æCountLetter, øCountLetter);
  console.log(totalDanishLetters);

  showDanishLetters.innerHTML = ` The Total is ${totalDanishLetters}  includes :
  <ul>
   <li>${åCountLetter} å</li>
   <li>${øCountLetter} ø</li>
   <li>${æCountLetter} æ</li>
   </ul>`;
}

// Spirit Animal Name Generator

const name = document.getElementById("name");
const spiritAnimalNameButton = document.getElementById(
  "spiritAnimalNameButton"
);
const showSpiritAnimalName = document.getElementById("showSpiritAnimalName");
const spiritAnimals = [
  "lion",
  "dog",
  "tiger",
  "cat",
  "deer",
  "monkey",
  "zebra",
  "bear",
  "wolf",
  "snake",
];

const newSpiritAnimalNames = [...spiritAnimals];
function spiritAnimalNameGenerator() {
  if (newSpiritAnimalNames.length > 0) {
    const randomNumber = Math.floor(
      Math.random() * newSpiritAnimalNames.length
    );

    const spiritName = `${name.value} ${newSpiritAnimalNames[randomNumber]}`;

    newSpiritAnimalNames.splice(randomNumber, 1);

    console.log(newSpiritAnimalNames);

    console.log(spiritName);
    return (showSpiritAnimalName.innerHTML = spiritName);
  } else {
    console.log("there is no more animls spirit names.");
    showSpiritAnimalName.innerHTML = "There is no more animal spirit names.";
  }
}

document.addEventListener("click", function checked() {
  const radioChoosen = document.getElementsByName("forCreateSpiritAnimalName");
  for (let i = 0; i < radioChoosen.length; i++) {
    if (radioChoosen[i].checked && radioChoosen[i].value === "clickButton") {
      spiritAnimalNameButton.addEventListener(
        "click",
        spiritAnimalNameGenerator
      );
      name.removeEventListener("mouseover", spiritAnimalNameGenerator);
      name.removeEventListener("keyup", spiritAnimalNameGenerator);
    } else if (
      radioChoosen[i].checked &&
      radioChoosen[i].value === "hoverUpOnField"
    ) {
      name.addEventListener("mouseover", spiritAnimalNameGenerator);
      spiritAnimalNameButton.removeEventListener(
        "click",
        spiritAnimalNameGenerator
      );
      name.removeEventListener("keyup", spiritAnimalNameGenerator);
    } else if (
      radioChoosen[i].checked &&
      radioChoosen[i].value === "writeInField"
    ) {
      name.addEventListener("keyup", spiritAnimalNameGenerator);
      spiritAnimalNameButton.removeEventListener(
        "click",
        spiritAnimalNameGenerator
      );
      name.removeEventListener("mouseover", spiritAnimalNameGenerator);
    }
  }
});
