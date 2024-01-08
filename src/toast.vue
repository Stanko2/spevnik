<template>
  <div class="p-3 rounded-lg m-3 shadow-2xl" :class="{
    'bg-green-200': type === 'success',
    'bg-red-200': type === 'error',
    'bg-blue-200': type === 'info',
    'bg-yellow-200': type === 'warning',
    }">
    <p :class="{
    'text-green-500': type === 'success',
    'text-red-500': type === 'error',
    'text-blue-500': type === 'info',
    'text-yellow-500': type === 'warning',
    }" class=""
    >{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Song } from '@/store'

@Component
export default class Toast extends Vue {
    @Prop() msg!: string
    @Prop({ default: 3000 }) timeout!: number
    @Prop({ default: 'info' }) type!: string

    mounted (): void {
      console.log('mounted')
      this.start()
    }

    async start (): Promise<void> {
      this.$el.classList.add('opacity-0')
      await new Promise(resolve => setTimeout(resolve, 200))
      this.$el.classList.remove('opacity-0')
      this.$el.classList.add('opacity-100')
      await new Promise(resolve => setTimeout(resolve, this.timeout - 400))
      this.$el.classList.remove('opacity-100')
      this.$el.classList.add('opacity-0')
      await new Promise(resolve => setTimeout(resolve, 200))
      this.$destroy()
      // eslint-disable-next-line no-unused-expressions
      this.$el.parentElement?.removeChild(this.$el)
    }
}

</script>
