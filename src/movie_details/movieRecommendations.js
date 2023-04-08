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

    const topPopularPreviewMoviesContainer = document.querySelector(
      ".slider-list .slider-inner"
    );
    createMovies(movies, topPopularPreviewMoviesContainer);
  } catch (error) {
    console.log(error);
  }
};
