import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, About, Contact, DefaultView } from '../views';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: DefaultView,
    props: {
      pageName: "LOGIN"
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: DefaultView,
    props: {
      pageName: "REGISTER"
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
