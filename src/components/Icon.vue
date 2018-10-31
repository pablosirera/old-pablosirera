<template>
  <img
    :class="size" 
    :src="getIconPath" 
    class="icon">
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  computed: {
    getIconPath(): string {
      return require(`@/assets/icons/${this.name}.png`)
    }
  }
})
</script>

<style lang="scss" scoped>
.icon {
  &.small {
    width: 16px;
    height: 16px;
  }

  &.medium {
    width: 24px;
    height: 24px;
  }

  &.big {
    width: 32px;
    height: 32px;
  }
}
</style>
