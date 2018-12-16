import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';
import Home from '@/components/Home'
import Register from '@/components/forms/Register'
import Login from '@/components/forms/Login'
import AdminHome from '@/components/administration/AdminHome'
import AdminUsers from '@/components/administration/AdminUsers'

Vue.use(Router);

//Función que se utilizará para unas rutas determinadas (para que si está logado, 
// se redirija, pq no tendría sentido que accediera). 
//Se llamará a esta función en el beforeEnter de la ruta.
//Sirve para que algunas rutas "se comporten" de una forma determinada...
const beforeEnter = (to, from, next) => {
  if (store.state.authModule.logged) {
    next({path: '/'});
  } else {
    next();
  }
};

const router = new Router({
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
      },
      beforeEnter: (to, from, next) => beforeEnter(to, from, next)
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        Auth: false, title: 'Login'
      },
      beforeEnter: (to, from, next) => beforeEnter(to, from, next)
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminHome,
      meta: { Auth: true, title: 'Administración', role: 'admin' },
      children: [
        {
          path: 'users',
          component: AdminUsers,
          meta: { title: 'Adminstrar Usuarios' },
        }
      ]
    },
  ]
})

//Se llamará en todas las rutas, comprobará si debe estar o no logado (según la propiedad meta
//de la ruta) y según eso lo manda a login o al inicio... 
//Esta es llamada antes que el beforeEnter de la configuración de la ruta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta.Auth && !store.state.authModule.logged && store.state.loaded) {
    next({path: '/login'});
  } else {
    if (to.meta.role) {
      if (store.state.loaded && (to.meta.role !== store.state.authModule.role)) {
        next({path: '/'});
        return;
      }
    }
    next();
  }
});

export default router;
