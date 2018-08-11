<template>
  <section id="nav">
    <div class="languages">
      <span 
        :class="{ 'selected': defaultLanguage === 'es' }" 
        @click="changeLanguage('es')">
        ES
      </span>
      <span
        :class="{ 'selected': defaultLanguage === 'en' }" 
        @click="changeLanguage('en')">
        EN
      </span>
    </div>
    <header>
      <p class="description">{{ $t('introduction.line1') }}</p>
      <p class="description">{{ $t('introduction.line2') }}</p>
    </header>
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/about">About</router-link>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppHeader',
  props: {
    language: {
      type: String,
      default: null
    }
  },
  data: () => ({
    defaultLanguage: 'en'
  }),
  watch: {
    language() {
      this.defaultLanguage = this.language
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
#nav {
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
  header {
    width: 430px;
    margin: 0 auto;
    margin-bottom: 40px;

    .description {
      overflow: hidden;
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: 0.15em;
      animation: typing 3.5s steps(40, end);
    }
    .description:nth-child(2) {
      white-space: nowrap;
      overflow: hidden;
      opacity: 0;
      animation: typing2 3.5s steps(40, end);
      animation-delay: 3.5s;
      animation-fill-mode: forwards;
    }
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .languages {
    position: absolute;
    right: 0;
    top: 0;
    span {
      cursor: pointer;
      margin-right: 10px;
      &.selected {
        font-weight: bolder;
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
