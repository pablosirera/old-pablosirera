<template>
  <div class="posts-list">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="post"
      @click="selectPost(post.id)">
      <img
        :src="getUrlImage(post.id)"
        :alt="post.altImage"
        class="image">
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
    getDate(post: any): string {
      const date = post.date
      const year = date.getFullYear()
      const month = this.monthNames[date.getMonth()]
      return `${month}, ${year}`
    },
    getUrlImage(id: number) {
      const parseId = id.toString()
      return require(`@/assets/images/post${parseId}.jpg`)
    }
  }
})
</script>

<style lang="scss" scoped>
.posts-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  width: 60%;
  margin: auto;
  padding-top: 30px;
  .post {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: box-shadow 0.5s ease, transform 0.5s ease;
    padding: 10px;
    .title {
      font-size: 18px;
      text-align: left;
      padding-top: 10px;
    }
    &:hover {
      box-shadow: 4px 10px 20px #dadada80;
      transform: translate3d(0, -3px, 0);
    }
    .date {
      display: flex;
      justify-content: flex-end;
      opacity: 0.6;
      padding-top: 5px;
    }
    .image {
      width: 100%;
      max-height: 250px;
    }
  }
}
@media (max-width: 576px) {
  .posts-list {
    width: 90%;
    display: flex;
    flex-direction: column;
    .post {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      &:hover {
        box-shadow: unset;
      }
    }
  }
}
</style>
