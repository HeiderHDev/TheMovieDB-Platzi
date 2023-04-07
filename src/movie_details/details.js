import "../searchbox/searchbox.js";
import "../../style.css";
import {
  getCategoriesPreview,
  toggleSidebar,
} from "../mainPage/categories-Sidebar";

getCategoriesPreview();
toggleSidebar();



const API_KEY = import.meta.env.VITE_API_KEY;

export const getDetailsMovie = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=es-CO`
    );
    const data = await res.json();
    // const categories = data.genres;
    console.log({data});

  } catch (error){
    console.error(error);
  }
};

console.log('Hola');
