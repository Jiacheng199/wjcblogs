import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/components/UserLogin'
import UserRegister from '@/components/UserRegister'

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
    {
        path: '/register',
        name: 'Register',
        component: UserRegister
    }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
