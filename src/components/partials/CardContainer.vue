<script>
import { store } from '../../data/store';
import Card from './Card.vue';
export default {
  name: "CardContainer",
  components:{
    Card
  },
  props:{
    title:String,
    type:String
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
    <h1>{{ title }}</h1>
    <div class="row">
      <Card v-for="card in store[type]" :key="card.id" :cardObj="card"/>
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