import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import VuetifyToast from 'vuetify-toast-snackbar-ng'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
})

Vue.use(VuetifyToast, {
  x: 'center', // default
  y: 'top' // default
})

export default new Vuetify({})
