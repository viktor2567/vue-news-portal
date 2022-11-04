import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/Views/Home.vue';

Vue.use(VueRouter)

const routes = [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addtitle',
      name: 'AddTitle',
      component: () => import('@/Views/AddTitle.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/Views/Contact.vue')
    },
 
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
