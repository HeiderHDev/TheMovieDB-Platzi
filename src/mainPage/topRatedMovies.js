import { createMovies } from "./utils";

export const getTopRatedMoviesPreview = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await res.json();

    const movies = data.results;
    const topRatedPreviewMoviesContainer = document.querySelector('#top-rated .slider-list .slider-inner');

    createMovies(movies, topRatedPreviewMoviesContainer);
}


