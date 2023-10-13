<template>
  <div id="ap">
    <Nav></Nav>
    <!-- nav section -->
    <Sidenav></Sidenav>
    <!-- sidenav -->
    <router-view/>
    <!-- routing page -->
  </div>
</template>

<script>


import Nav from './components/Nav.vue'
import Sidenav from './components/Sidenav.vue';


export default {
  name :'App',
  data(){
    return{
      message : true,
    }
  },
  components:{
    Sidenav,
    Nav,

},
created(){
  this.$store.dispatch('getdata')
},
  methods:{
  
    }
  }


</script>

<style>

</style>
