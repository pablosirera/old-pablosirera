<template>
  <PageLayout>
    <section class="blog">
      <DeployAppsVue v-if="id === posts[0].id"/>
    </section>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/PageLayout.vue'
import DeployAppsVue from '@/posts/DeployAppsVue.vue'
import { POSTS, POSTS_IDS } from '@/constants/posts'
import { ROUTES } from '@/constants/urlRoutes'

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
  article {
    width: 75%;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}
@media (max-width: 768px) {
  .blog {
    article {
      width: 100%;
    }
  }
}
</style>
