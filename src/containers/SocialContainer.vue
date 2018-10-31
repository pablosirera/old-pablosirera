<template>
  <div>
    <a 
      v-tooltip.bottom="'twitter.com/pablosirera'"
      target="_blank"
      class="link-icon"
      href="https://twitter.com/pablosirera">
      <Icon name="twitter"/>
    </a>
    <a 
      v-tooltip.bottom="'instagram.com/pablodeveloper'"
      target="_blank"
      class="link-icon"
      href="https://www.instagram.com/pablodeveloper">
      <Icon name="instagram"/>
    </a>
    <a 
      v-tooltip.bottom="'linkedin.com/in/pablosireramata'"
      target="_blank"
      class="link-icon"
      href="https://www.linkedin.com/in/pablosireramata">
      <Icon name="linkedin"/>
    </a>
    <a 
      v-tooltip.bottom="'github.com/pablosirera'"
      target="_blank"
      class="link-icon"
      href="https://github.com/pablosirera">
      <Icon name="github"/>
    </a>
    <a 
      v-tooltip.bottom="'psirera4@gmail.com'"
      :href="mailtoContent"
      class="link-icon">
      <Icon name="mail"/>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '@/components/Icon.vue'

export default Vue.extend({
  name: 'SocialContainer',
  components: {
    Icon
  },
  data: (): {
    mailtoContent: string
  } => ({
    mailtoContent: 'mailto:psirera4@gmail.com?subject=Email%20from%20your%20porfolio'
  })
})
</script>

<style lang="scss" scoped>
.link-icon {
  padding: 10px;
}
</style>
