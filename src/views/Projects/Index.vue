<template>
  <PageLayout>
    <section class="projects">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
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
          stars: 52,
          forks: 13,
          url: 'https://github.com/pablosirera/timeline-vuejs',
        },
        {
          name: 'tracking-plants',
          description: this.$t('projects.trackingPlants'),
          language: 'JavaScript',
          stars: 2,
          forks: 0,
          url: 'https://github.com/pablosirera/tracking-plants',
        },
        {
          name: 'nearest-bin',
          description: this.$t('projects.nearestBin'),
          language: 'Vue',
          stars: 0,
          forks: 0,
          url: 'https://github.com/pablosirera/nearest-bin',
        },
        {
          name: 'who-reviews',
          description: this.$t('projects.whoReviews'),
          language: 'JavaScript',
          stars: 0,
          forks: 0,
          url: 'https://github.com/pablosirera/who-reviews',
        },
        {
          name: 'pablosirera.github.io',
          description: this.$t('projects.portfolio'),
          language: 'Vue',
          stars: 1,
          forks: 0,
          url: 'https://github.com/pablosirera/pablosirera.github.io',
        },
        {
          name: 'My-Learning-Tracker',
          description: this.$t('projects.learningTracker'),
          stars: 2,
          forks: 0,
          url: 'https://github.com/pablosirera/My-Learning-Tracker',
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  width: 60%;
  margin: 0 auto;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    width: 70%;
  }

  @media (max-width: 540px) {
    width: 90%;
  }
}
</style>
