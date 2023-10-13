<template>
  <div class="bg-primary">
    <div class="container">
    <div id="Nav ">
      <nav class="navbar navbar-expand-lg text-light navbar-light ">
          <div class="container-fluid">
              <a class="navbar-brand text-white">Flipkart</a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li class="nav-item ">
                    <router-link exact to="/" class="nav-link"><i class="fa-solid fa-house  text-white"></i></router-link>
                    <!-- navigation to home page use router -->
                  </li>
                  <li class="nav-item dropdown">
                    <div class="dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Filter
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                      <li class="ac "><a class="dropdown-item "  href="#"></a><router-link exact to="/electronics" class="nav-link">Electronics</router-link> </li> <!-- navigation to home page use router -->
                      <li class="ac"><a class="dropdown-item" href="#"> </a><router-link exact to="/jewelery" class="nav-link">jewelery</router-link> </li>
                      <li class="ac"><hr class="dropdown-divider"></li>
                      <li class="ac"><a class="dropdown-item" href="#"></a><router-link exact to="/men" class="nav-link">Men's Clothing</router-link></li>
                      <li class="ac"><a class="dropdown-item" href="#"></a><router-link exact to="/womens" class="nav-link">Women's Clothing</router-link></li>
                      <li class="ac"><hr class="dropdown-divider"></li>
                      <li class="ac"><a class="dropdown-item" href="#"></a><router-link exact to="/appliances" class="nav-link">Appliances</router-link></li>
                      <!-- <li class="ac"><a class="dropdown-item" href="#"></a><router-link exact to="/product" class="nav-link">product</router-link></li> -->
                    </ul>
</div>
                  </li>
                </ul>
                
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">  
                </form>
                
                  <router-link exact to="/cart" class="nav-link">
                        <i class="fa-solid fa-cart-shopping"></i> 
                  </router-link>

              </div>
          </div>
      </nav>
     </div>
    </div>
</div>

</template>

<script>




export default{
    name : 'App',
    data() {
   return{
   }
},
components:{

},
}
</script>

<style scoped>

</style>

