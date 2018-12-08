// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from '@/config/i18n'
import store from '@/store/'
import Home from '@/components/Home';

require('./config/vuetify'); 

//firebase
import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from '@/config/firebase'
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(); //db.collections... db.doc.... 

const settings = {timestampsInSnapshots: true};
firebase.firestore().settings(settings); // para que no de un pete por configuración de fechas (Date)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App, Home },
  template: '<App/>'
})
