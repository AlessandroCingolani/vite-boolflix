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
            query:store.search
          }
        })
        .then(result =>{
          store.listFilm = result.data.results
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
  <Header @research="getFilm" />
  <Main/>
</template>


<style lang="scss">
  @use './scss/main.scss';
</style>
