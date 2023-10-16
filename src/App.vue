  <script>
  import { store } from './data/store';
  import axios from 'axios';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';

  export default {
    name:'App',
    components:{
      Header,
      Main
    },
    data(){
      return {
        store
      }
    },
    methods:{
      getFilm(){
        axios.get(`${store.apiUrl}/3/search/movie?${store.api_key}`,{
          params:{
            query:store.searchFilm
          }
        })
        .then(result =>{
          store.searchFilm = result.data.results
          console.log(store.searchFilm);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getFilm()
    }
  }

  </script>
<template>
  <Header @searchFilm="getFilm" />
  <Main/>
</template>


<style lang="scss">
  @use './scss/main.scss';
</style>
