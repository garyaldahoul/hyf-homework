const firstName = document.getElementById("firstName");
const surName = document.getElementById("surName");
const fullNameButton = document.getElementById("fullNameButton");
const showFullName = document.getElementById("showFullName");

function fullName() {
  showFullName.innerHTML = `${firstName.value} ${surName.value}`;
  showFullName.classList.add("show");
  return showFullName;
}

/*

function fullName(firstName,surName){
    return `${firstName} ${surName}`;
}
 */

// Formal FullName

const firstFormalName = document.getElementById("firstFormalName");
const surFormalName = document.getElementById("surFormalName");
const fullFormalNameButton = document.getElementById("fullFormalNameButton");
const showFullFormalName = document.getElementById("showFullFormalName");
const useFormalName = document.getElementById("useFormalName");

function fullFormalName(firstFormalName, surFormalName, useFormalName) {
  const fullName = useFormalName.checked
    ? `Lord ${firstFormalName.value} ${surFormalName.value}`
    : `${firstFormalName.value} ${surFormalName.value}`;
  showFullFormalName.innerHTML = fullName;
  showFullFormalName.classList.add("show");
  return fullName;
}

// Event Application

function calcDaysToEvent() {
  const currentDate = new Date();
  console.log(currentDate);
  console.log(currentDate.getDay());
  const todayNumber = currentDate.getDay();
  console.log(todayNumber);

  const daysToEvent = document.getElementById("daysToEvent");
  const calcDaysToEventButton = document.getElementById(
    "calcDaysToEventButton"
  );
  const showDayOfEvent = document.getElementById("showDayOfEvent");
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const days = parseInt(todayNumber) + parseInt(daysToEvent.value);
  console.log(days);
  const daysOfEvent = daysOfWeek[days % 7];
  console.log(daysOfEvent);

  showDayOfEvent.innerHTML = daysOfEvent;
  showDayOfEvent.classList.add("show");
  return daysOfEvent;
}

// Weather Wear

const temperature = document.getElementById("temperature");
const showWhatToWear = document.getElementById("showWhatToWear");

function whatToWear(temperature) {
  let answer = "";
  temperature = temperature.value;
  console.log(temperature);
  if (temperature > 40) {
    answer = "It is too hot, take off your clothes and stay home.";
  } else if (temperature > 30) {
    answer = "It is hot, wear hat,T-shirt and short and stay away from the Sun";
  } else if (temperature > 15) {
    answer = "It is nice, cool clothes, go out and injoy";
  } else if (temperature > 5) {
    answer =
      "It is litte bite cold, have sweeter, but it is still a nice weather";
  } else if (temperature > -5) {
    answer = "It is cold , You shoul have a warm clothes and jacket";
  } else if (temperature <= 5) {
    answer = "It is so cold, Be warm and stay home";
  } else {
    answer = "Please, you should enter the temperature";
  }
  showWhatToWear.innerHTML = answer;
  showWhatToWear.classList.add("show");
  return answer;
}

// Student Manager

const studentName = document.getElementById("studentName");
const showStudentNumber = document.getElementById("showStudentNumber");
const class015Students = [];
const addStudentToClass = (studentName) => {
  console.log(class015Students.length);
  let message = "";
  studentName = studentName.value.toLowerCase();
  if (class015Students.includes(studentName)) {
    message = `Student ${studentName} is already in the class015`;
  } else if (studentName === "queen" && !class015Students.includes("queen")) {
    class015Students.push("queen");
    message = `Queen always is welcome`;
  } else if (class015Students.length >= 6) {
    message = "Cannot add more students to class015";
  } else if (studentName === "") {
    message = "Please enter Student name";
  } else {
    class015Students.push(studentName);
    message = `${studentName} Join to the class015, we have ${class015Students.length} students.`;
  }
  console.log(class015Students);
  showStudentNumber.innerHTML = message;
  showStudentNumber.classList.add("show");
  return message;
};

function getNumberOfStudents() {
  const studentsNumber = class015Students.length;
  return studentsNumber;
}

// Candy Shop
const candyPrices = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewing_gum: 0.03,
};

const candyType = document.getElementById("candyType");
const weight = document.getElementById("weight");
const showBoughtCandy = document.getElementById("showBoughtCandy");
const boughtCandyPrices = [];
const candyPriceButton = document.getElementById("candyPriceButton");

const amounToSpend = Math.floor(Math.random() * 100) + 1;
console.log(amounToSpend);
const showCanBuyMoreCandy = document.getElementById("showCanBuyMoreCandy");

function canBuyMoreCandy() {
  let buyMoreCandy = "";
  let sum = boughtCandyPrices.reduce((a, b) => a + b, 0);
  console.log(sum);
  console.log(amounToSpend);
  if (amounToSpend <= sum) {
    buyMoreCandy = "Enough candy for you!";
    showCanBuyMoreCandy.innerHTML = buyMoreCandy;
    showCanBuyMoreCandy.classList.add("show");
    return false;
  } else {
    buyMoreCandy = "You can buy more, so please do!";
    showCanBuyMoreCandy.innerHTML = buyMoreCandy;
    showCanBuyMoreCandy.classList.add("show");
    return true;
  }
}

function addCandy(candyType, weight) {
  let sum = boughtCandyPrices.reduce((a, b) => a + b, 0);
  candyType = candyType.value;
  weight = weight.value;
  if (canBuyMoreCandy() === false) {
    showBoughtCandy.innerHTML = "Sorry, You can't buy more candy";
  } else if (candyType.toLowerCase() === "sweet") {
    let sweetPrice = candyPrices.sweet * weight;
    boughtCandyPrices.push(sweetPrice);
  } else if (candyType.toLowerCase() === "chocolate") {
    let chocolatePrice = candyPrices.chocolate * weight;
    boughtCandyPrices.push(chocolatePrice);
  } else if (candyType.toLowerCase() === "toffee") {
    let toffeePrice = candyPrices.toffee * weight;
    boughtCandyPrices.push(toffeePrice);
  } else if (candyType.toLowerCase() === "chewing-gum") {
    let chewing_gumPrice = candyPrices.chewing_gum * weight;
    boughtCandyPrices.push(chewing_gumPrice);
  }

  sum = boughtCandyPrices.reduce((a, b) => a + b, 0);

  console.log(boughtCandyPrices);
  showBoughtCandy.innerHTML = `${sum} $ `;
  showBoughtCandy.classList.add("show");
  return showBoughtCandy;
}
