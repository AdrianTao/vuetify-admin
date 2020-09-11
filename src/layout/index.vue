<template>
  <v-app id="inspire">
    <sidebar />
    <navbar />
  </v-app>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style lang="scss" scoped>

</style>
