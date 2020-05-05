import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import whoweare from"../views/whoweare.vue"
import service from"../views/service.vue"
import works from"../views/works.vue"
import member from"../views/member.vue"
import contact from"../views/contact.vue"
import contactForm from "../views/contact-form.vue"

Vue.use(VueRouter)

//contactの下層ブランチ
const contactWeb = {template: ""}
const contactIllust = {template: ""}
const contactAppUI = {template: ""}
const contactOtherDev = {template: ""}
const contactPlan = {template: ""}
const contactOtherAbout = {template: ""}
const contactMedia = {template: ""}
const contactOtherAsk = {template: ""}


  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/whoweare',
    name: 'Who we are',
    component: whoweare,
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
  },
  {
    path: '/contact/:id',
    name: 'ContactForm',
    component: contactForm,
    props: true,
    children: [
      {
        path: 'web',
        name: 'contactWeb',
        component: contactWeb
      },{
        path: 'illustration',
        component: contactIllust
      },{
        path: 'appUI',
        component: contactAppUI
      },{
        path: 'otherDev',
        component: contactOtherDev
      },{
        path: 'plan',
        component: contactPlan
      },{
        path: 'otherAbout',
        component: contactOtherAbout
      },{
        path: 'media',
        component: contactMedia
      },{
        path: 'other',
        component: contactOtherAsk
      }
    ]
  }


]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 10 }
      }
    }
  }
})



export default router
