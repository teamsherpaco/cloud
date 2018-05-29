<template>
  <v-app>
    <navigator />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navigator from './components/core/Navigator'
import AppBar from './components/core/AppBar'

export default {
  name: 'App',
  components: {
    Navigator,
    AppBar
  }
}
</script>
