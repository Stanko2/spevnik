<template>
    <div>
      <h2 class="text-2xl dark:text-gray-200 mb-3">Skupiny</h2>
      <p class="dark:text-gray-200">Skupiny vedia synchronizovať aktuálnu pesničku medzi viacerými zariadeniami v reálnom čase.</p>
      <div class="flex justify-center mt-3 mb-3">
        <input class="outline-none rounded-sm pl-3 p-0.5 text-3xl bg-gray-500 w-60" type="text" v-model="sessionId" :disabled="$store.state.session !== undefined" placeholder="Meno skupiny">
        <div v-if="$store.state.session == undefined">
          <button class="bg-blue-400 button" @click="Join" :disabled="sessionId.length == 0">Pripojiť sa</button>
          <button class="bg-blue-400 button" v-if="loggedIn" @click="Create">Vytvoriť</button>
        </div>
        <div v-else>
          <button class="bg-red-400 button" @click="Leave">Opustiť </button>
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

<style>
.button {
  @apply transition-all outline-none rounded-sm hover:opacity-75 p-1 text-2xl
}
</style>
