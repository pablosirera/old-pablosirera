<template>
  <section class="container">
    <slot/>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PageLayout'
})
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  padding: 16px;
}
</style>
