// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(Vuetify)
Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyAqNs49-rjr7lfCqNYazeDfds-okGqZzSo',
  authDomain: 'teamsherpaco.firebaseapp.com',
  databaseURL: 'https://teamsherpaco.firebaseio.com',
  projectId: 'teamsherpaco',
  storageBucket: 'teamsherpaco.appspot.com',
  messagingSenderId: '1061983642088'
})

var fs = firebase.firestore()
fs.settings({ timestampsInSnapshots: true })

export const firestore = fs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export const $router = router
