<template>
    <div>

    <div class='container' id="appliances">
     
        <div class='product' v-for="product in electronics" :key="product.id"  >
            <img :src="product.image" v-on:click="productDetails(product)">
            <!-- click the image  see the productDetails  page -->
            <h5>{{ product.name }}</h5>
            <h6>{{ product.price }}</h6>
            <!-- <div class="ico"> 
                <i class="fa-solid fa-heart"></i>
            </div> -->
            <button @click="addToCart(product)">Add to Cart</button>
            <!-- click the button add to the cart  -->
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
        //dynamically convert to  the produtDetails page use state
        productDetails(payload) {
            this.$router.push({ name: "productDetails", params: payload });
        },

        //shopping cart product add to the cart page use state
        addToCart(payload){
            this.$store.dispatch('addToCart', payload)
        }

    },

    computed:{
        products(){
            return this.$store.state.products
        },

        electronics(){
            return this.$store.getters.electronics
            // filter the electronics items
        }
    },

}
</script>

<style>

</style>