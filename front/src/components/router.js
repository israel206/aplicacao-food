import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home/Home'
import VueRouter from 'vue-router';



Vue.use(Router)


export default new Router({
   mode:'history',
   routes: [
       {path: '/', 
       component: Home}
   ] 
})

const router = new VueRouter({
    mode: 'history',
    routes: routes

})

export default router