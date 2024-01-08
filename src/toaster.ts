import Vue from 'vue'
import Toast from './toast.vue'

Vue.mixin({
  methods: {
    toast (msg: string, timeout = 3000, type = 'info'): void {
      const toast = new Vue({
        render: h => h(Toast, { props: { msg, timeout, type } })
      }).$mount()
      document.body.appendChild(toast.$el)
    }
  }
})

export function toast (msg: string, timeout = 3000, type = 'info'): void {
  const toast = new Vue({
    render: h => h(Toast, { props: { msg, timeout, type } })
  }).$mount()
  const el = document.getElementById('toasts')
  if (el) el.appendChild(toast.$el)
}

declare module 'vue' {
    interface Vue {
        toast: (msg: string, timeout?: number, type?: string) => void
    }
}
