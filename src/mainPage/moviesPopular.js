const API_KEY = import.meta.env.VITE_API_KEY;
const movieIdLocalStorage = 'Id de la pelicula';
export const getMoviesPopular = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es&page=1`
  );
  const data = await res.json();
  const moviesPopular = data.results;

  const getMoviePopularPreview = document.querySelector(
    ".slider-control .control-inner"
  );

  moviesPopular.forEach((moviePopular, index) => {
    const posterBox = document.createElement("button");
    posterBox.classList.add("poster-box");
    posterBox.classList.add("slider-item");
    if (index === 0) posterBox.classList.add("active");

    const imgCoverBtn = document.createElement("img");
    imgCoverBtn.classList.add("img-cover");
    imgCoverBtn.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w300${moviePopular.poster_path}`
    );
    imgCoverBtn.setAttribute("alt", moviePopular.title);
    imgCoverBtn.setAttribute("loading", "lazy");
    imgCoverBtn.setAttribute("draggable", "false");

    posterBox.appendChild(imgCoverBtn);
    getMoviePopularPreview.appendChild(posterBox);

    posterBox.addEventListener("click", () => {
    //   console.log(moviePopular);

      const getMoviesPopularBanner = document.querySelector(
        ".banner .banner-slider"
      );
      getMoviesPopularBanner.innerHTML = "";

      const sliderItem = document.createElement("div");
      sliderItem.classList.add("slider-item");
      sliderItem.classList.add("active");

      const imgCoverMovie = document.createElement("img");
      imgCoverMovie.classList.add("img-cover");
      imgCoverMovie.setAttribute("alt", moviePopular.title);
      imgCoverMovie.setAttribute("loading", "lazy");
      imgCoverMovie.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w1280${moviePopular.backdrop_path}`
      );

      const bannerContentMovies = document.createElement("div");
      bannerContentMovies.classList.add("banner-content");

      const headingTitle = document.createElement("h2");
      headingTitle.classList.add("heading");
      headingTitle.textContent = moviePopular.title;

      bannerContentMovies.appendChild(headingTitle);

      const yearAndStartsMovie = document.createElement("div");
      yearAndStartsMovie.classList.add("meta-list");

      const yearMoviePreview = document.createElement("div");
      yearMoviePreview.classList.add("meta-item");
      yearMoviePreview.textContent = moviePopular.release_date;

      const starsMoviePreview = document.createElement("div");
      starsMoviePreview.classList.add("meta-item");
      starsMoviePreview.classList.add("card-badge");
      starsMoviePreview.textContent = moviePopular.vote_average;

      yearAndStartsMovie.appendChild(yearMoviePreview);
      yearAndStartsMovie.appendChild(starsMoviePreview);
      bannerContentMovies.appendChild(yearAndStartsMovie);

      const genreMovie = document.createElement("p");
      genreMovie.classList.add("genre");
      fetch(
        `https://api.themoviedb.org/3/movie/${moviePopular.id}?api_key=${API_KEY}&language=es`
      )
        .then((response) => response.json())
        .then((data) => {
          // obtener el género de la película
          const genres = data.genres.map(genre => genre.name);
          const genreString = genres.join(', ');

          // actualizar el elemento HTML con el género de la película
          genreMovie.textContent = `Género: ${genreString}`;
        })
        .catch((error) => console.error(error));
 
      bannerContentMovies.appendChild(genreMovie);

      const overviewMovie = document.createElement("p");
      overviewMovie.classList.add("banner-text");
      overviewMovie.textContent = moviePopular.overview;

      bannerContentMovies.appendChild(overviewMovie);

      const btnMovieReprod = document.createElement('a');
      btnMovieReprod.classList.add('btn');
      btnMovieReprod.setAttribute('href', '/src/movie_details/movie-details.html');
      btnMovieReprod.addEventListener("click", () => {
        const movieId = `${moviePopular.id}`;
        localStorage.setItem(movieIdLocalStorage, movieId);
      });

      const imgMovieReprod = document.createElement('img');
      imgMovieReprod.setAttribute('src', '/src/assets/play_circle.png');
      imgMovieReprod.setAttribute('aria-hidden', 'true');
      imgMovieReprod.setAttribute('alt', 'play circle');
      imgMovieReprod.width = 24;
      imgMovieReprod.height = 24;

      const spanMovieReprod = document.createElement('span');
      spanMovieReprod.classList.add('span');
      spanMovieReprod.textContent = 'Reproducir ahora';

      btnMovieReprod.appendChild(imgMovieReprod);
      btnMovieReprod.appendChild(spanMovieReprod);

      bannerContentMovies.appendChild(btnMovieReprod);


      sliderItem.appendChild(imgCoverMovie);
      sliderItem.appendChild(bannerContentMovies);
      getMoviesPopularBanner.appendChild(sliderItem);
    });
  });
};

export default movieIdLocalStorage;