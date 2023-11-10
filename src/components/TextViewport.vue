<template>
    <div class="max-w-full">
        <div v-shortkey="['+']" @shortkey="$store.commit('setSpeed', 1.5)"></div>
        <div v-shortkey="['-']" @shortkey="$store.commit('setSpeed', 1 / 1.5)"></div>
        <slot class="overflow-auto text-center"></slot>
        <transition
          enter-active-class="duration-100 ease-in transition-all"
          leave-active-class="duration-1000 ease-out transition-all"
          enter-to-class="opacity-80"
          enter-class="opacity-0"
          leave-to-class="opacity-0"
          leave-class="opacity-80"
        >
          <div v-if="speedChanged" class="fixed top-20 right-4 text-white text-5xl font-mono font-extrabold bg-gray-900 rounded-lg p-4">
            {{ scrollSpeed / 10 }}x
          </div>
        </transition>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import NoSleep from 'nosleep.js'

@Component
export default class TextViewport extends Vue {
    playerActive = false
    scrollSpeed = 10
    lastTime = 0
    playing = false
    scrollAmount = 0
    speedChanged = false
    sleep!: NoSleep

    mounted ():void {
      this.sleep = new NoSleep()
      this.$store.subscribe((mut, state) => {
        if (mut.type === 'setSpeed') {
          this.scrollSpeed = 10 * state.playerStatus.speed
          if (!this.speedChanged) {
            this.speedChanged = true
            setTimeout(() => {
              this.speedChanged = false
            }, 600)
          }
        }
        if (mut.type === 'setPlaying') {
          this.playing = state.playerStatus.playing
          this.play()
        }
      })
      this.playerActive = true
      this.scrollSpeed = this.$store.state.fontSize * 0.6
    }

    scroll (time: number):void {
      if (this.lastTime > 0) {
        const elapsed = (time - this.lastTime) / 1000
        this.scrollAmount += this.scrollSpeed * elapsed
        if (this.$el.parentElement) {
          this.$el.parentElement.scroll({ top: this.scrollAmount })
        }
      }

      this.lastTime = time

      if (this.playing) {
        requestAnimationFrame(this.scroll)
      }
    }

    play ():void {
      this.$emit('play', this.playing)
      if (!this.playing) {
        this.sleep.disable()
        return
      } else this.sleep.enable()
      this.scrollAmount = this.$el.parentElement?.scrollTop || 0
      this.lastTime = 0
      requestAnimationFrame(this.scroll)
    }
}

</script>
