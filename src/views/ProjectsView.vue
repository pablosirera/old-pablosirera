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
  data: (): {
    projects: ProjectCardModel[]
  } => ({
    projects: [
      {
        image: 'images/timeline-vuejs.png',
        name: 'Timeline VueJS',
        description: 'lorem ipsum aoishduha uwehfewih foehwiofewoh fewocoiwe hiowh ef',
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
        description: 'lorem ipsum aoishduha uwehfewih foehwiofewoh fewocoiwe hiowh ef',
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
      }
    ]
  })
})
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & .project {
    margin-left: 25px;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
