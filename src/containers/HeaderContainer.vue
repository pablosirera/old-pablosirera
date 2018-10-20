<template>
  <PageLayout>
    <AppHeader
      :language="language"
      @on-change-language="changeLanguage"/>
  </PageLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { State as langState } from '@/store/modules/language/state'
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
    })
  },
  methods: {
    ...mapActions('langs', ['changeLanguage'])
  }
})
</script>
