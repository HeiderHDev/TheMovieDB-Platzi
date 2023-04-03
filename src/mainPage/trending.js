

export const getTrendingMoviesPreview = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await res.json();

    const movies = data.results;
    // console.log({data, movies});

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

        // Titulo 
        const titleMovie = document.createElement('h4');
        titleMovie.classList.add('title');
        titleMovie.textContent = `${movie.title}`;

        // Puntuacion de Pelicula y year
        const starContainer = document.createElement('div');
        starContainer.classList.add('meta-list');

        const starItem = document.createElement('div');
        starItem.classList.add('meta-item');

        const starImg = document.createElement('img');
        starImg.setAttribute('alt', 'rating');
        starImg.setAttribute('loading', 'lazy');
        starImg.setAttribute(
            'src',
            '/src/assets/star.png'
        )
        starImg.width = 24;
        starImg.height = 24;

        const starRating = document.createElement('span');
        starRating.classList.add('span');
        starRating.textContent = `${movie.vote_average}`;


        const yearContainer = document.createElement('div');
        yearContainer.classList.add('card-badge');
        yearContainer.textContent = `${movie.release_date}`;

        starItem.appendChild(starImg);
        starItem.appendChild(starRating);
        
        movieFigure.appendChild(movieImg);
        movieContainer.appendChild(movieFigure); 
        movieContainer.appendChild(titleMovie);
        movieContainer.appendChild(starItem);
        movieContainer.appendChild(yearContainer);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });

}
