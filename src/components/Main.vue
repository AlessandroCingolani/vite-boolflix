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
    <CardContainer v-if="store.movie.length > 0" title="Film" type="movie"/>
    <CardContainer v-if="store.tv.length > 0" title="Series" type="tv"/>
  </main>
</template>



<style lang="scss" scoped>

</style>