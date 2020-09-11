// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded

for (let i = 1; i < 6; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

const loading = document.getElementById("loading");
(function () {
  setTimeout(function () {
    console.log("hello");
    loading.innerHTML = "Hi!!!!!!!!!!!!!!!!";
  }, 2500);
})();

/* 2. Create a function that takes 2 parameters: delay and stringToLog.
   Calling this function should log out the stringToLog after delay seconds.
   Call the function you have created with some different arguments.
  
     3. Create a button in html. When clicking this button,
      use the function you created in the previous task to log out the text:
       Called after 5 seconds 5 seconds after the button is clicked.
  */

const addSecond = document.getElementById("addSecond");
const yourText = document.getElementById("yourText");
const showUpSecond = document.getElementById("showUpSecond");
const showDownSecond = document.getElementById("showDownSecond");
const showYourText = document.getElementById("showYourText");

function createText(delay, stringToLog) {
  delay = addSecond.value * 1000;
  stringToLog = yourText.value;
  setTimeout(function () {
    showYourText.innerHTML = stringToLog;
  }, delay);
  let numlist = [];
  for (let i = addSecond.value; i >= 0; i--) {
    numlist.push(i);
    console.log(numlist);
  }
  for (let i = 0; i <= addSecond.value; i++) {
    setTimeout(() => {
      showUpSecond.innerHTML = i;
      showDownSecond.innerHTML = numlist[i];
      console.log(numlist[i]);
    }, i * 1000);
  }
}

/*
  4. Create two functions and assign them to two different variables. 
  One function logs out Earth, the other function logs out Saturn. 
  Now create a new third function that has one parameter: planetLogFunction.
   The only thing the third function should do is call the provided parameter function.
    Try call the third function once with the Earth function and once with the Saturn function.
  */
const earthLogger = (function () {
  console.log("Hello,Earth");
})();
const saturnLogger = (function () {
  console.log("Hello,Saturn");
})();

function planetLogFunction(planet) {
  return planet;
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

function earth2() {
  console.log("hello, Earth 2 here .............");
}
function saturn2() {
  console.log("hello, Saturn 2 here .............");
}
function logOutPlanet(planet) {
  return planet();
}
logOutPlanet(earth2);
logOutPlanet(saturn2);
/*
  5. Create a button with the text called "Log location".
   When this button is clicked the location (latitude, longitude)
    of the user should be logged out using this browser api
  
  */

const locationInformation = document.getElementById("locationInformation");

let latitude;
let longitude;
function getLocation() {
  const status = document.querySelector("#status");

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(latitude, longitude);

    locationInformation.innerHTML = `
      <p>This is the latitude ${latitude}</p>
      <p>This is the longitude ${longitude}</p>`;

    status.textContent = "";
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", getLocation);
/*
  7. Create a function called runAfterDelay. 
  It has two parameters: delay and callback. 
  When called the function should wait delay seconds and then call the provided callback function. 
  Try and call this function with different delays and different callback functions
  */
function sms() {
  console.log("We ve getting your message----");
}
function runAfterDelay(delay, callback) {
  delay = delay * 1000;
  console.log(delay);
  setTimeout(callback, delay);
}
runAfterDelay(5, sms);

/*
   8. Check if we have double clicked on the page.
   A double click is defined by two clicks within 0.5 seconds.
    If a double click has been detected, log out the text: "double click!"
  */
window.document.addEventListener("dblclick", () =>
  console.log("double click!")
);

// create JokeCreator function
/*
  9. Create a function called jokeCreator that has three parameters:
   shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
    If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
  */

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

function logFunnyJoke() {
  console.log("It is funny Joke");
}

function logBadJoke() {
  console.log("It is bad Joke");
}
jokeCreator(true, logFunnyJoke, logBadJoke);

// Function as a variable
// create array functions
// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

const firstFunction = function firstFunction() {
  console.log("First Function");
};

const secondFunction = function secondFunction() {
  console.log("Second Function");
};

const thirdFunction = function thirdFunction() {
  console.log("Third Function");
};

const functionsArray = [firstFunction, secondFunction, thirdFunction];

functionsArray.forEach((functionInsideArray) => functionInsideArray());

// create a const function and another function normally
// Create a function as a const and try creating a function normally. Call both functions

const constFunction = function constFunction() {
  console.log("We create the const function");
};

function normallyFunction() {
  console.log("We create the function normally");
}

constFunction(); // you can't access to the constFunction before initialization
normallyFunction(); // you can access anywhere ;)

// create an object has a key whoes value is a function
//Create an object that has a key whose value is a function. Try calling this function.

const objectFunction = {
  name: "objectName",
  age: 10,
  oldFunctionWay: function () {
    console.log(
      "Hello sir, I'm the old way to create function inside the object"
    );
  },
  newFunctionWay() {
    console.log(
      "Hiiiiiii, I'm the new way to carete the function inside the object"
    );
  },
};

objectFunction.oldFunctionWay();
objectFunction.newFunctionWay();

// the Game

const firstPlayer = document.getElementById("firstPlayer");
const secondPlayer = document.getElementById("secondPlayer");

const setSeconds = document.getElementById("setSeconds");

const startGameButton = document.getElementById("startGameButton");
const showCounterL = document.getElementById("showCounterL");
const showCounterS = document.getElementById("showCounterS");
const downSecond = document.getElementById("downSecond");

startGameButton.addEventListener("click", work);

function work() {
  const counter = [];
  const counterL = [];
  const counterS = [];

  let gameTime = setSeconds.value * 1000;
  let secondList = [];
  for (let i = setSeconds.value; i >= 0; i--) {
    secondList.push(i);
    console.log(secondList);
  }
  for (let i = 0; i <= setSeconds.value; i++) {
    setTimeout(() => {
      downSecond.innerHTML = i;
      downSecond.innerHTML = secondList[i];
      console.log(secondList[i]);
    }, i * 1000);
  }

  document.addEventListener("keypress", functionWork);
  function functionWork(e) {
    e.preventDefault();
    let value = String.fromCharCode(e.keyCode);
    value.toLowerCase() === "l" &&
      counterL.push(value) &&
      (showCounterL.innerHTML = `${counterL.length}`) &&
      console.log(counterL.length);
    value.toLowerCase() === "s" &&
      counterS.push(value) &&
      (showCounterS.innerHTML = `${counterS.length}`) &&
      console.log(counterS.length);
    console.log(value);
    counter.push(value);
    console.log(counter.length);
  }

  setTimeout(() => {
    console.log(counter, counterS, counterL);
    /*
      {
        counterL.length > counterS.length &&
          firstPlayer.setAttribute("class", "green") &&
          secondPlayer.setAttribute("class", "red");
      }
      {
        counterS.length > counterL.length &&
          secondPlayer.setAttribute("class", "green") &&
          firstPlayer.setAttribute("class", "red");
      }
      */

    if (counterL.length > counterS.length) {
      firstPlayer.setAttribute("class", "green");
      secondPlayer.setAttribute("class", "red");
      showCounterL.innerHTML = `<div>${counterL.length}</div>
        <div>You Win!`;
      showCounterS.innerHTML = `<div>${counterS.length}</div>
        <div>You Lose!</div>`;
    } else if (counterS.length > counterL.length) {
      secondPlayer.setAttribute("class", "green");
      firstPlayer.setAttribute("class", "red");
      showCounterS.innerHTML = `<div>${counterS.length}</div>
        <div>You Win!</div>`;
      showCounterL.innerHTML = `<div>${counterL.length}</div>
        <div>You Lose!</div>`;
    } else {
      showCounterL.innerHTML = `${counterL.length}`;
      showCounterS.innerHTML = `${counterS.length}`;
      firstPlayer.setAttribute("class", "gray");
      secondPlayer.setAttribute("class", "gray");
    }
    document.removeEventListener("keypress", functionWork);
  }, gameTime);
  showCounterL.innerHTML = "";
  showCounterS.innerHTML = "";
  firstPlayer.removeAttribute("class", ("red", "green"));
  secondPlayer.removeAttribute("class", ("green", "red"));
}
