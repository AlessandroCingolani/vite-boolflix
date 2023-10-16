<script>
export default {
  name:'Header'
}
</script>


<template>
  <header class="d-flex align-items-center" >
    <img src="/public/img/logo-boolflix.png" alt="">
  </header>
</template>



<style lang="scss" scoped>
@use '../scss/main' as *;

  header{
    width: 100%;
    height: 60px;
    padding-left: 20px;
    background-color: white;
    img {
      width: 70px;
      height: 24px;
      margin-right: 10px;
    }
  }
</style>
