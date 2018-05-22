<template>
  <v-container>
    <v-card v-for="(location, idx) in locations" :key="idx">
      <v-card-media :src="location.image" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ location.name }}</h3>
            <div>Lorem ipsum dolar sit amet.</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" @click="deleteLocation(location.id)">Delete</v-btn>
        </v-card-actions>
  </v-card>
    <v-form @submit="addLocation(name, image)">
      <v-text-field v-model="name" label="Name"></v-text-field>
      <v-text-field v-model="image" label="Image URL"></v-text-field>
      <v-btn type="submit">Add New Location</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { firestore } from '../main'

export default {
  name: 'HelloWorld',
  data () {
    return {
      locations: [],
      name: '',
      image: ''
    }
  },
  firestore () {
    return {
      locations: firestore.collection('locations').orderBy('createdAt')
    }
  },
  methods: {
    addLocation (name, image) {
      const createdAt = new Date()
      firestore.collection('locations').add({ name, image, createdAt })
      this.name = ''
      this.image = ''
    },
    deleteLocation (id) {
      firestore.collection('locations').doc(id).delete()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card {
  margin-bottom: 12px;
}
</style>
