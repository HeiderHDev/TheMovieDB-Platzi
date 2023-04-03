import './src/searchbox/searchbox.js'
import './style.css'

import { getCategoriesPreview, toggleSidebar } from './src/mainPage/categories-Sidebar.js';
import { getTrendingMoviesPreview } from './src/mainPage/trending.js';
import { getMoviesPopular } from './src/mainPage/moviesPopular.js';




getTrendingMoviesPreview();
getCategoriesPreview();
toggleSidebar();
getMoviesPopular();






