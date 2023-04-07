const API_KEY = import.meta.env.VITE_API_KEY;

const categoriaLocalStorage = 'id de la categoria'
const categoriaNameLocalStorage = 'nombre de la categoria'
export const getCategoriesPreview = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es`
      
    );
    const data = await res.json();
    const categories = data.genres;
    // console.log({ data, categories });

    const categoriesPreviewMoviesContainer =
      document.querySelector("#sidebar-list2");

    categories.forEach((category) => {
      const categoriesMoviesConteiner = document.createElement("div");
      categoriesMoviesConteiner.classList.add("sidebar-list-categories");

      const categoriesMovies = document.createElement("a");
      categoriesMovies.classList.add("sidebar-link");
      categoriesMovies.setAttribute("href", "/src/movie_list/movie-list.html");
      categoriesMovies.setAttribute("menu-close", "");
      categoriesMovies.setAttribute('id', category.id);

      categoriesMovies.addEventListener("click", ()=>{
        
        const categoriaId = `${category.id}`;
        const categoriaName = `${category.name}`;
        localStorage.setItem(categoriaLocalStorage, categoriaId);
        localStorage.setItem(categoriaNameLocalStorage, categoriaName )
        
      });

      categoriesMovies.textContent = `${category.name}`;

      categoriesMoviesConteiner.appendChild(categoriesMovies);
      categoriesPreviewMoviesContainer.appendChild(categoriesMoviesConteiner);
    });
    
  }catch (error) {
    console.error(error);
    }
};

export default{
  categoriaLocalStorage,
  categoriaNameLocalStorage
} 

// export default categoriaNameLocalStorage;

const addEventonElements = (elementos, TipodeEvento, callback) => {
  for (const elem of elementos) {
    elem.addEventListener(TipodeEvento, callback);
  }
};

export const toggleSidebar = () => {
  const sidebarBtn = document.querySelector("[menu-btn]");
  const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
  const sidebarClose = document.querySelectorAll("[menu-close]");
  const overlay = document.querySelector("[overlay]");
  const sidebar = document.querySelector(".sidebar");

  addEventonElements(sidebarTogglers, "click", () => {
    sidebar.classList.toggle("active");
    sidebarBtn.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  addEventonElements(sidebarClose, "click", () => {
    sidebar.classList.remove("active");
    sidebarBtn.classList.remove("active");
    overlay.classList.remove("active");
  });
};
