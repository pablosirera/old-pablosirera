<template>
  <PageLayout>
    <section class="blog">
      <component 
        v-if="nameComponent" 
        :is="nameComponent"/>
    </section>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import { POSTS_IDS } from '@/constants/posts'

export default Vue.extend({
  name: 'BlogView',
  components: {
    PageLayout: () => import('@/components/PageLayout.vue'),
    DeployAppsVue: () => import('@/posts/DeployAppsVue.vue'),
    Addi18nVue: () => import('@/posts/Addi18nVue.vue'),
    EventBus: () => import('@/posts/EventBus.vue')
  },
  props: {
    nameComponent: {
      type: String,
      required: true
    }
  },
  mounted() {
    if (!POSTS_IDS.includes(this.nameComponent)) {
      this.$router.push({ name: 'PostListView' })
    }
  }
})
</script>

<style lang="scss" scoped>
.blog {
  .article-blog {
    width: 75%;
    margin: 0 auto;
    margin-bottom: 40px;

    @media (max-width: 720px) {
      width: 100%;
    }
  }
}
</style>
