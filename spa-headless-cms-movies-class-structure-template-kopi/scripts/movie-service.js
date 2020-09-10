import Loader from "./loader.js";

class MovieService {

  constructor() {
    this.movies = [];
    this.categories = [];
    this.loader = new Loader();
    this.init();
  }

  init() {
this.getMovies();
this.getCategories();

  }

 async getMovies() {
let data = await fetch ("https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed").then(response => response.json());
  console.log(data);
  this.movies = data;
  this.appendMovies(this.movies);
  this.loader.show(false);
}

  async getCategories() {
    let data = await fetch ("https://movie-api.cederdorff.com/wp-json/wp/v2/categories").then(response => response.json());
    console.log(data);
    this.categories = data;
    this.appendCategories();
    
  }

 async getMoviesByCategory(categoryId) {
   this.loader.show(false);
let data = await fetch (`https://movie-api.cederdorff.com/wp-json/wp/v2/posts?categories=${categoryId}`).then(response => response.json());
  this.appendMoviesByCategory(data);
  this.loader.show(false);

}

  appendMovies(movies) {
    let htmlTemplate = "";
    for (let movie of movies) {
      htmlTemplate += /*html*/`
        <article>
          <h2>${movie.title.rendered} (${movie.acf.year})</h2>
          <img src="${movie.acf.img}">
          <p>${movie.acf.description}</p>
          <iframe src="${movie.acf.trailer}"></iframe>
        </article>
      `;
    }
    document.querySelector('#movies-container').innerHTML = htmlTemplate;
  }

  appendCategories() {
    let htmlTemplate = "";
    for (let category of this.categories) {
      htmlTemplate += /*html*/`
        <option value="${category.id}">${category.name}</option>
      `;
    }

    document.querySelector('#select-category').innerHTML += htmlTemplate;
  }

  appendMoviesByCategory(movies) {
    let htmlTemplate = "";
    for (let movie of movies) {
      htmlTemplate += /*html*/`
        <article>
          <h2>${movie.title.rendered} (${movie.acf.year})</h2>
          <img src="${movie.acf.img}">
          <p>${movie.acf.description}</p>
          <iframe src="${movie.acf.trailer}"></iframe>
        </article>
      `;
    }
    // if no movies, display feedback to the user
    if (movies.length === 0) {
      htmlTemplate = /*html*/`
        <p>No Movies</p>
      `;
    }

    document.querySelector('#movies-by-category-container').innerHTML = htmlTemplate;
  }

  search(value) {
    let searchValue = value.toLowerCase();
    let filteredMovies = this.movies.filter(movie => movie.title.rendered.toLowerCase().includes(searchValue));
    this.appendMovies(filteredMovies);
  }
}

export default MovieService;