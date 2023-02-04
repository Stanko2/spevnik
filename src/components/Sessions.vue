<template>
    <div>
      <h2 class="text-2xl dark:text-gray-200 mb-3">Skupiny</h2>
      <p class="dark:text-gray-200">Skupiny vedia synchronizovať aktuálnu pesničku medzi viacerými zariadeniami v reálnom čase.</p>
      <div class="flex justify-center mt-3 mb-3">
        <input class="outline-none rounded-l-md pl-3 p-0.5 text-2xl bg-gray-500 w-60" type="text" v-model="sessionId" :disabled="$store.state.session !== undefined" placeholder="Meno skupiny">
        <div v-if="$store.state.session == undefined" class="h-full">
          <button class="bg-blue-400 button" @click="Join" :disabled="sessionId.length == 0">
            <span class="m-1 block material-symbols-rounded">login</span>
            <div class="tooltip">Pripojiť sa do skupiny</div>
          </button>
          <button class="bg-blue-400 button rounded-r-md" v-if="loggedIn" @click="Create">
            <span class="m-1 block material-symbols-rounded">add_circle</span>
            <div class="tooltip">Vytvoriť skupinu</div>
          </button>
        </div>
        <div v-else>
          <button class="bg-red-400 button rounded-r-md" @click="Leave">
            <span class="m-1 block material-symbols-rounded">delete</span>
            <div class="tooltip">Opustiť skupinu</div>
          </button>
        </div>
      </div>
      <div v-if="!loggedIn" class="dark:text-gray-200 text-sm">
        Musíš byť prihlásený, aby si vedel vytvoriť skupinu. Pripojiť sa ku skupine vieš aj bez toho :).
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'

@Component
export default class Sessions extends Vue {
  sessionId = ''
  loggedIn = false

  mounted ():void {
    this.loggedIn = this.$store.state.credential !== null
    this.sessionId = this.$store.state.session || ''
  }

  @Watch('$store.state.credentials')
  credentialsUpdate ():void {
    console.log('update')
    this.loggedIn = this.$store.state.credential !== null
  }

  Join ():void {
    if (this.sessionId.length === 0) return
    this.$store.commit('joinSession', this.sessionId)
  }

  Create ():void {
    if (this.sessionId.length === 0) return
    this.$store.commit('createSession', this.sessionId)
  }

  Leave ():void {
    this.$store.commit('leaveSession')
  }
}
</script>

<style lang="scss">
.button {
  @apply transition-all outline-none p-1 text-2xl;
  &:disabled {
    @apply opacity-30;
  }
  .tooltip{
    @apply absolute opacity-0 hidden transition-all translate-y-2 text-white -translate-x-1/2 transform-gpu text-sm bg-gray-900 p-1 px-3 rounded-full;
  }
  &:hover .tooltip {
    @apply opacity-100 block;
  }
}
</style>
