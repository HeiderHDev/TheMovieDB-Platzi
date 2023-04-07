import "../searchbox/searchbox.js";
import "../../style.css";
import categoria, {
  getCategoriesPreview,
  toggleSidebar,
} from "../mainPage/categories-Sidebar.js";
import { search } from "../searchbox/search.js";
import { createMovies } from "../mainPage/utils.js";

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
  createMovies(categoriasId, categoryMovieCard);

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
