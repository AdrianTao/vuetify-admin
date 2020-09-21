<template>
  <v-menu offset-y transition="scroll-y-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-if="avatar"
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            :src="avatar"
            alt="Vuetify"
          />
        </v-avatar>
      </v-btn>
      <v-btn
        v-else
        text
        small
        v-bind="attrs"
        v-on="on"
      >
        {{ name }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        @click="() => {}"
      >
        <v-icon small>person_outline</v-icon>
        <v-list-item-title>个人信息</v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list-item @click="logout">
        <v-icon small>login</v-icon>
        <v-list-item-title>注销</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RightMenu',
  computed: {
    ...mapGetters([
      'avatar',
      'name'
    ])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-menu__content {
  .v-list-item__title {
    margin-left: 5px;
    font-size: 14px;
  }
}
</style>
