import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home';
import about from './about';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    },
    meta: {
      menu: false
    }
  },
  ...home,
  ...about
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
