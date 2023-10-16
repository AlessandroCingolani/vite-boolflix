<script>
import { store } from '../../data/store';

export default {
  name: "CardContainer",
  data() {
    return {
      store
    }
  },
  methods:{
    checkLanguage(value){
      if (value.original_language != 'en' && value.original_language != 'it'){
        return value.original_language
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="film in store.listFilm" :key="film.id">
        <h3>{{ film.title }}</h3>
        <h4>{{ film.original_title }}</h4> 
        <img v-if="film.original_language.includes('en')" src="/public/img/en.png" alt="en">
        <img v-if="film.original_language.includes('it')" src="/public/img/it.png" alt="it">
        <p> {{ checkLanguage(film) }}</p>
        <p>{{ film.vote_average }}</p>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

  img {
    width: 30px;
  }


</style>