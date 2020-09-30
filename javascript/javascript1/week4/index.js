/* 
        I did not finish yet 

*/

const personalInformation = {
  name: "",
  age: "",
  address: "you didn't add address",
};
const todos = [];

const date = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function runSpeechRecognition() {
  let output = document.getElementById("output");

  let action = document.getElementById("action");

  let SpeechRecognition;
  SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  let recognition = new SpeechRecognition();

  recognition.onstart = function () {
    action.innerHTML = "<small>listening, please speak...</small>";
  };

  recognition.onspeechend = function () {
    action.innerHTML = "<small>stopped listening, hope you are done...</small>";
    recognition.stop();
  };

  recognition.onresult = function (event) {
    let msg = "";
    let transcript = event.results[0][0].transcript;

    if (
      /hi my name is/gi.test(transcript) ||
      /my name is/gi.test(transcript) ||
      /i am/gi.test(transcript)
    ) {
      personalInformation.name = transcript.split(" ").pop();
      msg = `hi ${personalInformation.name}`;
      console.log(msg);
    } else if (
      /what is my name/gi.test(transcript) &&
      personalInformation.name === ""
    ) {
      msg = `You did not add name, Add you name please`;
    } else if (
      /what is my name/gi.test(transcript) &&
      personalInformation.name !== ""
    ) {
      msg = `Your name is ${personalInformation.name}`;
    } else if (
      /my age is/gi.test(transcript) ||
      /old/gi.test(transcript) ||
      /years/gi.test(transcript) ||
      /my old is/gi.test(transcript)
    ) {
      personalInformation.age = transcript.split(" ").pop();
      console.log(personalInformation);
      msg = `Your age is ${personalInformation.age} years old`;
    } else if (
      /what is my age/gi.test(transcript) &&
      personalInformation.age === ""
    ) {
      msg = `You did not add age, Add you age please`;
    } else if (
      /what is my age/gi.test(transcript) &&
      personalInformation.age !== ""
    ) {
      msg = `Your age is ${personalInformation.age}`;
    } else if (/todo/gi.test(transcript) || /to do/gi.test(transcript)) {
      msg = `you have ${todos.length} tasks on your todo,
          if you want to add task use add,
          if you want to see all your tasks use check,
          if you want to remove something from todo use remove`;
    } else if (/add to todo/gi.test(transcript)) {
      msg = `What do you want to add todo`;
    } else if (
      /add/gi.test(transcript) ||
      /add to do/gi.test(transcript) ||
      / add to todo/gi.test(transcript)
    ) {
      transcript = transcript.split(" ");
      console.log(transcript);
      transcript.splice(transcript.indexOf("add"), 1);
      transcript = transcript.join(" ");
      todos.push(transcript);
      console.log(todos);
      msg = `${transcript} added to your todo`;
    } else if (
      /what is on my todo/gi.test(transcript) ||
      /what i have in my todo/gi.test(transcript) ||
      /check todo/gi.test(transcript) ||
      /check/gi.test(transcript)
    ) {
      for (let i = 0; i < todos.length; i++) {
        msg = todos[i];
        console.log(msg);
        textToAudio(msg);
        msg = "";
      }
    } else if (/remove/gi.test(transcript)) {
      transcript = transcript.split(" ").splice(transcript.indexOf("add", 1));
      console.log(transcript);
      let removeTodoElment = todos.splice(todos.indexOf(transcript), 1);
      console.log(todos);
      msg = ` Removed ${removeTodoElment} from your todo`;
    } else if (/what day is today/.test(transcript)) {
      const today = daysOfWeek[date.getDay()];
      msg = `Today is ${today}`;
      console.log(date);
    } else if (/what month/.test(transcript)) {
      const month = months[date.getMonth()];
      msg = `It is ${month}`;
      console.log(date);
    } else if (/what year/.test(transcript)) {
      const year = date.getFullYear();
      msg = `It is ${year}`;
      console.log(date);
    } else if (/date/.test(transcript)) {
      msg = `It is
          ${daysOfWeek[date.getDay()]}
          ${date.getDate()},
          ${months[date.getMonth()]}
          ${date.getFullYear()}`;
      console.log(date);
    } else if (/math/gi.test(transcript)) {
      msg = `What kind of math do you want to do,
          if you want add two numbers use order addition,
          if you want reduce one number from another use subtraction,
          if you want multiple numbers use multiplication,
          if you want divide two numbers use division`;
    } else if (
      /addition/gi.test(transcript) ||
      /plus/gi.test(transcript) ||
      /plas/gi.test(transcript) ||
      /place/gi.test(transcript)
    ) {
      console.log("addtion is work");
      additionArray = [];
      transcript = transcript.split(" ");
      for (el in transcript) {
        console.log(transcript[el]);

        /*
            wordsToNumbers(transcript[el]).isInteger()
              ? additionArray.push(transcript(el))
              : "none";
              */
      }
      console.log(additionArray);
    } else if (
      /set a timer for/gi.test(transcript) ||
      /set timer/gi.test(transcript) ||
      /timer/gi.test(transcript)
    ) {
      console.log("change to second and put timer, use word to number");
    }

    textToAudio(msg);

    output.classList.remove("hide");
  };

  recognition.start();
}

function textToAudio(msg) {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";

  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 0.5;

  window.speechSynthesis.speak(speech);
}
