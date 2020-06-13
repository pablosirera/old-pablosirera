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
import { ROUTES, PROJECTS } from '@/shared/constants'

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
      return PROJECTS
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
