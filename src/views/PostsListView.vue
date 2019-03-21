<template>
  <div class="posts-list">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="post"
      @click="selectPost(post.id)">
      <h2 class="title">{{ post.title }}</h2>
      <span class="date">{{ getDate(post) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPostsModel } from '@/models'
import { POSTS } from '@/constants/posts'

export default Vue.extend({
  name: 'PostsList',
  computed: {
    posts(): IPostsModel[] {
      return POSTS
    },
    monthNames() {
      return [
        (this as any).$t('months.january'),
        (this as any).$t('months.february'),
        (this as any).$t('months.march'),
        (this as any).$t('months.april'),
        (this as any).$t('months.may'),
        (this as any).$t('months.june'),
        (this as any).$t('months.july'),
        (this as any).$t('months.august'),
        (this as any).$t('months.september'),
        (this as any).$t('months.october'),
        (this as any).$t('months.november'),
        (this as any).$t('months.december')
      ]
    }
  },
  methods: {
    selectPost(idPost: number) {
      this.$router.push({ name: 'BlogView', params: { id: idPost.toString() } })
    },
    getDate(post: any) {
      const date = post.date
      const year = date.getFullYear()
      const month = this.monthNames[date.getMonth()]
      return `${month}, ${year}`
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
    border-bottom: 1px solid #8080803b;
    cursor: pointer;
    &:last-child {
      border-bottom: 0;
    }
    .title {
      font-size: 16px;
      text-align: left;
    }
    &:hover {
      .title {
        opacity: 0.7;
      }
    }
    .date {
      display: flex;
      align-items: center;
      opacity: 0.6;
      text-align: right;
    }
  }
}
@media (max-width: 576px) {
  .posts-list {
    width: 90%;
    .post {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
