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
    },

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
          <h6>Titolo :	{{ cardObj.title || cardObj.name }}</h6>
         
          <h6>Titolo originale:	{{ cardObj.original_title || cardObj.original_name }}</h6>
          
          <!-- imposto con includes flag inglese o ita -->
          <img class="flag" v-if="cardObj.original_language.includes('en')" src="/public/img/en.png" alt="en">
          <img class="flag" v-if="cardObj.original_language.includes('it')" src="/public/img/it.png" alt="it">
          <p> {{ checkLanguage(cardObj) }}</p>
          
          <span>
            Voto:
            <!-- for n ripetuto 5 volte secondo il calcolo della funzione bindo classe stella piena fino al rating minore uguale senno la metto vuota -->
            <i v-for="n in 5" :key="n" 
            :class="{'fa-solid fa-star': n <= calcRating(cardObj.vote_average), 'fa-regular fa-star': n > calcRating(cardObj.vote_average)}">
            </i>  
          </span>
        </div>
  
        <div class="overview">Overview: {{ cardObj.overview }}</div>
      </div>
      
    </div> 
  </div>
</template>



<style lang="scss" scoped>



  .col-3 {
    padding: 10px;
    .card{
    height: 100%;
    position: relative;
    overflow: hidden;
    .poster{
      img{
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
      right: 0;
      left: 0;
      color: white;
      background-color: rgba(0, 0, 0, 0.897);
      padding: 16px;
      
  
      &:hover{
        opacity: 1;
      }
      
      .flag  {
        width: 30px;
      }
     
      .overview {
        height: 50%;
        overflow-y: auto;
      }
    }
  }
  }
  

</style>
