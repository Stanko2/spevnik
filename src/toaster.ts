import { h, render, App } from 'vue'
import Toast from './toast.vue'

export function toast (msg: string, timeout = 3000, type: 'info' | 'success' | 'warning' | 'error' = 'info'): void {
  const vnode = h(Toast, {
    msg,
    timeout,
    type,
    onClose: () => {
      render(null, container)
      container.remove()
    }
  })

  const container = document.createElement('div')

  const parentEl = document.getElementById('toasts') || document.body
  parentEl.appendChild(container)

  render(vnode, container)
}

export const ToastPlugin = {
  install (app: App) {
    app.config.globalProperties.$toast = toast
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: (msg: string, timeout?: number, type?: 'info' | 'success' | 'warning' | 'error') => void
  }
}
