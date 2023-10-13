<template>
    <div class="cart">
        <div class='container'  v-if="cartItems.length != 0">
        <div class='row ca' v-for="cartItem,index in cartItems" :key="cartItem.id">
            <div class="col-lg-4">
                <img :src="cartItem.image" >
                
            </div>

            <div class='col-lg-5'>
                <h3>{{ cartItem.name }}</h3>
                <h5><i class="fa-solid fa-indian-rupee-sign"></i>{{ cartItem.price }}</h5>
                <p>{{ cartItem.define }}</p>
            </div>
            <div class="col-lg-3">
                <button class='bt' @click="remove(index)">remove cart</button>
            </div>
            
        </div>
        
    </div>
</div>
</template>

<script>

export default {
    name:'cartComponent',
    data(){
        return{

        }
    },
    methods:{
        remove(index){
        this.cartItems.splice(index,1);
        },
        
    },
    computed:{
        cartItems(){
            return this.$store.state.cartItems
        }
    }
}   
</script>


<style scoped>
img{
    width: 50%;
    margin :10px 0px;
}
.ca{
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    box-shadow: 0 0 10px #ccc;
    border-radius: 10px
}
.bt{
    height: 30px;
    width: 100px;
    background-color: #ffa500de;
    border: none;
    border-radius: 3px;
    color: white;
}


</style>