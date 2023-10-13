<template>
    <div >
        <Slide></Slide>
    <div class='container' id="flex">
     
        <div class='product' v-for="product in jewelerys" :key="product.id"  >
            <img :src="product.image" v-on:click="productDetails(product)">
            <h5>{{ product.name }}</h5>
        <font-awesome-icon icon="user-secret"/>
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
import Slide from './slide.vue';


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
    components: { Slide },
    computed:{
        products(){
            return this.$store.state.products
        },

        Oters(){
            return this.$store.getters.jewelerys
        }
    },

}
</script>

<style scoped>

</style>