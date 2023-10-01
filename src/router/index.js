import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AboutMe from '@/components/AboutMe'
import PortfolioPage from '@/components/PortfolioPage'
import MyBlogs  from '@/components/MyBlogs'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage, 
    },
    {
        path: '/AboutMe',
        name: 'AboutMe',
        component: AboutMe,
    },
    {
        path: '/PortfolioPage',
        name: 'PortfolioPage',
        component: PortfolioPage,
    },
    {
        path: '/MyBlogs',
        name: 'MyBlogs',
        component: MyBlogs,
    },

]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
