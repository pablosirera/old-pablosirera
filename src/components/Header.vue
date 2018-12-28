<template>
  <header :class="navClasses">
    <Languages
      :language="language"
      @change-language="changeLanguage"/>
    <section v-if="!isNotFound">
      <div
        v-if="isHomeView"
        class="wrapper-image">
        <img
          :alt="$t('home.principalImage')"
          class="principal-image"
          src="@/assets/home-image.png">
      </div>
      <section
        v-if="isHomeView"
        class="description-wrapper">
        <p class="description">{{ $t('introduction.line1') }}</p>
        <p class="description">{{ $t('introduction.line2') }}</p>
      </section>
      <router-link
        class="link"
        to="/home">Home</router-link> |
      <router-link
        class="link"
        to="/projects">Projects</router-link> |
      <router-link
        class="link"
        to="/blog">Blog</router-link> |
      <router-link
        class="link"
        to="/about">About</router-link>
    </section>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { ROUTES } from '@/constants'
import Languages from '@/components/Languages.vue'

export default Vue.extend({
  name: 'AppHeader',
  components: { Languages },
  props: {
    language: {
      type: String,
      default: null
    }
  },
  computed: {
    isHomeView(): boolean {
      return this.$route.path === ROUTES.HOME
    },
    isNotFound(): boolean {
      return this.$route.name === 'NotFound'
    },
    navClasses(): { [key: string]: boolean } {
      return {
        nav: true,
        'nav-without-line': this.isNotFound
      }
    }
  },
  methods: {
    changeLanguage(languageSelected: string) {
      this.$emit('on-change-language', languageSelected)
    }
  }
})
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px;
  border-bottom: 1px solid #ededed;
  position: relative;
  &::before {
    display: block;
    content: ' ';
    width: 7px;
    height: 7px;
    border: #ededed 1px solid;
    position: absolute;
    bottom: -5px;
    left: 50%;
    margin-left: -5px;
    background: #fff;
    box-shadow: #fff 0 0 0 5px;
    border-radius: 3px;
  }
  &.nav-without-line {
    padding: 0;
    border: 0;
    &::before {
      content: none;
    }
  }
  .wrapper-image {
    width: 540px;
    height: 305px;
    padding-top: 30px;
    padding-bottom: 20px;
    margin: auto;
    .principal-image {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .description-wrapper {
    width: 430px;
    margin: 0 auto;
    margin-bottom: 25px;

    .description {
      overflow: hidden;
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: 0.15em;
      animation: typing 2.5s steps(40, end);
    }
    .description:nth-child(2) {
      white-space: nowrap;
      overflow: hidden;
      opacity: 0;
      animation: typing2 2.5s steps(40, end);
      animation-delay: 2.5s;
      animation-fill-mode: forwards;
    }
  }
  a {
    font-weight: bold;
    font-size: 16px;
    color: #2c3e50;
    text-decoration: unset;
    &.router-link-active {
      color: #1f8ed5;
    }
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes typing2 {
  from {
    opacity: 1;
    width: 0;
  }
  to {
    opacity: 1;
    width: 100%;
  }
}

@media (max-width: 576px) {
  .nav {
    padding-left: 0;
    padding-right: 0;
    .wrapper-image {
      width: 340px;
      height: 200px;
    }
    .description-wrapper {
      width: 340px;
      .description {
        letter-spacing: unset;
      }
    }
  }
}
</style>
