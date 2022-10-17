import Vue from 'vue'
import VueRouter from 'vue-router'
import { DefaultView } from '../views';
import About from './about';
import Contact from './contact';
import Home from './home';

Vue.use(VueRouter)

const routes = [
  ...Home,
  ...About,
  ...Contact,
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
