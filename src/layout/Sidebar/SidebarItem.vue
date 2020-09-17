<template>
  <div v-if="!item.hidden">
    <v-list-item
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow"
      router
      :to="resolvePath(onlyOneChild.path)"
    >
      <v-list-item-action>
        <v-icon v-if="!isSubmenu">
          {{ onlyOneChild.meta.icon||(item.meta&&item.meta.icon) }}
        </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ onlyOneChild.meta.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-group
      v-else-if="!isSubmenu"
      :prepend-icon="item.meta.icon"
      value="true"
    >
      <template v-slot:activator>
        <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
      </template>

      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
        :is-submenu="true"
      />
    </v-list-group>

    <v-list-group
      v-else
      sub-group
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
        </v-list-item-content>
      </template>

      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
        :is-submenu="true"
      />
    </v-list-group>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },

    basePath: {
      type: String,
      default: ''
    },

    isSubmenu: {
      type: Boolean,
      default: false
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },

    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style>

</style>
