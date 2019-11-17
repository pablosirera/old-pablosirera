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
          image: 'images/timeline-vuejs.png',
          name: 'Timeline VueJS',
          description: this.$t('projects.timeline'),
          links: [
            {
              url: 'https://github.com/pablosirera/timeline-vuejs',
              icon: 'github',
            },
            {
              url: 'https://github.com/pablosirera/timeline-vuejs',
              icon: 'web',
            },
          ],
        },
        {
          image: 'images/my-learning-tracker.png',
          name: 'My Learning Tracker',
          description: this.$t('projects.learningTracker'),
          links: [
            {
              url: 'https://github.com/pablosirera/My-Learning-Tracker',
              icon: 'github',
            },
            {
              url: 'https://github.com/pablosirera/My-Learning-Tracker',
              icon: 'web',
            },
          ],
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
