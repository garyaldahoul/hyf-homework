/*
Hi, I have solve this homework before more than one month, 
And now I can more work with forEach, map and filter,
 so I know i can do it better and use something easire and shorter.
*/

import movies from "./movies";

const numbers = [1, 2, 3, 4];

const newNumbers = [];

numbers.filter((num) => num % 2 !== 0).map((num) => newNumbers.push(num * 2));

console.log(newNumbers);

/*
1. Create an array of movies containing the movies with a short title
 (you define what short means)
*/

// a.

const newMovies = movies
  .map((movie) => movie.title)
  .filter((titleMovie) => titleMovie.split(" ").length < 2);
console.log(newMovies);

// b.

const showShortMovieTitles = document.getElementById("showShortMovieTitles");
function shortMovieTitleGenerator() {
  const shortMovieTitles = movies
    .map((movie) => movie.title)
    .filter((movie) => movie.split(" ").length < 2);
  console.log(shortMovieTitles);
  shortMovieTitles.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie;
    showShortMovieTitles.append(li);
  });
}

/*
2. Create an array of movie titles with long movie titles
*/

// a.

const titleMovies = movies.map((movie) => movie.title);
console.log(titleMovies);

// b.

const showMovieTitlesButton = document.getElementById("showMovieTitlesButton");
const showLongMovieTitles = document.getElementById("showLongMovieTitles");
const longMovieTitle = [];
function longMovieTitleGenerator() {
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie.title;
    showLongMovieTitles.append(li);
    li.textContent = movie.title;

    console.log(movie.title);
  });
}

showMovieTitlesButton.addEventListener("click", longMovieTitleGenerator);

// 3. Count the number of movies made between 1980-1989 (including both the years)

// a.

const yearMovies = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
console.log(yearMovies);
console.log(yearMovies.length);

// b.

const showMoviesBetweenYearsButton = document.getElementById(
  "showMoviesBetweenYearsButton"
);

const showMoviesBetweenYear = document.getElementById("showMoviesBetweenYears");
const showMoviesTitleBetweenYears = document.getElementById(
  "showMoviesTitleBetweenYears"
);

const moviesBetweenYears = [];
function moviesBetweenYearsGenerator() {
  movies.forEach((movie) => {
    movie.year >= 1980 && movie.year <= 1989 && moviesBetweenYears.push(movie);
    showMoviesBetweenYear.innerHTML = `There are ${moviesBetweenYears.length} movies between 1980 and 1989`;
  });

  moviesBetweenYears.forEach((movie) => {
    console.log(movie);

    const li = document.createElement("li");
    li.textContent = `${movie.title}  _ ${movie.year}`;
    showMoviesTitleBetweenYears.append(li);
  });

  console.log(moviesBetweenYears);
}
showMoviesBetweenYearsButton.addEventListener(
  "click",
  moviesBetweenYearsGenerator
);
/* 
4. Create a new array that has an extra key called tag.
 The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
*/

// a.
const newTagMovies = movies.filter((movie) => {
  if (movie.rating >= 7) {
    movie["tag"] = "good";
  } else if (movie.rating >= 4) {
    movie["tag"] = "average";
  } else if (movie.rating < 4) {
    movie["tag"] = "bad";
  }
  return movie;
});
console.log(newTagMovies);

// b.

const newTagMoviesArray = [];

movies.forEach((movie) => {
  let tag = "";
  if (movie.rating >= 7) {
    tag = "Good";
  } else if (movie.rating < 7 && movie.rating >= 4) {
    tag = "Average";
  } else if (movie.rating < 4) {
    tag = "Bad";
  }
  movie["tag"] = tag;

  newTagMoviesArray.push(movie);
});

/*
5. Using chaining, first filter the movies array to only contain the movies rated higher than 6.
 Now map the movies array to only the rating of the movies.
*/

// a.

const moviesMore6 = movies.filter((movie) => movie.rating < 6);
console.log(moviesMore6);

// b.

const showMovieTitleRatingMoreThan6Button = document.getElementById(
  "showMovieTitleRatingMoreThan6Button"
);
const showMovieTitleRatingMoreThan6 = document.getElementById(
  "showMovieTitleRatingMoreThan6"
);
const moviesRatingMoreThan6 = [];
function showMovieTitleRatingMoreThan_6_Generator() {
  movies.map((movie) => movie.rating > 6 && moviesRatingMoreThan6.push(movie));
  console.log(moviesRatingMoreThan6);
  showMovieTitleRatingMoreThan6.innerHTML = `There are ${moviesRatingMoreThan6.length} movies that there rating is more than 6.`;
}
showMovieTitleRatingMoreThan6Button.addEventListener(
  "click",
  showMovieTitleRatingMoreThan_6_Generator
);
/*
6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
 So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
  Can you make sure the search is case insensitive?
*/

const showSurferAlienBenjaminMovies = document.getElementById(
  "showSurferAlienBenjaminMovies"
);
const showSurferAlienBenjaminMoviesButton = document.getElementById(
  "showSurferAlienBenjaminMoviesButton"
);
const totalArray = [];
let total = 0;

