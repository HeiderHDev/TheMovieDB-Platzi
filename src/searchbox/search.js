import { createMovies } from "../mainPage/utils";

const API_KEY = import.meta.env.VITE_API_KEY;

export function search() {
  const searchWrapper = document.querySelector("[search-wrapper]");
  const searchField = document.querySelector("[search-field]");

  const searchResultModal = document.createElement("div");
  searchResultModal.classList.add("search-modal");

  
  document.querySelector("main").appendChild(searchResultModal);

  let searchTimeout;

  searchField.addEventListener("input", function () {
    if (!searchField.value.trim()) {
      searchResultModal.classList.remove("active");
      searchWrapper.classList.remove("searching");
      clearTimeout(searchTimeout);
      return;
    }
    searchWrapper.classList.add("searching");
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(function () {
      const searchMovies = async (query = searchField.value) => {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-CO&query=${query}&page=1&include_adult=false`
          );
          const data = await res.json();
          const buscadorMovies = data.results;
          console.log({ data, buscadorMovies });

          searchWrapper.classList.remove("searching");
          searchResultModal.classList.add("active");
          searchResultModal.innerHTML = "";

          searchResultModal.innerHTML = `

          <p class="label">Resultados para: </p>
          <h1 class="heading">${searchField.value}</h1>
          
          `;

          const searchMovieList = document.createElement('div');
          searchMovieList.classList.add("movie-list");
        
          const searchgridList = document.createElement('div');
          searchgridList.classList.add("grid-list");
        
          searchMovieList.appendChild(searchgridList);
          searchResultModal.appendChild(searchMovieList);

          createMovies(buscadorMovies, searchgridList);

        } catch (error) {
          searchResultModal.innerHTML = 'Algo salió mal';
          console.log(error);
        }
      };
      searchMovies();
    }, 500);
  });
}


