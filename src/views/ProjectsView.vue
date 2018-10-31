<template>
  <PageLayout>
    <h1>This is an project page</h1>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/PageLayout.vue'

export default Vue.extend({
  name: 'ProjectsView',
  components: {
    PageLayout
  }
})
</script>
