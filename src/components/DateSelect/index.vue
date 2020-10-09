
<template>
  <v-menu
    ref="menu"
    v-model="show"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="selected"
        readonly
        v-bind="$attrs"
        v-on="on"
      />
    </template>

    <v-card>
      <v-time-picker
        v-if="type === 'time'"
        ref="picker"
        v-model="selected"
        class="mt-4"
        format="24hr"
        scrollable
        :min="min"
        :max="max"
      />
      <v-date-picker
        v-else
        ref="picker"
        v-model="selected"
        class="mt-4"
        :min="min"
        :max="max"
        required
        dense
      />

      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          color="primary"
          @click="finish"
        >
          确认
        </v-btn>
        <v-btn text @click="show = false">
          取消
        </v-btn>
      </v-card-actions>

    </v-card>

  </v-menu>
</template>

<script>
export default {
  name: 'DateSelect',
  props: {
    value: {
      type: String,
      required: true
    },

    // birthday生日 time时间 month选择年月 不传值为默认年月日
    type: {
      type: String,
      default: ''
    },

    min: {
      type: String,
      default: ''
    },

    max: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false,
      selected: ''
    }
  },
  watch: {
    value: {
      handler(val) {
        this.selected = val
      },
      immediate: true
    },

    // 当type为birthday时选择顺序为年->月->日
    show(val) {
      if (val && this.type === 'birthday') {
        setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    }
  },
  methods: {
    finish() {
      this.$emit('input', this.selected)
      this.show = false
    }
  }
}
</script>

<style lang='scss'>

</style>
