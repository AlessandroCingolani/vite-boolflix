<script>
import { store } from '../../data/store';

export default {
  name: "SearchBar",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="input-group">
    <input  v-model.trim="store.research" type="text" class="form-control" placeholder="Cerca un Film" >
  </div>
</template>


<style lang="scss" scoped>

  .input-group {
    width: 200px;
  }


</style>