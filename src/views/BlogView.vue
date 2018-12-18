<template>
  <PageLayout>
    <section class="blog">
      <DeployAppsVue/>
    </section>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/PageLayout.vue'
import DeployAppsVue from '@/posts/DeployAppsVue.vue'

export default Vue.extend({
  name: 'BlogView',
  components: {
    PageLayout,
    DeployAppsVue
  },
  props: {
    id: {
      type: Number
    }
  }
})
</script>

<style lang="scss" scoped>
.blog {
  article {
    width: 75%;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}
@media (max-width: 576px) {
  .blog {
    article {
      width: 90%;
    }
  }
}
</style>
