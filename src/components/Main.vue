<script>
import CardContainer from './partials/CardContainer.vue';
export default {
  name:'Main',
  components:{
    CardContainer
  }
}
</script>


<template>
  <main>
    <CardContainer/>
  </main>
</template>



<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

main {
  background-color: $background-main;
}
</style>