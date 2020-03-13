<template>
  <header :class="navClasses">
    <!-- <Languages :language="language" @change-language="changeLanguage" /> -->

    <img
      v-if="!isHomeView"
      :alt="$t('home.principalImage')"
      class="personal-logo"
      src="@/assets/images/logo.png"
      @click="navigateToHome()"
    />

    <section v-if="!isNotFound">
      <div class="wrapp-principal-information">
        <div v-if="isHomeView" class="wrapper-image">
          <img
            :alt="$t('home.principalImage')"
            class="principal-image"
            src="@/assets/images/home-image.png"
          />
        </div>
        <section v-if="isHomeView" class="description-wrapper">
          <p class="description">{{ $t('introduction.line1') }}</p>
          <p class="description">{{ $t('introduction.line2') }}</p>
        </section>
      </div>
      <NavLinks />
    </section>
  </header>
</template>

<script>
import { ROUTES } from '@/shared/constants'

export default {
  name: 'AppHeader',
  components: {
    // Languages: () => import('@/components/Languages.vue'),
    NavLinks: () => import('@/components/NavLinks.vue'),
  },
  props: {
    language: {
      type: String,
      default: null,
    },
  },
  computed: {
    isHomeView() {
      return this.$route.path === ROUTES.HOME
    },
    isNotFound() {
      return this.$route.name === 'NotFound'
    },
    navClasses() {
      return {
        nav: true,
        'nav-without-line': this.isNotFound,
      }
    },
  },
  methods: {
    changeLanguage(languageSelected) {
      this.$emit('on-change-language', languageSelected)
    },
    navigateToHome() {
      this.$router.push({ path: ROUTES.HOME })
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px;
  border-bottom: 1px solid #ededed;
  position: relative;

  @media (max-width: 540px) {
    padding-left: 0;
    padding-right: 0;
  }

  &::before {
    display: block;
    content: ' ';
    width: 7px;
    height: 7px;
    border: #ededed 1px solid;
    position: absolute;
    bottom: -5px;
    left: 50%;
    margin-left: -5px;
    background: #fff;
    box-shadow: #fff 0 0 0 5px;
    border-radius: 3px;
  }

  &.nav-without-line {
    padding: 0;
    border: 0;

    &::before {
      content: none;
    }
  }

  .personal-logo {
    margin-top: 40px;
    margin-bottom: 40px;
    width: 160px;
    cursor: pointer;
  }

  .wrapp-principal-information {
    .wrapper-image {
      width: 560px;
      padding-top: 30px;
      padding-bottom: 20px;
      margin: auto;

      @media (max-width: 540px) {
        width: 340px;
        height: 200px;
      }

      .principal-image {
        max-width: 100%;
        max-height: 100%;
        border-radius: 5px;
      }
    }

    .description-wrapper {
      width: 475px;
      margin: 0 auto;
      margin-bottom: 25px;
      font-family: 'Indie Flower', 'Montserrat', Helvetica, Arial, sans-serif;

      @media (max-width: 540px) {
        width: 340px;
      }

      .description {
        overflow: hidden;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: 0.15em;
        animation: typing 2.5s steps(40, end);

        @media (max-width: 540px) {
          letter-spacing: unset;
        }
      }

      .description:nth-child(2) {
        white-space: nowrap;
        overflow: hidden;
        opacity: 0;
        animation: typing2 2.5s steps(40, end);
        animation-delay: 2.5s;
        animation-fill-mode: forwards;
      }
    }
  }
}

// TODO: add this keyframes into scss file
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes typing2 {
  from {
    opacity: 1;
    width: 0;
  }

  to {
    opacity: 1;
    width: 100%;
  }
}
</style>
