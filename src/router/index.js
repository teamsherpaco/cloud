import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import SignIn from '@/components/security/SignIn'
import SignUp from '@/components/security/SignUp'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp,
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  var options = {}
  let currentUser = firebase.auth().currentUser
  console.log(currentUser)

  if (to.meta.requiresAuth !== false && currentUser === null) {
    options = { name: 'SignIn' }
  }
  next(options)
})

export default router
