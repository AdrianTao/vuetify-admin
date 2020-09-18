<template>
  <v-navigation-drawer
    :mini-variant="drawer"
    app
    clipped
  >
    <v-list nav dense>
      <sidebar-item
        v-for="route in permission_routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),

    drawer() {
      return this.sidebar.opened
    }
  }
}
</script>

<style>

</style>
