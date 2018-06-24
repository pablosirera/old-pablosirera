<template>
  <AppHeader
    :language="language"
    @on-change-language="changeLanguage"/>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { State } from '@/store/modules/language/state'
import AppHeader from '../components/Header.vue'

export default Vue.extend({
  name: 'HeaderContainer',
  components: {
    AppHeader
  },
  computed: {
    ...mapState('langs', {
      language: (state: State) => state.language
    })
  },
  methods: {
    ...mapActions('langs', ['changeLanguage'])
  }
})
</script>
