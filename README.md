# Proyecto del Curso de API REST con Javascript: Ejemplos con APIs reales.
## Consumiendo la API de TMDB para una página web de películas

Este proyecto utiliza Vite como empaquetador y consume la API de The Movie Database (TMDB) para mostrar información sobre películas en una página web.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias: `npm install`


## Uso

1. Obtén una clave de API gratuita de TMDB en https://www.themoviedb.org/.
2. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API de TMDB de la siguiente manera:
```javascript
  VITE_TMDB_API_KEY = tu clave de API de TMDB>
```

3. Ejecuta el siguiente comando para iniciar el servidor de desarrollo: `npm run dev`


4. Abre un navegador web y navega a `http://localhost:3000` para ver la página web de películas.

## Características

- Muestra una lista de las películas populares del momento.
- Permite buscar películas por título.
- Al hacer clic en una película, se muestra su información detallada, como la sinopsis, el reparto, el género y la calificación de la audiencia.
- Utiliza la paginación para mostrar más resultados de búsqueda o películas relacionadas.
- Totalmente responsive y compatible con dispositivos móviles.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- Vite
- TMDB API

## Contribución

Si quieres contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una rama nueva con tu contribución: `git checkout -b mi-contribucion`
3. Haz tus cambios y realiza un commit con un mensaje claro y conciso.
4. Envía un pull request con tus cambios.
5. ¡Gracias por contribuir!





