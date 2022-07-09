import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
    {
        name:'home',
        path:'/',
        component: Home
    },
    {
        name:'hello',
        path:'/Hello',
        component : HelloWorld
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
 })

 export default router
