import Vue from 'vue'
import App from './App.vue'
import store  from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import routes from './routes'
import VueRouter from 'vue-router';
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import styless from './styless.vue'
import  './assets/sass/styles/common.scss'



Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
const router = new VueRouter({
  routes,
  mode:'history'
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  styless,
  render: h => h(App),
}).$mount('#app')
