const movieIdLocalStorage = 'Id de la pelicula';
import imgUrl from '../assets/star.png'; 

export function createMovies(movies, container) {
  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-card");

    const movieFigure = document.createElement("figure");
    movieFigure.classList.add("poster-box");
    movieFigure.classList.add("card-banner");

    const movieImg = document.createElement("img");
    movieImg.classList.add("img-cover");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );

    // Titulo
    const titleMovie = document.createElement("h4");
    titleMovie.classList.add("title");
    titleMovie.textContent = `${movie.title}`;

    // Puntuacion de Pelicula y year
    const starContainer = document.createElement("div");
    starContainer.classList.add("meta-list");

    const starItem = document.createElement("div");
    starItem.classList.add("meta-item");

    const starImg = document.createElement("img");
    starImg.setAttribute("alt", "rating");
    starImg.setAttribute("loading", "lazy");
    starImg.setAttribute("src", imgUrl);

    starImg.width = 24;
    starImg.height = 24;

    const starRating = document.createElement("span");
    starRating.classList.add("span");
    starRating.textContent = `${movie.vote_average}`;

    const yearContainer = document.createElement("div");
    yearContainer.classList.add("card-badge");
    yearContainer.textContent = `${movie.release_date}`;

    const linkCardBtn = document.createElement("a");
    linkCardBtn.classList.add("card-btn");
    linkCardBtn.setAttribute("href", "/src/movie_details/movie-details.html");
    linkCardBtn.setAttribute("title", movie.title);
    linkCardBtn.setAttribute("id", movie.id);

    linkCardBtn.addEventListener("click", () => {
      const movieId = `${movie.id}`;
      localStorage.setItem(movieIdLocalStorage, movieId);
    });

    movieFigure.appendChild(movieImg);
    movieContainer.appendChild(movieFigure);
    movieContainer.appendChild(titleMovie);
    starContainer.appendChild(starItem);
    movieContainer.appendChild(starContainer);
    starItem.appendChild(starImg);
    starItem.appendChild(starRating);
    starContainer.appendChild(yearContainer);
    movieContainer.appendChild(linkCardBtn);
    container.appendChild(movieContainer);
  });
}

export default movieIdLocalStorage;
