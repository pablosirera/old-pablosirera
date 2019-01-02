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
        :date-locale="getLocaleLanguage"
        class="about-timeline"/>
    </section>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import PageLayout from '@/components/PageLayout.vue'
import Timeline from 'timeline-vuejs'

export default Vue.extend({
  name: 'AboutView',
  components: {
    PageLayout,
    Timeline
  },
  computed: {
    ...mapGetters('langs', ['getLocaleLanguage']),
    messageWhenNoItems(): string {
      return (this as any).$t('about.timeline.emptyData')
    },
    timelineItems() {
      const self = this as any
      return [
        {
          from: new Date(2017, 2),
          title: 'Sopra Steria',
          description: `${self.$t('about.timeline.descSopra')}`
        },
        {
          from: new Date(2015, 5),
          title: 'Eco Bon Profit',
          description: `${self.$t('about.timeline.descBonProfit')}`
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
  /deep/ .about-timeline.timeline {
    margin-top: 30px;
    .wrapper-item {
      grid-template-columns: 60px 1fr;
    }
  }
}
@media (max-width: 576px) {
  .about {
    width: 90%;
    .about-timeline {
      /deep/ .wrapper-item {
        .section-year {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
