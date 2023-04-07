import './src/searchbox/searchbox.js'
import './style.css'

import { getCategoriesPreview, toggleSidebar } from './src/mainPage/categories-Sidebar.js';
import { getTrendingMoviesPreview } from './src/mainPage/trending.js';
import { getMoviesPopular } from './src/mainPage/moviesPopular.js';
import { getUpcomingMoviesPreview } from './src/mainPage/UpcomingMovies.js';
import { getTopRatedMoviesPreview } from './src/mainPage/topRatedMovies.js';
import { search } from './src/searchbox/search.js';




getTrendingMoviesPreview();
getCategoriesPreview();
toggleSidebar();
getMoviesPopular();
getUpcomingMoviesPreview();
getTopRatedMoviesPreview();
search();








