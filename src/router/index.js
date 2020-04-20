import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/whoweare',
    name: 'Who we are',
    component: () => import(/* webpackChunkName:"WHOWEARE" */ "../views/whoweare.vue")
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName:"SERVICE" */"../views/service.vue")
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import(/* webpackChunkName:"WORKS" */"../views/works.vue")
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import(/* webpackChunkName:"MEMBER" */"../views/member.vue")
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName:"CONTACT" */"../views/contact.vue")
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
