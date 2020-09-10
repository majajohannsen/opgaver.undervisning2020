
import Spa from "./spa.js"; 
import MovieService from "./movie-service.js";

let spa = new Spa("movies");
let movieService = new MovieService();

//functions in global variables
window.pageChange = function () {
spa.pageChange();
}

window.categorySelected = function (id) {

}

window.search = function (searchValue) {

}