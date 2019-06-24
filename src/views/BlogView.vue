<template>
  <PageLayout>
    <section class="blog">
      <DeployAppsVue v-if="id === posts[0].id"/>
      <Addi18nVue v-if="id === posts[1].id"/>
      <EventBus v-if="id === posts[2].id"/>
    </section>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import { POSTS, POSTS_IDS } from '@/constants/posts'
import { ROUTES } from '@/constants/urlRoutes'

export default Vue.extend({
  name: 'BlogView',
  components: {
    PageLayout: () => import('@/components/PageLayout.vue'),
    DeployAppsVue: () => import('@/posts/DeployAppsVue.vue'),
    Addi18nVue: () => import('@/posts/Addi18nVue.vue'),
    EventBus: () => import('@/posts/EventBus.vue')
  },
  props: {
    id: {
      type: Number
    }
  },
  computed: {
    posts() {
      return POSTS
    }
  },
  mounted() {
    if (!POSTS_IDS.includes(this.id)) {
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
