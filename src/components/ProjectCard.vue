<template>
  <div class="project-card">
    <div class="wrapper-image">
      <img
        :src="getUrlImage(projectData.image)"
        alt="Image">
    </div>
    <div class="description">
      <h4 class="title">{{ projectData.name }}</h4>
      <p class="description-text">{{ projectData.description }}</p>
      <div class="links">
        <div
          v-for="(link, index) in projectData.links"
          :key="index"
          class="link">
          <a
            :href="link.url"
            target="_blank">
            <img
              :src="getUrlImage(`icons/${link.icon}.png`)"
              :alt="link.icon">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProjectCardModel } from '@/models/ProjectCardModel'

export default Vue.extend({
  name: 'ProjectCard',
  props: {
    projectData: {
      type: Object,
      default: new ProjectCardModel()
    } as PropOptions<ProjectCardModel>
  },
  methods: {
    getUrlImage(image: string) {
      return require(`@/assets/${image}`)
    }
  }
})
</script>

<style lang="scss" scoped>
.project-card {
  border: 1px solid grey;
  max-width: 280px;

  .wrapper-image {
    border-bottom: 1px solid grey;
    max-height: 220px;
    min-height: 220px;
    overflow: hidden;
    padding: 7px;
    display: flex;

    img {
      width: 100%;
    }
  }

  .description {
    background-color: #f9f9f9;
    min-height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-weight: 900;
      font-size: 18px;
      padding-bottom: 10px;
    }

    .links {
      display: flex;
      justify-content: center;
      padding-top: 8px;

      .link {
        padding-left: 20px;

        &:first-child {
          padding-left: 0;
        }
      }
    }
  }
}
</style>
