<template>
  <div id="app" class="dark">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Navbar from './components/Nav.vue'

@Component({ components: { Navbar } })
export default class App extends Vue {
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

</style>
