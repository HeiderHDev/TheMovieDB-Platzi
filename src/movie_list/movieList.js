import "../searchbox/searchbox.js";
import "../../style.css";
import categoria, {
  getCategoriesPreview,
  toggleSidebar,
} from "../mainPage/categories-Sidebar.js";
import { search } from "../searchbox/search.js";

getCategoriesPreview();
toggleSidebar();
search();

let currentPage = 1;
let totalPages = 0;

const API_KEY = import.meta.env.VITE_API_KEY;
const categoriaIDLS = localStorage.getItem(categoria.categoriaLocalStorage);
const categoriaNameLS = localStorage.getItem(
  categoria.categoriaNameLocalStorage
);

const heading = document.querySelector('.heading');
heading.textContent = `Peliculas de ${categoriaNameLS}`;

document.title = `${categoriaNameLS} Movies Heider`



export const getMoviesByCategory = async (page) => {
  const res = await fetch(
    `
        https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-CO&sort_by=popularity.desc&page=${page}&with_genres=${categoriaIDLS}`
  );

  // console.log(categoriaId);
  const data = await res.json();
  const categoriasId = data.results;
  // console.log({ data, categoriasId });


  const categoryMovieCard = document.querySelector(".movie-list .grid-list");
  categoriasId.forEach((categorias) => {

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const posterBox = document.createElement("figure");
    posterBox.classList.add("poster-box");
    posterBox.classList.add("card-banner");

    const movieImg = document.createElement("img");
    movieImg.classList.add("img-cover");
    movieImg.setAttribute("alt", categorias.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + categorias.poster_path
    );

    posterBox.appendChild(movieImg);
    movieCard.appendChild(posterBox);

    const titleMovie = document.createElement("h4");
    titleMovie.classList.add("title");
    titleMovie.textContent = `${categorias.title}`;

    movieCard.appendChild(titleMovie);

    const starContainer = document.createElement("div");
    starContainer.classList.add("meta-list");

    const starItem = document.createElement("div");
    starItem.classList.add("meta-item");

    const starImg = document.createElement("img");
    starImg.setAttribute("alt", "rating");
    starImg.setAttribute("loading", "lazy");
    starImg.setAttribute("src", "/src/assets/star.png");
    starImg.width = 24;
    starImg.height = 24;

    const starRating = document.createElement("span");
    starRating.classList.add("span");
    starRating.textContent = `${categorias.vote_average}`;

    starItem.appendChild(starRating);
    starItem.appendChild(starImg);
    starContainer.appendChild(starItem);
    movieCard.appendChild(starContainer);

    const yearContainer = document.createElement("div");
    yearContainer.classList.add("card-badge");
    yearContainer.textContent = `${categorias.release_date}`;

    starContainer.appendChild(yearContainer);

    const linkCardBtn = document.createElement("a");
    linkCardBtn.classList.add("card-btn");
    linkCardBtn.setAttribute("href", "/src/movie_details/movie-details.html");
    linkCardBtn.setAttribute("title", categorias.title);

    movieCard.appendChild(linkCardBtn);

    categoryMovieCard.appendChild(movieCard);
  });

  // Actualizar totalPages tras la carga de la primera página
  if (totalPages === 0) {
    totalPages = data.total_pages;
  }


};



document.querySelector('[load-more]').addEventListener("click", async function(){

  if (currentPage >= totalPages){
    this.style.display = "none";
  }else{
    currentPage++;
    this.classList.add("loading");
    await getMoviesByCategory(currentPage);
    this.classList.remove("loading");
  }

});


// console.log("Hola");
getMoviesByCategory(currentPage);
