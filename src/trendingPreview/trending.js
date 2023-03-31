

export const getTrendingMoviesPreview = async () => {
    const res = await fetch(`https://api.themoviedb.org/3//trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await res.json();

    const movies = data.results;
    console.log({data, movies});

    const trendingPreviewMoviesContainer = document.querySelector('.movie-list .slider-list .slider-inner');

    movies.forEach(movie => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-card');

        const movieFigure = document.createElement('figure');
        movieFigure.classList.add('poster-box');
        movieFigure.classList.add('card-banner');


        const movieImg = document.createElement('img');
        movieImg.classList.add('img-cover');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300' + movie.poster_path
            );

        

        movieFigure.appendChild(movieImg);
        movieContainer.appendChild(movieFigure, titleMovie);  
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });

    // movies.forEach(moviedata =>{

    //     const movieContainer = document.createElement('div');
    //     movieContainer.classList.add('movie-card');

    //     const titleMovie = document.createElement('h4');
    //     titleMovie.classList.add('title');
    //     titleMovie.innerContent = moviedata.title;

    //     movieContainer.appendChild(titleMovie);
    //     trendingPreviewMoviesContainer.appendChild(movieContainer);

    // });

}
