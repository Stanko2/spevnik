<template>
  <div
    ref="rootElement"
    class="p-3 rounded-lg m-3 shadow-2xl transition-opacity duration-200"
    :data-type="type"
  >
    <p class="font-medium">{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    msg: string
    timeout?: number
    type?: 'success' | 'error' | 'info' | 'warning'
  }>(),
  {
    timeout: 3000,
    type: 'info'
  }
)

const emit = defineEmits(['close'])

const rootElement = ref<HTMLElement | null>(null)

onMounted(() => {
  console.log('mounted')
  startAnimation()
})

const startAnimation = async () => {
  if (!rootElement.value) return

  rootElement.value.classList.add('opacity-0')
  await new Promise((resolve) => setTimeout(resolve, 50))
  rootElement.value.classList.remove('opacity-0')
  rootElement.value.classList.add('opacity-100')

  await new Promise((resolve) => setTimeout(resolve, props.timeout - 250))

  rootElement.value.classList.remove('opacity-100')
  rootElement.value.classList.add('opacity-0')

  await new Promise((resolve) => setTimeout(resolve, 200))

  emit('close')
}
</script>

<style scoped>
@reference "tailwindcss";

div[data-type="success"] { @apply bg-green-200 text-green-700; }
div[data-type="error"] { @apply bg-red-200 text-red-700; }
div[data-type="info"] { @apply bg-blue-200 text-blue-700; }
div[data-type="warning"] { @apply bg-yellow-200 text-yellow-700; }
</style>
