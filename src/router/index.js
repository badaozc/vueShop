import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import LoginTest from '../components/Logintest'
import Home from '../components/home'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        component: Login
    }, {
        path: '/loginTest',
        component: LoginTest
    },
    {
        path: '/home',
        component: Home
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next();
    const tokenstr = window.sessionStorage.getItem('token')
    if (!tokenstr) return next('/login')
})

export default router