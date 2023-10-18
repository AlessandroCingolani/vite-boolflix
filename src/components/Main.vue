<script>
import { store } from '../data/store';
import CardContainer from './partials/CardContainer.vue';
export default {
  name:'Main',
  components:{
    CardContainer
  },
  data(){
    return{
      store
    }
  }
}
</script>


<template>
  <main>
    <div v-if="store.movie.length > 0 || store.tv.length > 0">
      <CardContainer v-if="store.movie.length > 0" title="Film" type="movie"/>
      <CardContainer v-if="store.tv.length > 0" title="Series" type="tv"/>
    </div>

    <div v-else>
      <p class="text-center" v-if="store.noResult">Nessun risultato nella ricerca</p>
      <CardContainer  title="Rated Film" type="trendMovies"/>
      <CardContainer  title="Rated Series" type="trendSeries"/>
    </div>
  </main>
</template>



<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;
  p {
    font-size: 2rem;
    color: $logo-color;
  }
</style>