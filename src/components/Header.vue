<script>
import { store } from '../data/store'
import SearchBar from './partials/SearchBar.vue';
export default {
  name:'Header',
  components:{
    SearchBar
  },
  data(){
    return{
      store
    }
  }
}
</script>


<template>
  <header class="d-flex align-items-center justify-content-between " >
    <img src="/public/img/logo-boolflix.png" alt="">

    <div class="research d-flex">
      <SearchBar @keyup.enter="$emit('research')"/>
      <select 
      @change="$emit('research')"
      v-model="store.option"
      class="form-select ms-3 me-3 ">
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="tv">Series</option>
      </select>

    </div>
  </header>
</template>



<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

  header{
    width: 100%;
    height: 60px;
    padding-left: 20px;
    background-color: $background-header;
    img {
      width: 100px;
      height: 24px;
      margin-right: 10px;
    }
    .form-select {
    width: 100px;
  }
  }
</style>
