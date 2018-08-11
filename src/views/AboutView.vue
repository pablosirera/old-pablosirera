<template>
  <PageLayout>
    <div class="about">
      <p>I'm Pablo Sirera, web developer based on Valencia. I'm interested in everything related to the web and I like to learn new things constantly and try them.</p>
      <p>For more information about me, I'm created a <a href="#">Learning Tracker</a> to visit my experience and the knowledge I have of technologies.</p>
    </div>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/PageLayout.vue'

export default Vue.extend({
  name: 'AboutView',
  components: {
    PageLayout
  }
})
</script>

<style lang="scss" scoped>
.about {
  text-align: justify;
  width: 60%;
  margin: 0 auto;
}
</style>
