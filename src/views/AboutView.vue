<template>
  <PageLayout>
    <section class="about">
      <div class="about-description">
        <p>{{ $t('about.description1') }}</p>
        <p>
          {{ $t('about.description2_1') }}
          <a
            class="link"
            target="_blank"
            href="https://github.com/pablosirera/My-Learning-Tracker">Learning Tracker</a>
          {{ $t('about.description2_2') }}
        </p>
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
  computed: {
    messageWhenNoItems(): string {
      return (this as any).$t('about.timeline.emptyData')
    },
    timelineItems() {
      const self = this as any
      return [
        {
          year: {
            from: '2017',
            to: `${self.$t('about.timeline.currently')}`
          },
          items: [
            {
              nameMonth: `${self.$t('about.timeline.march')}`,
              title: 'Sopra Steria',
              description: `${self.$t('about.timeline.descSopra')}`
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
              nameMonth: `${self.$t('about.timeline.juny')}`,
              title: 'Eco Bon Profit',
              description: `${self.$t('about.timeline.descBonProfit')}`
            }
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.about {
  text-align: justify;
  width: 60%;
  margin: 0 auto;
  .link {
    text-decoration: none;
    color: #2c3e50;
    font-weight: 500;
    &:hover {
      color: black;
    }
  }
  .about-timeline {
    margin-top: 30px;
  }
}
</style>
