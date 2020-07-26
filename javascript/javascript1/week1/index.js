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

const showRightPrice = document.getElementById("showRightPrice");

priceHouseButton.addEventListener("click", rightPriceForHouse);

function rightPriceForHouse() {
  // the price for the house without garden:
  const volumeInMeters =
    width.value * depth.value * height.value * 2.5 * 1000 +
    gardenSize.value * 300;
  showRightPrice.innerHTML =
    "The right price for the house is : " + volumeInMeters;

  showRightPrice.classList.add("show");
  return volumeInMeters;
}

// Ez Namey (Startup name generator) Optional

let firstNamesArray = ["honey", "love", "sweet", "Yammmmiy", "lolo"];
let secondNamesArray = ["Gary", "ismailo", "Nana", "inyea", "soso"];

const randomNumber = Math.floor(Math.random() * 10) + 0;

// write down the output from the console, then check if you are right or not by putting them in the console
console.log(typeof 3);
console.log(typeof -33);
console.log(typeof "3");
const threeConst = 3;
console.log(threeConst);
let threeLet = 3;
console.log(threeLet);
console.log(typeof 'console.log("console.log(console.log(""))")');
console.log(typeof typeof 45);
const names = ["benjamin", "Christopher"];
console.log(typeof names[0]);
console.log(typeof [3][0]);
console.log(typeof true);
