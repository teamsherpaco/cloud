<template>
  <v-toolbar
    app
    dense
    flat
    v-if="signedIn"
  >
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>TeamSherpa</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppBar',

    data () {
      return {
        drawer: false,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }]
      }
    },
    computed: {
      ...mapGetters({
        signedIn: 'signedIn'
      })
    }
  }
</script>
