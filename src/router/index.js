import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/forms/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        Auth: false, title: 'Inicio' //En el futuro se utilizarán estos datos extras..
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta:{
        Auth: false, title: 'Registro' //En el futuro se utilizarán estos datos extras..
      }
    }
  ]
})
