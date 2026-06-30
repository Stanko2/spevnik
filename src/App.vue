<template>
  <div id="app" class="select-none" :class="{'dark': dark, 'bg-gray-900': dark, 'bg-gray-200': !dark}">
    <div id="toasts" class="fixed w-full p-1 top-0 z-50"></div>
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="duration-500 transition-all transform-gpu"
        leave-active-class="duration-500 transition-all transform-gpu"
        enter-to-class="translate-y-0 opacity-100"
        enter-from-class="translate-y-32 opacity-20"
        leave-to-class="translate-y-32 opacity-20"
        leave-class="translate-y-0 opacity-100"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { IState } from './store'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useStore<IState>()
const dark = ref<boolean>(false)

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  await router.isReady()
  const currentSong = parseInt(route.params.id as string)
  store.commit('initialize', currentSong || 1)
  dark.value = store.state.darkTheme
  store.subscribe((_, state) => {
    dark.value = state.darkTheme
  })
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  transform: translate(0,0);
}

.slide-enter-from {
  position: absolute;
  transform: translate(-100%,0);
}

.slide-leave-to {
  position: absolute;
  transform: translate(100%,0);
}

.slide-leave-from {
  position: absolute;
  transform: translate(0,0);
}

::-webkit-scrollbar{
  display: none;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
