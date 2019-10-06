<template>
  <PageLayout>
    <section class="about">
      <div class="about-description">
        <p>{{ $t('about.description1') }}</p>
        <p>
          {{ $t('about.description2_1') }}
          <a class="link" target="_blank" href="https://github.com/pablosirera"
            >GitHub</a
          >
          {{ $t('about.description2_2') }}
          <a
            class="link"
            target="_blank"
            href="https://github.com/pablosirera/My-Learning-Tracker"
            >Learning Tracker</a
          >
          {{ $t('about.description2_3') }}
        </p>
        <p>
          {{ $t('about.description3_1') }}
          <a
            class="link"
            target="_blank"
            href="https://www.instagram.com/pablodeveloper"
            >Instagram</a
          >
          {{ $t('about.description3_2') }}
          <a class="link" target="_blank" href="https://twitter.com/pablosirera"
            >Twitter</a
          >
        </p>
      </div>
      <Timeline
        :message-when-no-items="messageWhenNoItems"
        :timeline-items="timelineItems"
        :date-locale="getLocaleLanguage"
        class="about-timeline"
      />
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters } from 'vuex'
import PageLayout from '@/components/PageLayout.vue'
import Timeline from 'timeline-vuejs'

export default {
  name: 'AboutView',
  components: {
    PageLayout,
    Timeline,
  },
  computed: {
    ...mapGetters('langs', ['getLocaleLanguage']),
    messageWhenNoItems() {
      return this.$t('about.timeline.emptyData')
    },
    timelineItems() {
      return [
        {
          from: new Date(2017, 2),
          title: 'Sopra Steria',
          description: `${this.$t('about.timeline.descSopra')}`,
        },
        {
          from: new Date(2015, 5),
          title: 'Eco Bon Profit',
          description: `${this.$t('about.timeline.descBonProfit')}`,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  text-align: justify;
  width: 60%;
  margin: 0 auto;

  @media (max-width: 540px) {
    width: 90%;
  }

  .link {
    text-decoration: none;
    color: #09f;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  /deep/ .about-timeline.timeline {
    margin-top: 30px;

    .wrapper-item {
      grid-template-columns: 60px 1fr;
    }
  }
}
</style>
