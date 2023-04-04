<template>
    <div class="absolute bottom-0 top-0 overflow-y-scroll left-0 right-0" v-shortkey="['space']" @shortkey="play(false)" v-hammer:tap="()=>play(true)">
        <div v-shortkey="['+']" @shortkey="scrollSpeed *= 1.5"></div>
        <div v-shortkey="['-']" @shortkey="scrollSpeed /= 1.5"></div>
        <slot class="overflow-auto text-center"></slot>
        <transition
            enter-active-class="duration-500 transition-all"
            leave-active-class="duration-500 delay-1000 transition-all"
            enter-to-class="translate-x-0"
            enter-class="translate-x-full"
            leave-to-class="translate-x-full"
            leave-class="translate-x-0"
        >
            <div v-if="!playing" class="fixed right-0 top-1/2 w-16 dark:bg-gray-600 bg-gray-400 dark:text-gray-100 rounded-l-md transform-gpu">
                <button class="btn mr-2"   @click="play(false)" >
                    <span class="material-symbols-rounded block">
                       {{ playing ? 'pause' : 'play_arrow' }}
                    </span>
                </button>
                <button class="btn mr-2" >
                    <span class="material-symbols-rounded block" @click="scrollSpeed *= 1.5">
                        add
                    </span>
                </button>
                <button class="btn mr-2" @click="scrollSpeed /= 1.5">
                    <span class="material-symbols-rounded block">
                        remove
                    </span>
                </button>
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
    sleep!: NoSleep

    mounted ():void {
      this.sleep = new NoSleep()
      this.playerActive = this.$route.query.mode === 'player'
      this.scrollSpeed = this.$store.state.fontSize * 0.6
    }

    scroll (time: number):void {
      if (this.lastTime > 0) {
        const elapsed = (time - this.lastTime) / 1000
        this.scrollAmount += this.scrollSpeed * elapsed
        this.$el.scroll({ top: this.scrollAmount })
      }

      this.lastTime = time
      if (this.playing) {
        requestAnimationFrame(this.scroll)
      }
    }

    play (fromBackground:boolean):void {
      console.log('play')
      if (fromBackground && !this.playing) return
      this.playing = !this.playing
      this.$emit('play', this.playing)
      if (!this.playing) {
        this.sleep.enable()
        return
      } else this.sleep.disable()
      this.scrollAmount = this.$el.scrollTop
      this.lastTime = 0
      console.log(this.$el.scrollTop)
      requestAnimationFrame(this.scroll)
    }
}

</script>
