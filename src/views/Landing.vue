<template>
  <div class="dark:bg-gray-800 min-h-screen">
    <div class="container m-auto pt-3 dark:text-gray-100">
      <h1 class="text-5xl mb-12">Vitaj v novom Trojsten spevníku</h1>
      <p>Obsahuje vyše 900 rôznych pesničiek aj s akordami</p>
      <div class="flex justify-around">
        <router-link to="/song/1" class="bg-green-600 p-3 rounded-lg flex flex-row hover:bg-green-300 transition-all justify-between">Spustiť <span class="material-symbols-rounded block">arrow_forward</span></router-link>
        <router-link to="/settings/" class="bg-yellow-600 p-3 rounded-lg flex flex-row hover:bg-yellow-300 transition-all justify-between">Nastavenia <span class="material-symbols-rounded block">settings</span></router-link>
      </div>
      <div class="text-left p-2 bg-gray-300 dark:bg-gray-600 rounded-md mt-20">
        <h2 class=" text-center text-3xl">Features</h2>
        <ul>
          <li>
            <h3 class="font-bold text-left w-full border-b-2 border-gray-400 p-2">Jednoduché hľadanie</h3>
            <p>Podľa názvu, intepreta, ako aj podľa úryvku z textu pesničky. Stačí kliknúť na ikonu hľadania, prípadne stlačiť kláves h</p>
          </li>
          <li>
            <h3 class="font-bold text-left w-full border-b-2 border-gray-400 p-2">Linky na youtube</h3>
            <p>Hocijakú pesničku si vieš jedným klikom pustiť na youtube</p>
          </li>
          <li>
            <h3 class="font-bold text-left w-full border-b-2 border-gray-400 p-2">Všetko dostupné offline</h3>
            <p>Pri prvom spustení sa stiahnu všetky texty pesničiek a budú dostupné aj bez internetového pripojenia</p>
          </li>
          <li>
            <h3 class="font-bold text-left w-full border-b-2 border-gray-400 p-2">Synchronizovanie pesničiek</h3>
            <p>V spevníku sa vieš pripojiť do skupiny. Pesničky sa potom budú synchronizovať pre všetky zariadenia
               pripojené k danej skupine.</p>
          </li>
          <li>
            <h3 class="font-bold text-left w-full border-b-2 border-gray-400 p-2">Automatické scrollovanie</h3>
            <p>Experimentálny mód v ktorom sa text pesničiek buyde sám scrollovať. Scrollovanie sa dá spustiť / pauznúť (p),
              zrýchliť (+), spomialiť (-)</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class LandingPage extends Vue {}
</script>
