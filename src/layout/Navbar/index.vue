<template>
  <v-app-bar
    app
    clipped-left
    height="56"
    class="navbar"
    :fixed="headerFixed"
  >
    <v-app-bar-nav-icon @click.stop="toggleSideBar" />
    <v-toolbar-title v-if="showLogo">Vuetify Admin</v-toolbar-title>

    <v-spacer />

    <right-menu />

    <template v-if="showTagsView" v-slot:extension>
      <tags-view />
    </template>
  </v-app-bar>
</template>

<script>
import setting from '@/settings.js'
import RightMenu from './RightMenu'
import TagsView from '../TagsView'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    RightMenu,
    TagsView
  },
  data() {
    return {
      drawer: null
    }
  },
  computed: {
    ...mapState({
      showLogo: state => state.settings.sidebarLogo, // 是否展示logo
      showTagsView: state => state.settings.tagsView // 是否开启标签栏
    }),

    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ]),

    headerFixed() {
      return setting.fixedHeader
    }
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
