<template>
    <div class='container'>

    <div  id="appliances">
     
        <div class='product' v-for="product in jewelerys" :key="product.id"  >
            <img :src="product.image" v-on:click="productDetails(product)">
            <h5>{{ product.name }}</h5>
            <h6>{{ product.price }}</h6>

            <button @click="addToCart(product)">Add to Cart</button>
        </div>


    </div>
</div>
</template>

<script>



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

    computed:{
        products(){
            return this.$store.state.products
        },

        jewelerys(){
            return this.$store.getters.jewelerys
        }
    },

}
</script>

<style scoped>

</style>