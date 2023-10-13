<template>
    <div id="flex">

        <!-- slide bar -->
        <div class='container'>

        <div class='product' >
            <img :src="product.image" v-on:click="productDetails(product)">
             <!-- click the image  see the productDetails  page -->
            <h5>{{ product.name }}</h5>
            <h6>{{ product.price }}</h6>
 
            <div>

            <button class="ho" v-show="!incart" @click="addToCart(product)">Add to Cart</button>
            <button   v-show="incart" @click="remove(product.id)" >remove cart</button>
            </div>
             <!-- click the button add to the cart  -->
            </div>

    </div>
</div>
</template>

<script>
    export default{
    name: "MultiWordComponent",
    props:{
        product: Object
    },
    data() {
        return {
           
        };
    },
    methods: {
        productDetails(payload) {
            this.$router.push({ name: "productDetails", params: payload });
            //dynamically convert to  the produtDetails page use state
        },

        addToCart(payload){
            this.$store.dispatch('addToCart', payload)
            //shopping cart product add to the cart page use state
        },
        remove(payload){
            this.$store.dispatch('remove', payload)
        },
     

    },
    
    computed:{
       
        incart(){
            return this.$store.state.cartItems.some(cartItems => cartItems.id == this.product.id)
        }
    }
}
</script>

<style scoped>


</style>