import Vue from 'vue';
import VueRouter from 'vue-router';
import productDetails from './components/productDetails'
import flexx from './components/flexx'
import Cart from './components/Cart'
import jewelery from './components/jewelery'
import men from './components/men'
import electronics from './components/electronics'
import Womens from './components/Womens'
import appliances from './components/appliances'
import product from './components/product'
import home from './components/home'
import ErrorPage from './components/ErrorPage'
Vue.use(VueRouter);
export default
    [
        { path: '/', component: flexx },
        { path: '/product-Details', name:'productDetails',component:productDetails},
        {path: '/cart', name:'cartComponent', component:Cart},
        {path: '/jewelery', name:'jeweleryComponent', component:jewelery},
        {path: '/men', name:'menComponent', component:men},
        {path: '/Womens', name:'WomensComponent', component:Womens},
        {path: '/electronics', name:'electronicsComponent', component:electronics},
        {path: '/appliances', name:'appliancesComponent', component:appliances},
        {path: '/product', name:'productComponent', component:product},
        {path:  '/home' , component:home,
            children:[
              {path: 'jewelery',component:jewelery},
              {path: 'men', component:men},
              {path: 'Womens',  component:Womens},
              {path: 'electronics', component:electronics},
              {path: 'appliances',  component:appliances},
            ]
        },
        {path: '*', name: 'error', component:ErrorPage  }
      ]


// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import men from './components/men'
// import sidenav from '@/components/sidenav.vue' // Import the Sidebar component
// import electronics from './components/electronics'
// import jewelery from './components/jewelery'
// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: men
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component:electronics ,
//     // () => import(/* webpackChunkName: "about" */ electronics)
//   },
//   {
//     path: '/contact',
//     name: 'Contact',
//     component: jewelery,
//     // () => import(/* webpackChunkName: "contact" */ jewelery)
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// // Global route component for the sidebar
// Vue.component('side-nav', sidenav)

// export default router
