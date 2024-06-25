<template>
    <div class="h-screen w-screen dark:bg-gray-800">
        <div class="p-2 sticky w-screen rounded-md shadow-md bg-gray-300 dark:bg-gray-600 dark:text-white overflow-ellipsis whitespace-nowrap flex justify-between items-center">
                <h1 class="text-3xl text-left flex items-center">
                    <span class="material-symbols-rounded m-2 mr-4 font-bold cursor-pointer" @click="close">arrow_back</span>
                <p v-if="$route.params.id !== '-1'">Navrhuješ zmenu pesničky {{ $route.params.id }}</p>
                <p v-else>Navrhuješ novú pesničku</p>
            </h1>
            <div v-if="$store.state.credential" class="opacity-70">
                Prihlásený ako {{ $store.state.credential.displayName }}
            </div>
        </div>
        <div class="container m-auto overflow-auto h-5/6 content">
            <div class="dark:text-gray-200 p-4 text-lg">
                <label for="songName" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Meno</span>
                    <input id="songName" type="text" class="input" v-model="songName">
                </label>
            </div>
            <div class="dark:text-gray-200 p-4 text-lg">
                <label for="author" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Autor</span>
                    <input id="author" type="text" class="input" v-model="author">
                </label>
            </div>
            <div class="dark:text-gray-200 p-4 text-lg">
                <label for="youtube" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Youtube ID</span>
                    <input id="youtube" type="text" class="input" v-model="youtube">
                </label>
            </div>
            <div class="dark:text-gray-200 p-4 text-lg">
                <label for="name" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Umiestnenie</span>
                    <input id="guitarMode" type="text" class="input" v-model="path">
                </label>
            </div>
            <div class="dark:text-gray-300 text-2xl">
                <h2>Text</h2>
                <p class="text-sm italic text-left opacity-50">[D] - akordy, {B} - bold, // capo 1 - gitarové poznámky (na celý riadok)</p>
                <textarea rows="30" class="bg-gray-300 dark:bg-gray-600 outline-none rounded-md p-1 w-full text-sm"  v-model="text" @change="resizeTextArea"></textarea>
            </div>
            <div class="dark:text-gray-200 p-4 text-lg">
                <label for="showExplicit" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Je táto pesnička NSFW?</span>
                    <div class="relative">
                        <input id="showExplicit" type="checkbox" class="sr-only" v-model="isExplicit">
                        <div class="bg-gray-400 dark:bg-gray-600 h-5 w-11 rounded-full shadow-inner"></div>
                        <div class="h-6 w-6 absolute shadow rounded-full bg-gray-50 -left-0.5 -top-0.5 transition-all" :class="{dot: isExplicit}"></div>
                    </div>
                </label>
            </div>
            <div>
                <button class="bg-green-500 rounded-lg w-full p-3 text-xl mt-3 shadow-lg" @click="save">Uložiť</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Song } from '@/store'
import { createOrUpdateSong, getSong } from '@/store/firebase'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Editor extends Vue {
    songName = ''
    author = ''
    path = ''
    youtube = ''
    text = ''
    isExplicit = false
    mounted (): void {
      if (!this.$store.state.loggedIn) this.$router.back()

      const id = parseInt(this.$route.params.id)
      if (id !== -1) {
        getSong(id).then(song => {
          if (!song) return
          this.songName = song.name
          this.author = song.author
          this.path = song.path
          this.youtube = song.youtube || ''
          this.text = song.text
          this.isExplicit = song.explicit || false
        })
      }
    }

    close ():void {
      this.$router.back()
    }

    resizeTextArea (event: any):void {
      event.target.style.height = 'auto'
      event.target.style.height = `${event.target.scrollHeight}px`
    }

    save ():void {
      const id = parseInt(this.$route.params.id)
      const song: Song = {
        id: id,
        name: this.songName,
        author: this.author,
        path: this.path,
        text: this.text,
        youtube: this.youtube,
        explicit: this.isExplicit
      }
      createOrUpdateSong(song).then(() => {
        this.$router.back()
      })
    }
}
</script>

<style scoped>
.input {
    @apply bg-gray-300 dark:bg-gray-600 outline-none rounded-md p-1 w-1/2;
}
.content{
    height: calc(100vh - 4rem);
}
.content::-webkit-scrollbar{
    display: none;
}

.dot {
  transform: translateX(100%);
  @apply bg-blue-900;
}
</style>
