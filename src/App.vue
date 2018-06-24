<template>
  <section id="app">
    <AppHeader/>
    <router-view/>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import router from './router'
import AppHeader from '@/containers/HeaderContainer.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader
  },
  data: (isHomeRoute: Boolean) => ({
    isHomeRoute: true
  })
})
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
