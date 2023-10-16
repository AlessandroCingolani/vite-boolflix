<script>
import { store } from '../../data/store'; 
export default {
  name:'Card',
  props:{
    cardObj: Object
  },
  data(){
    return{
      store
    }
  },
  methods:{
    checkLanguage(value){
      if (value.original_language != 'en' && value.original_language != 'it'){
        return value.original_language
      }
    },
    calcRating(rating){
      const stars = Math.floor((rating - 1) / 2) + 1;

      return stars;
    }
  }
}
</script>


<template>
  <div class="col-3">
    <div class="card">
      <div class="poster">
        <img v-if="cardObj.poster_path" :src="`${store.imgPath}${cardObj.poster_path}`" alt="">
        <img v-else src="/public/img/image-not-found-scaled.png" alt="image-not-found">
      </div>
      <div class="hover-box d-flex flex-column justify-content-evenly ">

        <div class="top-hidden">
          <h6 v-if="cardObj.title">Titolo :	{{ cardObj.title }}</h6>
          <h6 v-else>Titolo	:	{{ cardObj.name }}</h6>

          <h6 v-if="cardObj.original_title">Titolo originale:	{{ cardObj.original_title }}</h6>
          <h6 v-else>Titolo originale	:	{{ cardObj.original_name }}</h6>

          <img v-if="cardObj.original_language.includes('en')" src="/public/img/en.png" alt="en">
          <img v-if="cardObj.original_language.includes('it')" src="/public/img/it.png" alt="it">
          <p> {{ checkLanguage(cardObj) }}</p>
          
          <span>
            Voto:
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            {{ calcRating(cardObj.vote_average)  }}
          </span>

        </div>
  
        <div class="overview">Overview: {{ cardObj.overview }}</div>
      </div>
      
    </div> 
  </div>
</template>



<style lang="scss" scoped>


img {
    width: 30px;
  }
  .card{
  height: 100%;
  position: relative;
  overflow: hidden;

  .poster{
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .hover-box{
    position: absolute;
    cursor: pointer;
    opacity: 0;
    top: 0;
    bottom:0;
    color: white;
    background-color: rgba(0, 0, 0, 0.897);
    padding: 16px;
    

    &:hover{
      opacity: 1;
    }

   
    .overview {
      height: 50%;
      overflow-y: auto;
    }
  }
}
  

</style>
