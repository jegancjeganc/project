<template>
<div id="flexx">
    <Slide></Slide>
    <div class='container '>
        <div class="pro">
        <flex v-for="product in products" :key="product.id" :product="product" ></flex>
        </div>
    </div>
</div>
</template>

<script>
import flex from './flex.vue';
import Slide from './slide.vue';


    export default{
    name: "MultiWordComponent",
    data() {
        return {
           
        };
    },
    components: { flex, Slide },
    computed:{
        products(){
            return this.$store.state.products
            //s
        }
    },
    created(){
        console.log(this.products)
    }
}
</script>

<style scoped>



</style>