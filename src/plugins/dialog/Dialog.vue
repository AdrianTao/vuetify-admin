
<template>
  <v-dialog
    v-model="show"
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-card-text>
        {{ messasge }}
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="confirm">
          {{ confirmButton }}
        </v-btn>
        <v-btn color="grey darken-1" text @click="cancel">
          {{ cancelButton }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      title: '',
      messasge: '',
      show: false,
      confirmButton: '确定',
      cancelButton: '取消',
      confirmCallback: null,
      cancelCallback: null
    }
  },
  methods: {
    open(title, messasge, options = {
      confirmButton: '确定',
      cancelButton: '取消',
      confirmCallback: null,
      cancelCallback: null
    }) {
      this.title = title
      this.messasge = messasge
      this.confirmButton = options.confirmButton
      this.cancelButton = options.cancelButton
      this.confirmCallback = options.confirmCallback
      this.cancelCallback = options.cancelCallback
      this.show = true
    },

    clear() {
      this.title = ''
      this.messasge = ''
      this.confirmButton = '确定'
      this.cancelButton = '取消'
      this.confirmCallback = null
      this.cancelCallback = null
    },

    close() {
      this.show = ''
      this.clear()
    },

    confirm() {
      if (this.confirmCallback) {
        this.confirmCallback()
      }
      this.close()
    },

    cancel() {
      if (this.cancelCallback) {
        this.cancelCallback()
      }
      this.close()
    }
  }
}
</script>

<style lang='scss'>

</style>
