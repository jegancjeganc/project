<template>
    <div id="slide">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
             <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" >
                <div class="carousel-item active" v-for="slide in slides" :key="slide.id" style="height: 30vh;">
                <img :src="slide.image"   class="d-block w-100" alt="...">
                </div>
            
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  </template>
  
  <script>
     export  default{
        name:'slide-img',
        data(){
            return{
                slides:[
                    {
                        id:1,
                        image:'/images/slid.jpg',
                    },
                    {
                        id:3,
                        image:'/images/slide2.jpg',
                    },
                    {
                        id:2,
                        image:'/images/slide3.jpg',
                    },  
                ]
            }
        }
    }
  </script>
  
  <style scoped>

</style>