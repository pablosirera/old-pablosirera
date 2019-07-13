<template>
  <PageLayout>
    <section class="projects">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project-data="project"
        class="project"/>
    </section>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/PageLayout.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { ProjectCardModel } from '@/models/ProjectCardModel'

export default Vue.extend({
  name: 'ProjectsView',
  components: {
    PageLayout,
    ProjectCard
  },
  computed: {
    projects(): ProjectCardModel[] {
      return [
        {
          image: 'images/timeline-vuejs.png',
          name: 'Timeline VueJS',
          description: this.$t('projects.timeline') as string,
          links: [
            {
              url: 'https://github.com/pablosirera/timeline-vuejs',
              icon: 'github'
            },
            {
              url: 'https://github.com/pablosirera/timeline-vuejs',
              icon: 'web'
            }
          ]
        },
        {
          image: 'images/my-learning-tracker.png',
          name: 'My Learning Tracker',
          description: this.$t('projects.learningTracker') as string,
          links: [
            {
              url: 'https://github.com/pablosirera/My-Learning-Tracker',
              icon: 'github'
            },
            {
              url: 'https://github.com/pablosirera/My-Learning-Tracker',
              icon: 'web'
            }
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & .project {
    margin-left: 25px;

    @media (max-width: 540px) {
      margin-left: 0;
      margin-top: 25px;
    }

    &:first-child {
      margin-left: 0;

      @media (max-width: 540px) {
        margin-top: 0;
      }
    }
  }
}
</style>
