<template>
  <div>
    <h1>Dashboard</h1>
    <div v-for="(team, idx) in teams" :key="idx">
      {{ team.name }}
    </div>
  </div>
</template>

<script>
  import { firestore } from '../main'

  export default {
    name: 'Dashboard',
    data () {
      return {
        teams: []
      }
    },
    firestore () {
      return {
        teams: firestore.collection('teams').orderBy('createdAt')
      }
    }
  }
</script>
