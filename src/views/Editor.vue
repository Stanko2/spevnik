<template>
    <div class="h-screen w-screen dark:bg-gray-800">
        <div class="p-2 sticky w-screen rounded-md shadow-md bg-gray-300 dark:bg-gray-600 dark:text-white overflow-ellipsis whitespace-nowrap flex justify-between items-center">
                <h1 class="text-3xl text-left flex items-center">
                    <span class="material-symbols-rounded m-2 mr-4 font-bold cursor-pointer" @click="close">arrow_back</span>
                <p v-if="$route.params.id !== '-1'">Upravuješ pesničku {{ $route.params.id }}</p>
                <p v-else>Nová pesnička</p>
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
            <div>
                <button class="bg-green-500 rounded-lg w-full p-3 text-xl mt-3 shadow-lg" @click="save">Uložiť</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { createSong, getSong, updateSong } from '@/store/firebase'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Editor extends Vue {
    songName = ''
    author = ''
    path = ''
    youtube = ''
    text = ''
    mounted (): void {
      const id = parseInt(this.$route.params.id)
      if (id !== -1) {
        getSong(id).then(song => {
          if (!song) return
          this.songName = song.name
          this.author = song.author
          this.path = song.path
          this.youtube = song.youtube || ''
          this.text = song.text
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
      const song = {
        id: id,
        name: this.songName,
        author: this.author,
        path: this.path,
        text: this.text,
        youtube: this.youtube
      }
      if (id === -1) {
        song.id = this.$store.state.songs.length + 1
        createSong(song).then(() => {
          this.$router.back()
          this.$store.commit('createSong', song)
        })
      } else {
        updateSong(song).then(() => {
          this.$router.back()
          this.$store.commit('updateSong', song)
        })
      }
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

</style>
