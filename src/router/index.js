import { createRouter, createWebHistory } from 'vue-router'
import Body from './../components/Body.vue'
import Calculate from '../components/Calculate.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Body,
    },
    {
        path: '/calculate',
        name: 'Calculate',
        component: Calculate,
    }
]

const router = createRouter({history: createWebHistory(), routes})
export default router