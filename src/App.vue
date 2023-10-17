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
        this.getApi('movie')
        this.getApi('tv')
      }
  
    },

    mounted(){
    
    },

  }


  </script>
<template>
  <Header @research="startSearch" />
  <Main/>
</template>


<style lang="scss">
  @use './scss/main.scss';
</style>
