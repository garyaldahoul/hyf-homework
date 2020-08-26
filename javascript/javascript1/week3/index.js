/*
let names = [
  "Peter",
  "Ahmad",
  "Yana",
  "Kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

let newName = [];
names.forEach((name) => name !== nameToRemove && newName.push(name));

names = [...newName];
console.log(names);

*/

const firstNamesArray = document.getElementById("firstNamesArray");
const showNamesArray = document.getElementById("showNamesArray");
const showNewNamesArray = document.getElementById("showNewNamesArray");
const newName = document.getElementById("newName");
const nameToRemove = document.getElementById("nameToRemove");

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "Kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

// add name to array and display it
function addNewName(name) {
  console.log(newName.value);
  showNamesArray.innerHTML = "";
  name = newName.value;
  names.push(name);
  console.log(names);
  console.log(names.length);
  for (let i = 0; i < names.length; i++) {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(names[i]);

    newDiv.appendChild(newContent);
    showNamesArray.append(newDiv);
  }
}

// display names for the first time
for (let i = 0; i < names.length; i++) {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode(names[i]);
  newDiv.appendChild(newContent);
  showNamesArray.append(newDiv);
}

// remvoe name from array and display the new list of names
//names.splice(0, 1);
function createNewArray() {
  showNewNamesArray.innerHTML = "";
  for (indexNumber in names) {
    if (
      names[indexNumber].toLocaleLowerCase() ===
      nameToRemove.value.toLocaleLowerCase()
    ) {
      names.splice(indexNumber, 1);
    }
  }

  for (let i = 0; i < names.length; i++) {
    const nameItemList = document.createElement("li");
    nameItemList.classList.add("list-style");
    nameItemList.innerHTML = names[i];

    showNewNamesArray.append(nameItemList);
  }
}

// When will We Be There Speed/Destination/Time

const speed = document.getElementById("speed");
const destinationDistance = document.getElementById("destinationDistance");
const showTime = document.getElementById("showTime");

const travelInformation = {
  speed: speed.value,
  destinationDistance: destinationDistance.value,
};

function calculateTime(travelInformation) {
  travelInformation.speed = speed.value;
  travelInformation.destinationDistance = destinationDistance.value;
  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hour = Math.floor(time);
  const minutes = Math.floor((time - hour) * 60);
  showTime.innerHTML = `${hour} Hour and ${minutes} Minutes`;
  showTime.classList.add("show");
  return showTime;
}

// Series Duration Of My Life

const title = document.getElementById("title");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const showSeries = document.getElementById("showSeries");
const yearsToLife = document.getElementById("yearsToLife");

const seriesDuration = [];

function addSeries() {
  const series = {};
  series.title = title.value;
  series.days = days.value;
  series.hours = hours.value;
  series.minutes = minutes.value;

  seriesDuration.push(series);
  console.log(seriesDuration);

  const daysArray = [];
  const hoursArray = [];
  const minutesArray = [];
  for (let i = 0; i < seriesDuration.length; i++) {
    const seriesTitle = seriesDuration[i].title;
    console.log(seriesTitle);
    daysArray.push(parseInt(seriesDuration[i].days));
    hoursArray.push(parseInt(seriesDuration[i].hours));
    minutesArray.push(parseInt(seriesDuration[i].minutes));
  }

  let allMinutes = minutesArray.reduce((a, b) => a + b, 0);
  let howManyMinutes = allMinutes % 60;

  let allHours =
    hoursArray.reduce((a, b) => a + b, 0) + Math.floor(allMinutes / 60);
  let howManyHours = allHours % 24;
  let howManyDays =
    daysArray.reduce((a, b) => a + b, 0) + Math.floor(allHours / 24);

  console.log(howManyDays, howManyHours, howManyMinutes);
  const fullSeriesTime =
    howManyDays * 1440 + howManyHours * 24 + howManyMinutes;
  console.log(fullSeriesTime);
  const yourLifeInminutes = yearsToLife.value * 525600;
  console.log(yourLifeInminutes);
  console.log(((fullSeriesTime * 100) / yourLifeInminutes).toFixed(3));
}

