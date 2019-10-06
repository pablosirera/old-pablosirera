<template>
  <img :class="size" :alt="alt" :src="getIconPath" class="icon" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
    },
    alt: {
      type: String,
      required: true,
    },
  },
  computed: {
    getIconPath() {
      return require(`@/assets/icons/${this.name}.png`)
    },
  },
}
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
