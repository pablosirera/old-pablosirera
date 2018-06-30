<template>
  <v-content>
    <v-container fluid>
      <slot/>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PageLayout'
})
</script>
