<template>
  <PageLayout>
    <section class="blog">
      <component 
        v-if="idComponent" 
        :is="idComponent"/>
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
    'deploy-apps-vue': () => import('@/posts/DeployAppsVue.vue'),
    'add-i18n-vue': () => import('@/posts/Addi18nVue.vue'),
    'event-bus': () => import('@/posts/EventBus.vue')
  },
  data: () => ({
    idComponent: ''
  }),
  mounted() {
    this.idComponent = this.$route.params.id

    if (!POSTS_IDS.includes(this.idComponent)) {
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
