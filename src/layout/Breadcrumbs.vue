<template>
  <v-breadcrumbs :items="breadcrumbs" />
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data: () => ({
    items: null
  }),
  computed: {
    breadcrumbs() {
      const routes = this.items.map(item => {
        return {
          href: `#${item.path}`,
          text: item.meta.title
        }
      })

      routes[routes.length - 1].disabled = true

      return routes
    }
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)

      this.items = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.v-breadcrumbs {
  margin-left: 25px;
  padding: 0;
}
</style>
