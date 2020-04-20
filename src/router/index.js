import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import whoweare from"../views/whoweare.vue"
import service from"../views/service.vue"
import works from"../views/works.vue"
import member from"../views/member.vue"
import contact from"../views/contact.vue"

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
    component: whoweare
  },
  {
    path: '/service',
    name: 'Service',
    component: service
  },
  {
    path: '/works',
    name: 'Works',
    component:works
  },
  {
    path: '/member',
    name: 'Member',
    component: member
  },
  {
    path: '/contact',
    name: 'Contact',
    component:contact
  }


]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
