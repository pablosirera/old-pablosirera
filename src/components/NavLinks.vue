<template>
  <nav class="router-links">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.url"
      class="link">{{ link.name }} <span v-if="index !== lastLink">| </span></router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavLinks',
  data: () => ({
    links: [
      {
        url: '/home',
        name: 'Home'
      },
      {
        url: '/projects',
        name: 'Projects'
      },
      {
        url: '/blog',
        name: 'Blog'
      },
      {
        url: '/about',
        name: 'About'
      }
    ]
  }),
  computed: {
    lastLink() {
      return this.links.length - 1
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  font-weight: bold;
  font-size: 16px;
  color: #2c3e50;
  text-decoration: unset;

  span {
    color: grey;
  }

  &.router-link-active {
    color: #1f8ed5;
  }
}
</style>
