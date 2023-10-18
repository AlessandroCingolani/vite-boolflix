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
      getApi(type){
        axios.get(store.apiUrl + type,{
          params:{
            api_key:store.api_key,
            query:store.search,
            language:store.language
          }
        })
        .then(result =>{
          store[type] = result.data.results
        })
        .catch(error => {
          console.log(error);
        })
      },
      startSearch(){
        store.noResult = false
        if(store.option === 'movie'){
          store.tv = []
          this.getApi('movie')
          if(store.search.length > 0 && store.movie.length == 0 ){
            store.noResult = true
          }
        }else if (store.option === 'tv'){
          store.movie = []
          this.getApi('tv')
          if(store.search.length > 0 && store.tv.length == 0 ){
            store.noResult = true
          }
        }else{
          store.movie = []
          store.tv = []
          this.getApi('movie')
          this.getApi('tv')
          if(store.search.length > 0 && store.tv.length == 0 && store.movie.length == 0 ){
            store.noResult = true
          }
        }
      },

      getTrending(type){
        axios.get(store.apiTrend+type+'/week',{
          params:{
            
            api_key:store.api_key,
            language:store.language
          }
        })
        .then(res =>{
          if (type === 'movie'){
            store.trendMovies = res.data.results
          }else {
            store.trendSeries = res.data.results
          }
        })
        .catch(error => {
          console.log(error);
        })
      },
  
    },

    mounted(){
      this.getTrending('movie')
      this.getTrending('tv')

    },

  }


  </script>
<template>
  <Header @research="startSearch"/>
  <Main/>
</template>


<style lang="scss">
  @use './scss/main.scss';
</style>