function showSurferAlienBenjaminMoviesGenerator() {
  movies.forEach((movie) => {
    Object.keys(movie).map((key) => {
      const surfer = /surfer/gi;
      const alien = /alien/gi;
      const benjamin = /benjamin/gi;
      surfer.test(movie[key]) &&
        totalArray.push(movie[key]) &&
        (total = total + 1);
      alien.test(movie[key]) &&
        totalArray.push(movie[key]) &&
        (total = total + 1);
      benjamin.test(movie[key]) &&
        totalArray.push(movie[key]) &&
        (total = total + 1);
    });
  });

  console.log(total);
  console.log(totalArray.length);
  console.log(totalArray);
  showSurferAlienBenjaminMovies.innerHTML = `There are ${totalArray.length} movies contain Surfer, Alien or Benjamin word.`;
}

showSurferAlienBenjaminMoviesButton.addEventListener(
  "click",
  showSurferAlienBenjaminMoviesGenerator
);
/*
7. Create an array of movies where a word in the title is duplicated. 
Fx "Star Wars: The Clone Wars" the word Wars is duplicated. 
Here are some madeup examples of movies with duplicated words in the title:
 "The three men and the pistol", "Chase three - The final chase"
*/

// a.

const duplicatedWord = movies
  .map((movie) => movie.title.toLowerCase())
  .filter((title) => {
    let ta = title.toLowerCase().split(" ");
    const obCounter = {};
    for (let el = 0; el < ta.length; el++) {
      console.log(ta[el]);
      if (!(ta[el] in obCounter)) {
        obCounter[ta[el]] = 1;
      } else {
        obCounter[ta[el]] = obCounter[ta[el]] + 1;
        return title;
      }
    }
  });
console.log(duplicatedWord);

// b.

const duplicatedWordArray = [];
const duplicatedWordsButton = document.getElementById("duplicatedWordsButton");
const showDuplicatedWords = document.getElementById("showDuplicatedWords");

function checkDuplicatedWords() {
  movies.forEach((movie) => {
    const movieTitle = movie.title;
    const regWord = /\b(\w+)\b(?=.*?\b\1\b)/gi;
    regWord.test(movieTitle) ? duplicatedWordArray.push(movieTitle) : "none";
  });
  duplicatedWordArray.forEach((movie) => {
    const li = document.createElement("li");
    li.innerHTML = movie;
    showDuplicatedWords.append(li);
  });
  console.log(duplicatedWordArray);
  return showDuplicatedWords;
}
duplicatedWordsButton.addEventListener("click", checkDuplicatedWords);

/*
8. Calculate the average rating of all the movies using reduce. Optional
*/

// a.

const ratingAllMovies = movies.map((movie) => movie.rating);
const averageMoviesRating =
  ratingAllMovies.reduce((a, b) => a + b, 0) / ratingAllMovies.length;
console.log(averageMoviesRating.toFixed(2));

// b.

const averageRatingButton = document.getElementById("averageRatingButton");
const showAverageRating = document.getElementById("showAverageRating");
const ratingArray = [];

function calculateAverageRating() {
  movies.forEach((movie) => ratingArray.push(movie.rating));
  const tot = ratingArray.reduce((a, b) => a + b, 0);
  console.log(ratingArray);
  const average = (tot / ratingArray.length).toFixed(2);
  console.log(average);
  showAverageRating.innerHTML = average;
  return showAverageRating;
}

averageRatingButton.addEventListener("click", calculateAverageRating);

/*
9. Count the total number of Good, Average and Bad movies using reduce.
 A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
 */

const showFX = document.getElementById("showFX");
const showFXButton = document.getElementById("showFXButton");
const totalNumberGAB = {};
function show() {
  const goodMovies = document.createElement("div");
  const averageMovies = document.createElement("div");
  const badMovies = document.createElement("div");
  totalNumberGAB["goodMovies"] = 0;
  totalNumberGAB["averageMovies"] = 0;
  totalNumberGAB["badMovies"] = 0;
  console.log(totalNumberGAB);
  movies.forEach((movie) => {
    movie.tag === "Good" &&
      (totalNumberGAB["goodMovies"] = totalNumberGAB["goodMovies"] + 1);
    movie.tag === "Average" &&
      (totalNumberGAB["averageMovies"] = totalNumberGAB["averageMovies"] + 1);
    movie.tag === "Bad" &&
      (totalNumberGAB["badMovies"] = totalNumberGAB["badMovies"] + 1);
  });
  goodMovies.innerHTML = `goodMovies: ${totalNumberGAB["goodMovies"]}`;
  averageMovies.innerHTML = `averageMovies: ${totalNumberGAB["averageMovies"]}`;
  badMovies.innerHTML = `badMovies: ${totalNumberGAB["badMovies"]}`;
  console.log(totalNumberGAB);
  showFX.append(goodMovies);
  showFX.append(averageMovies);
  showFX.append(badMovies);
  return showFX;
}

showFXButton.addEventListener("click", show);
