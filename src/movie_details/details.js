import "../searchbox/searchbox.js";
import "../../style.css";
import {
  getCategoriesPreview,
  toggleSidebar,
} from "../mainPage/categories-Sidebar";
import { search } from "../searchbox/search.js";
import movieIdLocalStorage from "../mainPage/utils.js";
import { getMoviesRecommendations } from "./movieRecommendations.js";

getCategoriesPreview();
toggleSidebar();
search();

const IdPelicula = localStorage.getItem(movieIdLocalStorage);

const API_KEY = import.meta.env.VITE_API_KEY;

const getGenres = function (genreList) {
  return genreList.map((genre) => genre.name).join(", ");
};

const getCasts = function (castsList) {
  const newCastsList = [];

  for (let i = 0, len = castsList.length; i < len && i < 10; i++) {
    const { name } = castsList[i];
    newCastsList.push(name);
  }
  return newCastsList.join(", ");
};

const getDirectors = function (crewList) {
  const directors = crewList.filter(({ job }) => job === "Director");

  const directorList = [];
  for (const { name } of directors) directorList.push(name);
  return directorList.join(", ");
};

const filterVideos = function (videoList) {
  return videoList.filter(
    ({ type, site }) =>
      type === "Trailer" || type === "Teaser" || site === "YouTube"
  );
};

export const getDetailsMovie = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${IdPelicula}?api_key=${API_KEY}&language=es-CO&append_to_response=casts,videos,images,releases`
    );
    const data = await res.json();

    const movieContenedor = document.querySelector("[page-content]");

    const movieDetails = document.createElement("div");
    movieDetails.classList.add("movie-detail");

    movieDetails.innerHTML = `
      <div
        class="backdrop-image"
        style="background-image: url('https://image.tmdb.org/t/p/w1280/${
          data.backdrop_path
        }')"
      ></div>

      <figure class="poster-box movie-poster">
        <img
          src="https://image.tmdb.org/t/p/w1280/${data.poster_path}"
          alt="${data.title} poster"
          class="img-cover"
        />
      </figure>

      <div class="detail-box">
        <div class="detail-content">
          <h1 class="heading">${data.title}</h1>

          <div class="meta-list">
            <div class="meta-item">
              <img
                src="/src/assets/star.png"
                width="20"
                height="20"
                alt="rating"
              />
              <span class="span">${data.vote_average}</span>
            </div>

            <div class="separator"></div>
            <div class="meta-item">${data.runtime} min</div>
            <div class="separator"></div>
            <div class="meta-item">${data.release_date}</div>
            <div class="meta-item card-badge">${
              data.releases.countries[0].certification
            }</div>
          </div>

          <p class="genre">${getGenres(data.genres)}</p>

          <p class="overview">
            ${data.overview}
          </p>
          <ul class="details-list">
            <div class="list-item">
              <p class="list-name">Protagonizado por: </p>
              <p class="listName" id="listName">${getCasts(data.casts.cast)}</p>
            </div>
            <div class="list-item">
              <p class="list-name">Dirigida por:</p>
              <p>${getDirectors(data.casts.crew)}</p>
            </div>
          </ul>
        </div>

        <div class="title-wrapper">
          <h3 class="title-large">Trailers y clips</h3>
        </div>

        <div class="slider-list">
          <div class="slider-inner"></div>
        </div>
      </div>
    `;

    for (const { key, name } of filterVideos(data.videos.results)) {
      const videoCard = document.createElement("div");
      videoCard.classList.add("video-card");

      videoCard.innerHTML = `
      <iframe width="500" height="294" 
      src="https://www.youtube.com/embed/${key}?&theme=dark&color=white&
      rel=0" frameborder="0" allowfullscreen="1" title="${name}"
      class="img-cover" loading="lazy" ></iframe>
      `;

      movieDetails.querySelector(".slider-inner").appendChild(videoCard);
    }

    movieContenedor.appendChild(movieDetails);
  } catch (error) {
    console.error(error);
  }
};

getDetailsMovie();
getMoviesRecommendations();
