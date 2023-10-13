<template>
        <div id="produtDetails">
          <Cart :volume="volume"  />
        <div class='container detaile' v-if="details" id="flex">
            <div class='details col-lg-6'>
                <img :src="details.image" >
                <div class="med">
                    <button class="add" @click="addToCart(details)" ><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                    <button class='buy' @click="buy()"><i class="fa-solid fa-bolt"></i> Buy</button>
                </div>
               
            </div>

            <div class='details  col-lg-6'>
                <h3>{{ details.name }}</h3>
                <h5><i class="fa-solid fa-indian-rupee-sign"></i>{{ details.price }}</h5>
                <p>{{ details.define }}</p>
            
                <a><i class="fa-solid fa-star">{{ details.rating }}</i></a>
                
                <ul >
                    <li v-for="offer,index  in details.offers" :key="index">{{ offer }}</li>
                </ul>
            </div>
        </div>
        </div>

</template>

<script>


export default{
    name: 'produt-Details',
    data(){
        return{
            details: this.$route.params,

        
        }
    },
    methods:{
        addToCart(payload){
            this.$store.dispatch('addToCart', payload)
        }
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    }
}
</script>

<style scoped>

</style>