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
      <v-btn @click="signUp">Sign Up</v-btn>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log('User has been created')
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
