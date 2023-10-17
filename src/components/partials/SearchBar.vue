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
    <input  v-model.trim="store.search" type="text" class="form-control" placeholder="Cerca">
  </div>
</template>


<style lang="scss" scoped>

  .input-group {
    width: 200px;
  }


</style>