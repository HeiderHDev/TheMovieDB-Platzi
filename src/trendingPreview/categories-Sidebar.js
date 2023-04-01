
'use strict';


export const getCategoriesPreview = async () =>{ 
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=es`);
    const data = await res.json();

    const categories = data.genres;
    console.log({data, categories});

    const categoriesPreviewMoviesContainer = document.querySelector('.sidebar .sidebar-inner');

    categories.forEach(category => {
        
        const categoriesMoviesConteiner = document.createElement('div');
        categoriesMoviesConteiner.classList.add('sidebar-list');

        const categoriesMovies = document.createElement('a');
        categoriesMovies.classList.add('sidebar-link');
        categoriesMovies.setAttribute(
            'href',
             '/src/movie_list/movie-list.html'
            );
        categoriesMovies.setAttribute('menu-close', '');
        categoriesMovies.textContent = `${category.name}`;
        
        categoriesMoviesConteiner.appendChild(categoriesMovies);
        categoriesPreviewMoviesContainer.appendChild(categoriesMoviesConteiner);

    });

}


const addEventonElements = (elementos, TipodeEvento, callback) =>{
    for(const elem of elementos){
        elem.addEventListener(TipodeEvento, callback);
    }
}

export const toggleSidebar = (sidebar) =>{
    const sidebarBtn = document.querySelector('[menu-btn]');
    const sidebarTogglers = document.querySelectorAll('[menu-toggler]');
    const sidebarClose = document.querySelectorAll('[menu-close]');
    const overlay = document.querySelector('[overlay]');


    addEventonElements(sidebarTogglers, 'click', ()=>{
        sidebar.classList.toggle('active');
        sidebarBtn.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    addEventonElements(sidebarClose, 'click', ()=>{
        sidebar.classList.remove('active');
        sidebarBtn.classList.remove('active');
        overlay.classList.remove('active');
    });
}

