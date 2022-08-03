<template>
  <div class="fixed h-screen w-screen flex justify-center align-middle top-0 z-50">
    <div class="fixed h-screen w-screen bg-gray-900 opacity-70 top-0 left-0 z-10s"></div>
    <div class="m-3 opacity-100 max-w-full w-11/12 lg:w-4/6 absolute z-50" @click="close()">
      <transition
          enter-active-class="duration-300 transition-all ease-in-out transform-gpu"
          leave-active-class="duration-300 transition-all ease-in-out transform-gpu"
          enter-class="translate-y-full"
          leave-class="translate-y-0"
          enter-to-class="translate-y-0"
          leave-to-class="translate-y-full"
      >
        <div class="w-full h-10" v-if="showBar">
          <input type="search" class="outline-none rounded-md w-full p-2 text-lg dark:bg-gray-500 dark:text-gray-100" ref="search" v-model="searchQuery">
          <button class="absolute top-0 right-0 h-10 w-10 m-0.5 transform-gpu hover:rotate-12 hover:bg-gray-400 transition-all rounded-full" @click="close()">
              <span class="material-symbols-rounded block">
              close
              </span>
          </button>
          <div v-if="results.length > 0" class="bg-gray-200 rounded-md mt-2 cursor-pointer overflow-hidden" @click="close()">
            <div v-for="result in results" :key="result.id" @click="close(result.id)">

                <p class="p-2 text-lg dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all flex">
                    <span class="material-symbols-rounded block m-1 mr-4 opacity-70">
                      {{ matchTypeMapping[result.matchType] }}
                    </span>
                  <span class="flex items-center">{{result.name}} ({{ result.author }})</span>
                </p>
            </div>
            <div @click="$emit('more', searchQuery)">
              <p class="p-2 text-lg dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all flex font-bold">
                    <span class="material-symbols-rounded block m-1 mr-4 opacity-70">
                      arrow_forward
                    </span>
                  <span class="flex items-center">Zobraziť viac</span>
                </p>
            </div>
          </div>
          <div class="mt-3" v-else-if="searchQuery.length > 0">
              <p class="text-red-500">Nič sa nenašlo</p>
          </div>
          <div v-if="songs.length == 0">
              <p class="text-red-500">Na vyhľadávanie zapni offline režim v nastaveniach</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Song } from '@/store'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import { SearchResult, Search } from './Search'

@Component
export default class SearchView extends Vue {
    @Prop({ required: true }) songs!: Song[]
    showBar = false
    searchQuery = ''
    results: SearchResult[] = []
    $refs!:{
        search: HTMLInputElement
    }

    matchTypeMapping ={
      name: 'title',
      author: 'person',
      text: 'description',
      liked: 'favorite'
    }

    mounted ():void {
      this.showBar = true
      this.$nextTick().then(() => {
        this.$refs.search.focus()
      })
    }

    close (id: number | undefined = undefined):void{
      this.showBar = false
      this.$emit('close', id)
    }

    @Watch('searchQuery')
    search ():void {
      this.results = Search(this.searchQuery).splice(0, 10)
    }
}
</script>

<style scoped>

</style>
