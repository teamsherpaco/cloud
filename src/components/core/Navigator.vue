<template>
  <v-navigation-drawer
    v-model="visibility"
    @input="trackChange"
    fixed
    app
    style="background: #262f3d"
    >
    <v-list>
      <v-list-tile @click="signOutUser">
        <v-list-tile-action>
          <v-icon>power_settings_new</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Sign Out</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Navigator',
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
  methods: {
    ...mapActions([
      'signOut',
      'closeNavigator'
    ]),
    signOutUser () {
      this.closeNavigator()
      this.signOut()
      this.$router.push({name: 'SignIn'})
    },
    trackChange (e) {
      if (this.navigatorVisible === true && e === false) {
        this.closeNavigator()
      }
    }
  },
  computed: {
    ...mapGetters({
      navigatorVisible: 'navigatorVisible'
    }),
    visibility: {
      get () {
        return this.navigatorVisible
      },
      set () {
      }
    }
  }
}
</script>
