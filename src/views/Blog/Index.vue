<template>
  <PageLayout>
    <section class="blog">
      <component :is="idComponent" v-if="idComponent" />
    </section>
  </PageLayout>
</template>

<script>
import { POSTS_IDS, ROUTES } from '@/shared/constants'

export default {
  name: 'BlogView',
  components: {
    PageLayout: () => import('@/components/PageLayout.vue'),
    'deploy-apps-vue': () => import('@/views/Posts/DeployAppsVue.vue'),
    'add-i18n-vue': () => import('@/views/Posts/Addi18nVue.vue'),
    'event-bus': () => import('@/views/Posts/EventBus.vue'),
  },
  data: () => ({
    idComponent: '',
  }),
  mounted() {
    this.idComponent = this.$route.params.id

    this.$ga.page(`${ROUTES.BLOG.BASE_URL}/${this.idComponent}`)

    if (!POSTS_IDS.includes(this.idComponent)) {
      this.$router.push({ name: 'PostListView' })
    }
  },
}
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
