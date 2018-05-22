// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(Vuetify)
Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyB0gooyRGUYyZMu4FkvVcd07j4FzW50BHU',
  authDomain: 'henkel-cloud.firebaseapp.com',
  databaseURL: 'https://henkel-cloud.firebaseio.com',
  projectId: 'henkel-cloud',
  storageBucket: 'henkel-cloud.appspot.com',
  messagingSenderId: '969072103158'
})

export const firestore = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
