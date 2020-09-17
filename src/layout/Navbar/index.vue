<template>
  <v-app-bar
    app
    clipped-left
    height="56"
  >
    <v-app-bar-nav-icon @click.stop="toggleSideBar" />
    <v-toolbar-title>Vuetify Admin</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      drawer: null
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
