<template>
  <header class="nav">
    <div class="languages">
      <span
        v-for="(lang, index) in arrayLanguages"
        :key="index"
        :class="getLanguageClass(lang.key)"
        @click="changeLanguage(lang.key)">
        <img
          v-if="hasIcon(lang.key)"
          :src="getIconUrl(lang.key)"
          :alt="lang.alt">
        <span v-else>{{ lang.text }}</span>
      </span>
    </div>
    <section
      v-if="isOnHomeView"
      class="description-wrapper">
      <p class="description">{{ $t('introduction.line1') }}</p>
      <p class="description">{{ $t('introduction.line2') }}</p>
    </section>
    <router-link
      class="link"
      to="/">Home</router-link> |
    <router-link
      class="link"
      to="/projects">Projects</router-link> |
    <router-link
      class="link"
      to="/blog">Blog</router-link> |
    <router-link
      class="link"
      to="/about">About</router-link>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { LANGUAGES } from '@/langs/i18n'

export default Vue.extend({
  name: 'AppHeader',
  props: {
    language: {
      type: String,
      default: null
    },
    isOnHomeView: {
      type: Boolean
    }
  },
  computed: {
    arrayLanguages() {
      if (LANGUAGES) return LANGUAGES
      return []
    },
    defaultLanguage(): string {
      return this.language
    }
  },
  methods: {
    changeLanguage(languageSelected: string) {
      this.$emit('on-change-language', languageSelected)
    },
    getIconUrl(name: string): string {
      try {
        return require(`@/assets/icons/langs/${name}.png`)
      } catch (error) {
        return ''
      }
    },
    getLanguageClass(key: string): { [key: string]: boolean } {
      return {
        language: true,
        selected: this.defaultLanguage === key
      }
    },
    hasIcon(key: string): boolean {
      return !!this.getIconUrl(key)
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
  .description-wrapper {
    width: 430px;
    margin: 0 auto;
    margin-bottom: 40px;

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
    &.router-link-exact-active {
      color: #1f8ed5;
    }
  }
  .languages {
    position: absolute;
    right: 0;
    top: 0;
    .language {
      cursor: pointer;
      margin-right: 10px;
      img {
        width: 20px;
        opacity: 0.3;
      }
      &.selected {
        span {
          font-weight: bolder;
        }
        img {
          opacity: 1;
        }
      }
      &:hover {
        font-weight: bolder;
      }
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
</style>
