<template>
  <div class="posts-list">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="post"
      @click="selectPost(post.id)">
      <h2 class="title">{{ post.title }}</h2>
      <span class="date">{{ post.date }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { LISTPOSTS } from '@/constants'

export default Vue.extend({
  name: 'PostsList',
  computed: {
    posts() {
      return LISTPOSTS
    }
  },
  methods: {
    selectPost(idPost: number) {
      this.$router.push({ name: 'BlogView', params: { id: idPost.toString() } })
    }
  }
})
</script>

<style lang="scss" scoped>
.posts-list {
  width: 60%;
  margin: auto;
  .post {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid grey;
    cursor: pointer;
    &:last-child {
      border-bottom: 0;
    }
    &:hover {
      .title {
        opacity: 0.7;
      }
    }
    .title {
      font-size: 14px;
    }
    .date {
      display: flex;
      align-items: center;
      opacity: 0.6;
    }
  }
}
</style>
