<template>
  <div id="app" class="select-none" :class="{'dark': dark}">
    <transition
      enter-active-class="duration-0 transition-all ease-in-out transform-gpu"
      leave-active-class="duration-300 transition-all ease-in-out transform-gpu"
      enter-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      >
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Navbar from './components/Nav.vue'

@Component({ components: { Navbar } })
export default class App extends Vue {
  dark = false

  mounted ():void {
    this.$store.commit('initialize')
    this.$store.dispatch('startOfflineMode')
    this.dark = this.$store.state.darkTheme
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setDarkTheme') {
        this.dark = state.darkTheme
      }
    })
  }
}
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
  width: 0;
}
</style>
