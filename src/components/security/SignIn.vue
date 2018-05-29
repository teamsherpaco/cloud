<template>
  <div>
    <v-alert :value="error !== ''" type="error">
      {{ error }}
    </v-alert>
    <v-container>
      <v-form>
        <v-text-field
          v-model="email"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          label="Password"
          required
        ></v-text-field>
      </v-form>
      <v-btn @click="doSignIn">Sign In</v-btn>
      <router-link :to="{ name: 'SignUp', params: {} }">Sign Up</router-link>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    ...mapActions({
      signIn: 'signIn'
    }),
    doSignIn () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            this.signIn()
            this.$router.push({ name: 'Dashboard' })
          },
          (err) => {
            this.error = err.message
          }
        )
    }
  }
}
</script>
