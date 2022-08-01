<template>
    <div class="h-screen w-screen dark:bg-gray-800">
        <div class="p-2 sticky w-screen rounded-md shadow-md bg-gray-300 dark:bg-gray-600 dark:text-white overflow-ellipsis whitespace-nowrap">
            <h1 class="text-3xl text-left flex items-center">
                <span class="material-symbols-rounded m-2 mr-4 font-bold cursor-pointer" @click="$router.back()">arrow_back</span>
                Nastavenia
            </h1>
        </div>
        <div class="dark:text-gray-200 p-4 text-lg">
            <label for="guitarMode" class="flex justify-between items-center w-full">
                <span class="text-gray-200">Gitarový režim</span>
                <div class="relative">
                    <input id="guitarMode" type="checkbox" class="sr-only" v-model="guitarMode">
                    <div class="bg-gray-600 h-5 w-11 rounded-full shadow-inner"></div>
                    <div class="h-6 w-6 absolute shadow rounded-full bg-gray-50 -left-0.5 -top-0.5 transition-all" :class="{dot: guitarMode}"></div>
                </div>

            </label>
        </div>
        <div class="dark:text-gray-200 p-4 text-lg">
            <label for="darkMode" class="flex justify-between items-center w-full">
                <span class="text-gray-200">Téma</span>
                <div class="relative">
                    <input id="darkMode" type="checkbox" class="sr-only" v-model="darkMode">
                    <div class="bg-gray-600 h-5 w-11 rounded-full shadow-inner"></div>
                    <div class="h-6 w-6 absolute shadow rounded-full bg-gray-50 -left-0.5 -top-0.5 transition-all" :class="{dot: darkMode, 'bg-blue-500': !darkMode}">
                        <span class="material-symbols-rounded block" :class="{
                            'text-yellow-400': !darkMode,
                            'text-gray-400': darkMode
                        }">{{ darkMode ? 'dark_mode' : 'light_mode'}}</span>
                    </div>
                </div>
            </label>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Settings extends Vue {
    guitarMode = false
    darkMode = false
}
</script>

<style>
.dot {
  transform: translateX(100%);
  @apply bg-blue-900;
}
</style>
