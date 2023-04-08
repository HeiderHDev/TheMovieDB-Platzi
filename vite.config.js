import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        movieList: resolve(__dirname, 'src/movie_list/movie-list.html'),
        movieDetails: resolve(__dirname, 'src/movie_details/movie-details.html')
        starImg: resolve(__dirname, '/src/assets/star.png')
      }
    }
  }
})

