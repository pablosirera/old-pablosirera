<template>
  <PageLayout>
    <SocialContainer />
  </PageLayout>
</template>

<script>
import SocialContainer from '@/containers/SocialContainer.vue'
import PageLayout from '@/components/PageLayout.vue'

export default {
  name: 'HomeView',
  components: {
    SocialContainer,
    PageLayout,
  },
}
</script>
