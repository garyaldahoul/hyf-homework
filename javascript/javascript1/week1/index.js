// Calc athe human age

const birthYear = document.getElementById("birthYear");
const selectedYear = document.getElementById("selectedYear");
const showYear = document.getElementById("showYear");
const calcAgeButton = document.getElementById("calcAgeButton");

function calcAge() {
  const result = selectedYear.value - birthYear.value;
  showYear.classList.add("show");
  showYear.innerHTML = "Your Age will Be : " + result;
  return result;
}

// Calc the dog age

const dogYearOfBirth = document.getElementById("dogYearOfBrith");
const dogYearFuture = document.getElementById("dogYearFuture");
const dogYears = document.getElementById("dogYears");
const humanYears = document.getElementById("humanYears");
const calcHumanDogAge = document.getElementById("calcHumanDogAgeButton");
const showAge = document.getElementById("showAge");

function calcDogHumanAge() {
  const age = dogYears.checked
    ? (dogYearFuture.value - dogYearOfBirth.value) * 7 + " Dogs Year"
    : dogYearFuture.value - dogYearOfBirth.value + " Human Years";
  showAge.innerHTML = "Your dog's old is : " + age;
  showAge.classList.add("show");
  return age;
}

// the house price

const width = document.getElementById("width");
const depth = document.getElementById("depth");
const height = document.getElementById("height");
const gardenSize = document.getElementById("gardenSize");
const priceHouseButton = document.getElementById("priceHouseButton");
const wantedPrice = document.getElementById("wantedPrice");

const showRightPrice = document.getElementById("showRightPrice");

priceHouseButton.addEventListener("click", rightPriceForHouse);

function rightPriceForHouse() {
  // the price for the house without garden:
  const price =
    width.value * depth.value * height.value * 2.5 * 1000 +
    gardenSize.value * 300;

  let result =
    wantedPrice.value > price
      ? `The apartment is very expensive and the right price is ${price} $`
      : `It is a good price. The right price is ${price} $. You will save ${
          price - wantedPrice.value
        } $`;
  showRightPrice.innerHTML = result;

  showRightPrice.classList.add("show");
  return result;
}

// Ez Namey (Startup name generator) Optional

const showNameGenerator = document.getElementById("showNameGenerator");
const firstNamesArray = [
  "honey",
  "love",
  "sweet",
  "Yammmmiy",
  "lolo",
  "smart",
  "strong",
  "best",
  "Gary",
  "HYF",
];
const secondNamesArray = [
  "Gary",
  "ismailo",
  "Nana",
  "inyea",
  "soso",
  "HYF",
  "lolo",
  "change",
  "life",
  "way",
];

let newFirstNameArray = [...firstNamesArray];
let newSecondNameArray = [...secondNamesArray];
function startUpNameGenerator() {
  showNameGenerator.innerHTML = "";
  for (let i = 0; i < newFirstNameArray.length; i++) {
    const randomNumberF = Math.floor(Math.random() * newFirstNameArray.length);
    const randomNumberS = Math.floor(Math.random() * newSecondNameArray.length);
    const generateName = document.createElement("div");
    generateName.classList.add("application");
    generateName.innerHTML = `
    ${newFirstNameArray[randomNumberF]} ${newSecondNameArray[randomNumberS]}`;
    newFirstNameArray.splice(randomNumberF, 1);
    newSecondNameArray.splice(randomNumberS, 1);
    i = -1;
    showNameGenerator.appendChild(generateName);
  }

  newFirstNameArray = [...firstNamesArray];
  newSecondNameArray = [...secondNamesArray];
  return showNameGenerator;
}
