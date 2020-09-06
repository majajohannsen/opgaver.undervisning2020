"use strict";

// =========== Movie SPA functionality =========== //

//global variable
let _movies = [];

// fetch all movies from WP
async function getMovies() {
  // TODO: fetch movies from wp headless and call appendMovies
  // https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed
  let response = await fetch(" https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed");
  let data = await response.json();
  console.log(data); 
  _movies = data;
  appendMovies(_movies);
}
getMovies();

// append movies to the DOM
function appendMovies(movies) {
  // TODO: append movies to #movies-container
let template = "";
console.log(movies);

for (const movie of movies) {
template += /*html*/`

<article>
  <h2>${movie.title.rendered}</h2>
  <img src="${movie.acf.img}">
  <h4>Description:</h4>
  ${movie.excerpt.rendered}
  <a class="button" href= "${movie.acf.trailer}">Trailer</a>
</article>
`;
}
console.log(template);
document.querySelector("#movies-container").innerHTML = template; 
showLoader(false);
}

// search functionality
function search(value) {
  // TODO: search functionality
  console.log(value);
  let searchValue = value.toLowerCase();
  console.log(searchValue);
  let resualt = [];
  for (const movie of _movies) {
    let title = movie.title.rendered.toLowerCase();
    if(title.includes(searchValue)) {
  resualt.push(movie);
    }
  }
appendMovies(resualt);
}

// fetch all genres / categories from WP
async function getGenres() {
  // TODO: get categories from wp headless
  // https://movie-api.cederdorff.com/wp-json/wp/v2/categories
  let response = await fetch("https://movie-api.cederdorff.com/wp-json/wp/v2/categories");
  let data = await response.json();
  console.log(data);
  appendGenres(data);
}

getGenres();

// append all genres as select options (dropdown)
function appendGenres(genres) {
  // TODO: append categories to #select-genre
  let htmlTemplate ="";

  for (const genre of genres) {
    htmlTemplate += /*html*/`
<option value="${genre.id}">${genre.name}</option>
`;
  }
  document.querySelector("#select-genre").innerHTML += htmlTemplate;
}

// genre selected event - fetch movies by selected category
function genreSelected(genreId) {
  // TODO: fetch movies matching the given genreId
  // `https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=${genreId}`
}

// append movies by genre
function appendMoviesByGenre(moviesByGenre) {
  // TODO: append movies using a for-of loop
}


// =========== Loader functionality =========== //

function showLoader(show) {
  let loader = document.querySelector('#loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}