import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Restaurants from './components/Restaurants'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home},
         {path: '/restaurants', component: Restaurants},
    ]
})