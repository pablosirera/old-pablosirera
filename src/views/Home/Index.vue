<template>
  <PageLayout>
    <SocialContainer />
  </PageLayout>
</template>

<script>
import SocialContainer from '@/containers/SocialContainer.vue'
import PageLayout from '@/components/PageLayout.vue'
import { ROUTES } from '@/shared/constants'

export default {
  title: 'Pablo Sirera Mata',
  name: 'HomeView',
  components: {
    SocialContainer,
    PageLayout,
  },
  mounted() {
    this.$ga.page(ROUTES.HOME)
  },
}
</script>
