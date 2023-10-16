<script>
import SearchBar from './partials/SearchBar.vue';
export default {
  name:'Header',
  components:{
    SearchBar
  }
}
</script>


<template>
  <header class="d-flex align-items-center justify-content-between " >
    <img src="/public/img/logo-boolflix.png" alt="">
    <SearchBar @keyup.enter="$emit('searchFilm')"/>
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
  }
</style>
