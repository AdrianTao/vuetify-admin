<template>
  <v-app id="inspire">
    <sidebar />
    <navbar />
    <app-main />
  </v-app>
</template>

<script>
import Sidebar from './Sidebar/'
import Navbar from './Navbar/'
import AppMain from './AppMain'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>

</style>
