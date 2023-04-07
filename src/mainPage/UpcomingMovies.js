import { createMovies } from "./utils";

export const getUpcomingMoviesPreview = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await res.json();

    const movies = data.results;

    const upcomingPreviewMoviesContainer = document.querySelector('#trending-today .slider-list .slider-inner');

    createMovies(movies, upcomingPreviewMoviesContainer);
}
