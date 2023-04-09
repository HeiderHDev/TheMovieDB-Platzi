import { createMovies } from "./utils";


export const getTrendingMoviesPreview = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&language=es-CO`);
    const data = await res.json();
    const movies = data.results;
    // console.log({data, movies});

    const trendingPreviewMoviesContainer = document.querySelector('.movie-list .slider-list .slider-inner');

    createMovies(movies, trendingPreviewMoviesContainer);


}
