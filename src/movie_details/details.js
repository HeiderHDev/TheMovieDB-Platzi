import "../searchbox/searchbox.js";
import "../../style.css";
import {
  getCategoriesPreview,
  toggleSidebar,
} from "../mainPage/categories-Sidebar";
import { search } from "../searchbox/search.js";
import movieIdLocalStorage from "../mainPage/utils.js";

getCategoriesPreview();
toggleSidebar();
search();

const IdPelicula = localStorage.getItem(movieIdLocalStorage);
console.log(IdPelicula);

const API_KEY = import.meta.env.VITE_API_KEY;

export const getDetailsMovie = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${IdPelicula}?api_key=${API_KEY}&language=es-CO&append_to_response=casts,videos,images,releases`
    );
    const data = await res.json();
    console.log({data});



  } catch (error){
    console.error(error);
  }
};

console.log('Hola');
getDetailsMovie();