<template>
    <div class='container' >
        <!-- <Slide></Slide> -->
    <div id="appliances">
     
        <div class='product' v-for="product in Womens" :key="product.id"  >
            <img :src="product.image" v-on:click="productDetails(product)">
            <h5>{{ product.name }}</h5>
            <h6>{{ product.price }}</h6>
            <!-- <div class="ico"> 
                <i class="fa-solid fa-heart"></i>
            </div> -->
            <button @click="addToCart(product)">Add to Cart</button>
        </div>


    </div>
</div>
</template>

<script>
// import Slide from './slide.vue';


    export default{
    name: "MultiWordComponent",
    data() {
        return {

        };
    },
    methods: {
        productDetails(payload) {
            this.$router.push({ name: "productDetails", params: payload });
        },

        addToCart(payload){
            this.$store.dispatch('addToCart', payload)
        }

    },
    // components: { Slide },
    computed:{
        products(){
            return this.$store.state.products
        },

        Womens(){
            return this.$store.getters.Womens
        }
    },

}
</script>

<style>

</style>