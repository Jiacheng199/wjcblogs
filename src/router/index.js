import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AboutMe from '@/components/AboutMe'
import PortfolioPage from '@/components/PortfolioPage'
import MyBlogs  from '@/components/MyBlogs'
import BlogDetail from '@/components/BlogDetail'
import AdminLogin from '@/components/admin_pages/AdminLogin'
import AdminPage from '@/components/admin_pages/AdminPage'

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
    {
        path: '/MyBlogs/:id',
        name: 'BlogDetail',
        component: BlogDetail,
    },
    {
        path: '/AdminLogin',
        name: 'AdminLogin',
        component: AdminLogin,
    },
    {
        path: '/AdminPage',
        name: 'AdminPage',
        component: AdminPage,
        meta: {
            requiresAuth: true
        }
    }

]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

//add global navigation guard
router.beforeEach((to, from, next) => {
    console.log(localStorage.getItem('admin'));
    const loggedIn = localStorage.getItem('admin') === "true";
    //check if the route requires auth and the user is not logged in
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/AdminLogin');
    }else{
        //proceed to route if logged in as admin
        next();
    }
}
);



export default router;
