// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//firebase
import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from '@/config/firebase'
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(); //db.collections... db.doc.... 


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
