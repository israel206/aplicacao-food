import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import AdminPages from '@/components/admin/AdminPages'
import Restaurantes from '@/components/Restaurantes'
import Produtos from '@/components/Produtos'


Vue.use (VueRouter)


const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
name: 'AdminPages',
path: '/admin',
component: AdminPages

}, {
    name: 'Restaurantes',
    path: '/restaurantes',
    component: Restaurantes

},

{
    name: 'Produtos',
    path: '/produtos',
    component: Produtos

},



]

export default new VueRouter ({
    mode:'history',
    routes: routes
})

