import './src/searchbox/searchbox.js'
import './style.css'
import { getTrendingMoviesPreview } from './src/trendingPreview/trending';
import { getCategoriesPreview, toggleSidebar } from './src/trendingPreview/categories-Sidebar.js';



getTrendingMoviesPreview();
getCategoriesPreview();
toggleSidebar();






