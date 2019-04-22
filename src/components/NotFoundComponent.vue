<template>
  <section class="not-found">
    <div class="wrapper-error">
      <h1>404</h1>
      <h2 class="error-text">{{ $t('notFound.errorText') }}</h2>
    </div>
    <button
      class="button"
      @click="goToHome()">{{ $t('notFound.button') }}</button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NotFoundComponent',
  methods: {
    goToHome() {
      this.$router.push({ name: 'HomeView' })
    }
  }
})
</script>

<style lang="scss" scoped>
.not-found {
  margin-top: 200px;

  @media (max-width: 540px) {
    margin-top: 120px;
  }
  .wrapper-error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 105px;
    }
    .error-text {
      font-size: 50px;
      color: darkgray;
      text-align: right;
      font-weight: bold;
      padding-top: 30px;

      @media (max-width: 540px) {
        padding-top: 20px;
        text-align: center;
      }
    }
  }
  .button {
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    background-color: white;
    font-size: 20px;
    margin-top: 30px;
    color: rgba(0, 0, 0, 0.54);
    &:hover {
      cursor: pointer;
      color: rgba(0, 0, 0, 0.68);
      border-color: rgba(0, 0, 0, 0.54);
    }
    &:focus {
      outline: 0;
    }
    &:active {
      border-color: rgba(0, 0, 0, 0.54);
    }
  }
}
</style>
