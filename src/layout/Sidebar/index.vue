<template>
  <v-navigation-drawer
    :value="drawer"
    app
    clipped
  >
    <v-list dense>
      <sidebar-item
        v-for="route in permission_routes"
        :key="route.path"
        :item="route"
      />

      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
