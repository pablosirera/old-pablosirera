<template>
  <div class="project-card">
    <div>
      <div class="wrapper-title">
        <!-- TODO: translate alt -->
        <img src="@/assets/icons/repo.svg" alt="Repo icon" />
        <h1 class="title">
          <a :href="project.url" class="title-link">
            {{ project.name }}
          </a>
        </h1>
      </div>
      <p class="description">{{ this.$t(project.description) }}</p>
    </div>
    <p class="info">
      <span v-if="project.language" class="language mr-16">
        <span class="dot-language" :class="dotLanguageClasses" />
        <span class="language-text">{{ project.language }}</span>
      </span>
      <a class="link" :href="`${project.url}/stargazers`">
        <!-- TODO: translate alt -->
        <img src="@/assets/icons/star.svg" alt="Star icon" />
        {{ project.stars }}
      </a>
      <a class="link" :href="`${project.url}/network/members`">
        <!-- TODO: translate alt -->
        <img src="@/assets/icons/repo-forked.svg" alt="Repo forked icon" />
        {{ project.forks }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    dotLanguageClasses() {
      return {
        'dot-language-vue': this.project.language === 'Vue',
        'dot-language-js': this.project.language === 'JavaScript',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.mr-16 {
  margin-right: 16px;
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  border: 1px solid #eaecef;
  padding: 16px;
  text-align: initial;
  margin-bottom: 16px;
  border-radius: 3px;

  .wrapper-title {
    display: flex;

    .title {
      font-size: 14px;
      margin-left: 8px;

      &-link {
        color: #0366d6;
        text-decoration: none;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .description {
    margin-top: 8px;
    margin-bottom: 16px;
    text-align: initial;
    font-size: 12px;
  }

  .info {
    font-size: 12px;
    display: flex;

    .dot-language {
      position: relative;
      top: 1px;
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 3px;

      &-vue {
        background-color: #2c3e50;
      }

      &-js {
        background-color: #f1e05a;
      }
    }

    .link {
      color: #586069;
      text-decoration: none;
      margin-right: 24px;
      display: flex;
      align-items: flex-start;

      &:hover {
        text-decoration: underline;
        color: #0366d6;
      }

      img {
        padding-right: 3px;
      }
    }
  }
}
</style>
