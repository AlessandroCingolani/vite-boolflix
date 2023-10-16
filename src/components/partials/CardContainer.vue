<script>
import { store } from '../../data/store';

export default {
  name: "CardContainer",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="film in store.listFilm" :key="film.id">
        <h3>{{ film.title }}</h3>
        <h4>{{ film.original_title }}</h4> 
        <p>{{ film.original_language }}</p>
        <p>{{ film.vote_average }}</p>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

  .input-group {
    width: 200px;
  }


</style>