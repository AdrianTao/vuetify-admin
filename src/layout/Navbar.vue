<template>
  <v-app-bar
    app
    clipped-left
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title>Vuetify Admin</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: null
    }
  }
}
</script>

<style>

</style>
