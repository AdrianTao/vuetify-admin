<template>
  <div class="navbar">
    1
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {

  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    openPassword() {
      this.$refs.password.openDialog()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