// this function for show the resulte //
const minutesSeriesTimeArray = [];
function showSeriesInformation() {
  showSeries.innerHTML = "";
  for (let i = 0; i < seriesDuration.length; i++) {
    let seriesInfo = document.createElement("div");
    let yourSpendTime =
      Math.floor(seriesDuration[i].days * 1441) +
      Math.floor(seriesDuration[i].hours * 60) +
      Math.floor(seriesDuration[i].minutes);

    const yourLifeInminutes = yearsToLife.value * 525600;
    const avrageForEverySeries = (
      (yourSpendTime * 100) /
      yourLifeInminutes
    ).toFixed(3);
    minutesSeriesTimeArray.push(yourSpendTime);
    let totalMinutes = minutesSeriesTimeArray.reduce((a, b) => a + b, 0);
    console.log(minutesSeriesTimeArray);
    let avrage = ((totalMinutes * 100) / yourLifeInminutes).toFixed(3);
    let allInformation = document.createTextNode(
      `${seriesDuration[i].title} needs ${seriesDuration[i].days} days, ${seriesDuration[i].hours} hours,and ${seriesDuration[i].minutes} minutes.
      This series will take ${avrageForEverySeries} % of my life if you will life ${yearsToLife.value}.
      In the total that is ${avrage} % of your life.`
    );
    seriesInfo.appendChild(allInformation);
    showSeries.classList.add("show");
    showSeries.append(seriesInfo);
  }
}

/// Note Taking App

const note = document.getElementById("note");
const idNote = document.getElementById("idNote");
const showNotes = document.getElementById("showNotes");
const showSpecificNote = document.getElementById("showSpecificNote");

let notes = [];

// Saving a note

function saveNote() {
  const savingNote = {};
  savingNote["content"] = note.value;
  savingNote["id"] = notes.length + 1;
  notes.push(savingNote);
}
// Get A Specific Note

function getNote(id) {
  let specificNote;
  id = parseInt(idNote.value);
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      specificNote = notes[i].content;
    }
  }

  showSpecificNote.innerHTML = `The specifice note you want is : ${specificNote}`;
  showSpecificNote.style.color = "green";

  return specificNote;
}

// Show All The Notes

function logOutNotesFormatted() {
  showNotes.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    let noteDiv = document.createElement("div");
    noteDiv.innerHTML = notes[i].content;
    noteDiv.style.color = "green";
    showNotes.appendChild(noteDiv);
  }
}

//  Smart Phone Usage App // ***************** Smart Way

const date = document.getElementById("date");
const activity = document.getElementById("activity");
const duration = document.getElementById("duration");
const showActivities = document.getElementById("showActivities");
const limitSmartPhoneUsage = document.getElementById("limitSmartPhoneUsage");

const activities = [];

function addActivity() {
  const allDurationArray = [];
  let totalDuration = 0;
  const activityForArray = {};
  activityForArray["date"] = date.value;
  activityForArray["activity"] = activity.value;
  activityForArray["duration"] = duration.value;
  console.log(typeof duration.value);
  for (let i = 0; i < activities.length; i++) {
    allDurationArray.push(parseInt(activities[i].duration));
  }
  totalDuration = allDurationArray.reduce(
    (a, b) => a + b,
    parseInt(duration.value)
  );
  console.log(totalDuration);

  limitSmartPhoneUsage.value >= totalDuration
    ? activities.push(activityForArray) &&
      (showActivities.innerHTML = `You have added ${activities.length} activities. They amount to ${totalDuration} min of usage.`) &&
      (showActivities.style.color = "green")
    : (showActivities.innerHTML = `Sorry, you can't add activites. Please check your limit`) &&
      (showActivities.style.color = "red");
  console.log(activities);
}
////////////////////////////////////////////////////////////////////////////

//  Smart Phone Usage App 2 Bad Way
// Adding Activity

const date2 = document.getElementById("date2");
const activity2 = document.getElementById("activity2");
const duration2 = document.getElementById("duration2");
const showActivities2 = document.getElementById("showActivities2");
const limitSmartPhoneUsage2 = document.getElementById("limitSmartPhoneUsage2");

const activities2 = [];
function addActivity2() {
  const activityForArray = {};
  activityForArray["date"] = date2.value;
  activityForArray["activity"] = activity2.value;
  activityForArray["duration"] = duration2.value;

  activities2.push(activityForArray);
}

// Showing My Status
const allDurationArray2 = [];
let totalDuration2 = 0;
function showStatus() {
  let message = "";

  for (let i = 0; i < activities2.length; i++) {
    allDurationArray2.push(parseInt(activities2[i].duration));
  }
  totalDuration2 = allDurationArray2.reduce((a, b) => a + b, 0);

  message =
    activities2.length === 0
      ? `Add Some Activities Before Calling ShowStatus,Please...`
      : `You have added ${activities2.length} activities. They amount to ${totalDuration2} min of usage.`;

  showActivities2.innerHTML = message;
  return showActivities2;
}

// Usage Limit

// Check The Limit

function checkLimit() {
  showActivities2.innerHTML = "";
  const reminderTime = limitSmartPhoneUsage.value - totalDuration2;
  let limitMessage = "";
  limitMessage =
    limitSmartPhoneUsage.value <= totalDuration2
      ? "Sorry, You have reached your limit, no more smartPhoning for you!"
      : `Yes, You have ${reminderTime} min.`;
  showActivities2.innerHTML = limitMessage;
}
