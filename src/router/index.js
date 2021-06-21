import Vue from 'vue'
import VueRouter from 'vue-router'
import Clientes from '../views/Clientes'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Clientes',
        component: Clientes
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
