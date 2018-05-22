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
      <v-btn @click="signIn">Sign In</v-btn>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase'

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
    signIn () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log('we are in')
          },
          (err) => {
            this.error = err.message
            console.log('error', err)
          }
        )
    }
  }
}
</script>
