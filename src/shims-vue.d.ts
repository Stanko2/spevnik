declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vuex' {
  export * from 'vuex/types/index.d.ts'
}
