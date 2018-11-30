<template>
  <PageLayout>
    <section class="blog">
      <PostsList/>
    </section>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/PageLayout.vue'
import PostsList from '@/components/PostsList.vue'

export default Vue.extend({
  name: 'BlogView',
  components: {
    PageLayout,
    PostsList
  }
})
</script>
