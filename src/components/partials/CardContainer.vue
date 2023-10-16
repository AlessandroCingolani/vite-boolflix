<script>
import { store } from '../../data/store';
import Card from './Card.vue';
export default {
  name: "CardContainer",
  components:{
    Card
  },
  data() {
    return {
      store
    }
  },

}
</script>

<template>
  <div class="container">
    <div v-if="store.listFilm.length > 0" class="film">
      <h1>Film</h1>
      <div class="row">
        <Card v-for="card in store.listFilm" :key="card.id" :cardObj="card"/>
      </div>
    </div>
    <div v-if="store.listSeries.length > 0" class="series">
      <h1>Series</h1>
      <div class="row">
        <Card v-for="card in store.listSeries" :key="card.id" :cardObj="card"/>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

 h1 {
  padding-top:10px ;
  color: white;
 }

 .container {
  .row {
    padding-bottom: 20px;
  }
 }

</style>