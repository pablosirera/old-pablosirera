<template>
  <PageLayout>
    <SocialContainer />
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialContainer from '@/containers/SocialContainer.vue'
import PageLayout from '@/components/PageLayout.vue'

export default Vue.extend({
  name: 'HomeView',
  components: {
    SocialContainer,
    PageLayout
  }
})
</script>
