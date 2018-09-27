<template>
  <PageLayout>
    <section class="about">
      <div class="about-description">
        <p>I'm Pablo Sirera, web developer based on Valencia. I'm interested in everything related to the web and I like to learn new things constantly and try them.</p>
        <p>For more information about me, I'm created a <a href="#">Learning Tracker</a> to visit my experience and the knowledge I have of technologies.</p>
      </div>
      <Timeline
        :message-when-no-items="messageWhenNoItems"
        :timeline-items="timelineItems"
        class="about-timeline"/>
    </section>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageLayout from '@/components/PageLayout.vue'
import Timeline from 'timeline-vuejs'

export default Vue.extend({
  name: 'AboutView',
  components: {
    PageLayout,
    Timeline
  },
  data: () => ({
    messageWhenNoItems: 'No hay datos.',
    timelineItems: [
      {
        year: {
          from: '2017',
          to: 'Currently'
        },
        items: [
          {
            nameMonth: 'March',
            title: 'Sopra Steria',
            description:
              '<b>Desarrollador frontend</b> desarrollando aplicaciones tanto para web como para móvil. Usando Angular, VueJS, HTML, CSS, SASS, Ionic.'
          }
        ]
      },
      {
        year: {
          from: '2015',
          to: '2017'
        },
        items: [
          {
            nameMonth: 'Juny',
            title: 'Eco Bon Profit',
            description:
              '<b>Gestor e-commerce</b> de un comercio electrónico para una mediana empresa en la industria cárnica.'
          }
        ]
      }
    ]
  })
})
</script>

<style lang="scss" scoped>
.about {
  text-align: justify;
  width: 60%;
  margin: 0 auto;
  .about-timeline {
    margin-top: 30px;
  }
}
</style>
