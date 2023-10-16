import { reactive } from 'vue';

export const store = reactive({
  apiUrl:'https://api.themoviedb.org',
  api_key:'api_key=70e1fcb24d9cf905714f0cb390e8861a',
  searchFilm: null
})