import movieIdLocalStorage, { createMovies } from "../mainPage/utils";

const API_KEY = import.meta.env.VITE_API_KEY;
const IdPelicula = localStorage.getItem(movieIdLocalStorage);

export const getMoviesRecommendations = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${IdPelicula}/recommendations?api_key=${API_KEY}&language=es-CO&page=1`
    );
    const data = await res.json();
    const movies = data.results;

    const movieContenedor = document.querySelector("[page-content]");

    const movieSection = document.createElement("section");
    movieSection.classList.add("movie-list");

    const movieTitle = document.createElement("div");
    movieTitle.classList.add("title-wrapper");

    const movieTitleLarge = document.createElement("h3");
    movieTitleLarge.classList.add("title-large");
    movieTitleLarge.textContent = "También le puede interesar";

    const movieSliderList = document.createElement("div");
    movieSliderList.classList.add("slider-list");

    const movieSliderInner = document.createElement("div");
    movieSliderInner.classList.add("slider-inner");
    
    movieTitle.appendChild(movieTitleLarge);
    movieSection.appendChild(movieTitle);
    movieSliderList.appendChild(movieSliderInner);
    movieSection.appendChild(movieSliderList);
    movieContenedor.appendChild(movieSection);

    
    createMovies(movies, movieSliderInner);
  } catch (error) {
    console.log(error);
  }
};
