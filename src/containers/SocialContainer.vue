<template>
  <div>
    <a
      v-tooltip.bottom="'twitter.com/pablosirera'"
      target="_blank"
      rel="noopener noreferrer"
      class="link-icon"
      href="https://twitter.com/pablosirera"
    >
      <Icon name="twitter" alt="pablosirera" />
    </a>
    <a
      v-tooltip.bottom="'instagram.com/pablodeveloper'"
      target="_blank"
      rel="noopener noreferrer"
      class="link-icon"
      href="https://www.instagram.com/pablodeveloper"
    >
      <Icon name="instagram" alt="pablodeveloper" />
    </a>
    <a
      v-tooltip.bottom="'twitch.tv/pablosirera'"
      target="_blank"
      rel="noopener noreferrer"
      class="link-icon"
      href="https://www.twitch.tv/pablosirera"
    >
      <Icon name="twitch" alt="pablosirera" />
    </a>
    <a
      v-tooltip.bottom="'linkedin.com/in/pablosireramata'"
      target="_blank"
      rel="noopener noreferrer"
      class="link-icon"
      href="https://www.linkedin.com/in/pablosireramata"
    >
      <Icon name="linkedin" alt="pablosirera" />
    </a>
    <a
      v-tooltip.bottom="'github.com/pablosirera'"
      target="_blank"
      rel="noopener noreferrer"
      class="link-icon"
      href="https://github.com/pablosirera"
    >
      <Icon name="github" alt="pablosirera" />
    </a>
    <a
      v-tooltip.bottom="'psirera4@gmail.com'"
      :href="mailtoContent"
      class="link-icon"
    >
      <Icon name="mail" alt="psirera4@gmail.com" />
    </a>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'SocialContainer',
  components: {
    Icon,
  },
  data: () => ({
    mailtoContent:
      'mailto:psirera4@gmail.com?subject=Email%20from%20your%20porfolio',
  }),
}
</script>

<style lang="scss" scoped>
.link-icon {
  padding: 10px;
}
</style>
