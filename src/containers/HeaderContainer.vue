<template>
  <PageLayout>
    <AppHeader
      :is-on-home-view="isOnHomeView"
      :language="language"
      @on-change-language="changeLanguage"/>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { State as langState } from '@/store/modules/language/state'
import { State as globalState } from '@/store/modules/global/state'
import AppHeader from '../components/Header.vue'
import PageLayout from '@/components/PageLayout.vue'

export default Vue.extend({
  name: 'HeaderContainer',
  components: {
    AppHeader,
    PageLayout
  },
  computed: {
    ...mapState('langs', {
      language: (state: langState) => state.language
    }),
    ...mapState('global', {
      isOnHomeView: (state: globalState) => state.isOnHome
    })
  },
  methods: {
    ...mapActions('langs', ['changeLanguage'])
  }
})
</script>
