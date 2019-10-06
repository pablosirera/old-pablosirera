<template>
  <main id="app">
    <HeaderContainer />
    <router-view />
  </main>
</template>

<script>
import HeaderContainer from '@/containers/HeaderContainer.vue'

export default {
  name: 'App',
  components: {
    HeaderContainer,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
