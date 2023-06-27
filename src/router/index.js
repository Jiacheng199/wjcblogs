import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/components/UserLogin'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: UserLogin,
    },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
