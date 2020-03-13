<template>
  <div class="posts-list">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="post"
      @click="selectPost(post.nameComponent)"
    >
      <img :src="getUrlImage(post.id)" :alt="$t(post.altImage)" class="image" />
      <h2 class="title">{{ $t(post.title) }}</h2>
      <div class="bottom-post">
        <span>
          <font-awsome-icon icon="stopwatch" class="icon" />
          {{ getTimeToReadText(post.timeToRead) }}
        </span>
        <span class="date">{{ getDate(post) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { POSTS, ROUTES } from '@/shared/constants'

export default {
  title() {
    return this.$t('blog.title')
  },
  name: 'PostsList',
  computed: {
    posts() {
      return POSTS
    },
    monthNames() {
      return [
        this.$t('months.january'),
        this.$t('months.february'),
        this.$t('months.march'),
        this.$t('months.april'),
        this.$t('months.may'),
        this.$t('months.june'),
        this.$t('months.july'),
        this.$t('months.august'),
        this.$t('months.september'),
        this.$t('months.october'),
        this.$t('months.november'),
        this.$t('months.december'),
      ]
    },
  },
  mounted() {
    this.$ga.page(ROUTES.BLOG.BASE_URL)
  },
  methods: {
    selectPost(nameComponent) {
      this.$router.push({ name: 'BlogView', params: { id: nameComponent } })
    },
    getDate(post) {
      const date = post.date
      const year = date.getFullYear()
      const month = this.monthNames[date.getMonth()]
      return `${month}, ${year}`
    },
    getUrlImage(id) {
      const parseId = id.toString()
      return require(`@/assets/images/post${parseId}.jpg`)
    },
    getTimeToReadText(timeToRead) {
      const keyTranslateText = parseInt(timeToRead) > 1 ? 'minutes' : 'minute'
      const translateText = this.$i18n.t(`posts.${keyTranslateText}`)
      return `${timeToRead} ${translateText}`
    },
  },
}
</script>

<style lang="scss" scoped>
.posts-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  max-width: 850px;
  width: 60%;
  margin: auto;
  padding-top: 30px;

  @media (max-width: 540px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }

  .post {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: box-shadow 0.5s ease, transform 0.5s ease;
    padding: 10px;

    @media (max-width: 540px) {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    .title {
      font-size: 18px;
      text-align: left;
      padding-top: 10px;
    }

    &:hover {
      box-shadow: 4px 10px 20px #dadada80;
      transform: translate3d(0, -3px, 0);

      @media (max-width: 540px) {
        box-shadow: unset;
      }
    }

    .bottom-post {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5px;
      opacity: 0.6;
    }

    .image {
      width: 100%;
      max-height: 250px;
    }
  }
}
</style>
