<template>
  <PageLayout>
    <AppHeader :language="language" @on-change-language="changeLanguage" />
  </PageLayout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppHeader from '../components/AppHeader.vue'
import PageLayout from '@/components/PageLayout.vue'

export default {
  name: 'HeaderContainer',
  components: {
    AppHeader,
    PageLayout,
  },
  computed: {
    ...mapState('langs', {
      language: state => state.language,
    }),
  },
  methods: {
    ...mapActions('langs', ['changeLanguage']),
  },
}
</script>
