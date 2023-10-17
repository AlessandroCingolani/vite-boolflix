import { reactive } from 'vue';

export const store = reactive({
  apiUrl:'https://api.themoviedb.org/3/search/',
  api_key:'70e1fcb24d9cf905714f0cb390e8861a',
  language:'it-IT',
  imgPath:'http://image.tmdb.org/t/p/w342/',
  search: '',
  option:'',
  movie:[],
  tv:[]
})