import './style.css'

'use strict';

/**
 * Agregar eventos en multiples elementos
 */

const addEventonElements = (elementos, TipodeEvento, callback) =>{
    for(const elem of elementos){
        elem.addEventListener(TipodeEvento, callback);
    }
}

/**
 * Alternar el cuadro de busqueda en el dispositivo movil || small screen
*/

const searchBox = document.querySelector('[search-box]');
const searchTogglers = document.querySelectorAll('[search-toggler]');

addEventonElements(searchTogglers, 'click', () =>{
    searchBox.classList.toggle('active');
})






