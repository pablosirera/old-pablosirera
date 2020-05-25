<template>
  <PageLayout>
    <section class="projects">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project-data="project"
        class="project"
      />
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/PageLayout.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { ROUTES } from '@/shared/constants'

export default {
  title() {
    return this.$t('projects.title')
  },
  name: 'ProjectsView',
  components: {
    PageLayout,
    ProjectCard,
  },
  computed: {
    projects() {
      return [
        {
          name: 'timeline-vuejs',
          description: this.$t('projects.timeline'),
          language: 'Vue',
          stars: 51,
          forks: 13,
          url: 'https://github.com/pablosirera/timeline-vuejs',
        },
        {
          name: 'My-Learning-Tracker',
          description: this.$t('projects.learningTracker'),
          stars: 2,
          forks: 0,
          url: 'https://github.com/pablosirera/My-Learning-Tracker',
        },
        {
          name: 'tracking-plants',
          description: this.$t('projects.trackingPlants'),
          language: 'JavaScript',
          stars: 1,
          forks: 0,
          url: 'https://github.com/pablosirera/tracking-plants',
        },
        {
          name: 'tracking-plants',
          description: this.$t('projects.trackingPlants'),
          language: 'JavaScript',
          stars: 1,
          forks: 0,
          url: 'https://github.com/pablosirera/tracking-plants',
        },
        {
          name: 'who-reviews',
          description: this.$t('projects.whoReviews'),
          language: 'JavaScript',
          stars: 0,
          forks: 0,
          url: 'https://github.com/pablosirera/who-reviews',
        },
      ]
    },
  },
  mounted() {
    this.$ga.page(ROUTES.PROJECTS)
  },
}
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
