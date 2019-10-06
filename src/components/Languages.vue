<template>
  <div class="languages">
    <span
      v-for="(lang, index) in arrayLanguages"
      :key="index"
      :class="getLanguageClass(lang.key)"
      @click="changeLanguage(lang.key)"
    >
      <img
        v-if="hasIcon(lang.key)"
        :src="getIconUrl(lang.key)"
        :alt="lang.alt"
      />
      <span v-else>{{ lang.text }}</span>
    </span>
  </div>
</template>

<script>
import { LANGUAGES } from '@/shared/langs/i18n'

export default {
  name: 'Languages',
  props: {
    language: {
      type: String,
      default: null,
    },
  },
  computed: {
    arrayLanguages() {
      if (LANGUAGES) return LANGUAGES
      return []
    },
    defaultLanguage() {
      return this.language
    },
  },
  methods: {
    getIconUrl(name) {
      try {
        return require(`@/assets/icons/langs/${name}.png`)
      } catch (error) {
        return ''
      }
    },
    hasIcon(key) {
      return !!this.getIconUrl(key)
    },
    changeLanguage(languageSelected) {
      this.$emit('change-language', languageSelected)
    },
    getLanguageClass(key) {
      return {
        language: true,
        selected: this.defaultLanguage === key,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
</style>
