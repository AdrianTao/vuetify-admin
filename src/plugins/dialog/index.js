import Vue from 'vue'
import Dialog from './Dialog.vue'

const v = new Vue({
  render(createElement) {
    return createElement(Dialog)
  }

})

v.$mount()

document.body.appendChild(v.$el)

const dialog = v.$children[0]

export default function(title, messasge, options) {
  dialog.open(title, messasge, options)
}
