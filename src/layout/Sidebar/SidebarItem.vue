<template>
  <div v-if="!item.hidden">
    <v-list-item
      v-if="item.children"
      link
    >
      <v-list-item-action>
        <v-icon>{{ item.meta.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ item.meta.icon }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-group
      v-else
      :prepend-icon="item.meta.icon"
      value="true"
    />
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
