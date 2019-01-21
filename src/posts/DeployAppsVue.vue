<template>
  <article class="article-blog">
    <h2>{{ $t('posts.deployAppsVue.title') }}</h2>
    <div class="body-article">
      <p>{{ $t('posts.deployAppsVue.p1') }}</p>
      <p v-html="$t('posts.deployAppsVue.p2')"/>
      <pre v-highlightjs>
        <code class="bash">  git checkout -b github-pages</code>
      </pre>
      <p>{{ $t('posts.deployAppsVue.p3') }}</p>
      <p>
        {{ $t('posts.deployAppsVue.p4-1') }}
        <code
          class="simple-code"
        >github-pages.sh</code>{{ $t('posts.deployAppsVue.p4-2') }}
      </p>
      <pre v-highlightjs>
        <code class="shell">
    #!/usr/bin/env sh

    # abort on errors
    set -e

    # build
    npm run build

    # copy README.md
    cp README.md dist/

    # navigate into the build output directory
    cd dist

    git init
    git add -A
    git commit -m 'deploy'

    # if you are deploying to https://USERNAME.github.io
    git push -f git@github.com:USERNAME/USERNAME.github.io.git master

    cd -
        </code>
      </pre>
      <p>{{ $t('posts.deployAppsVue.p5') }}
      <code class="simple-code">"build": "vue-cli-service build"</code></p>
      <p>{{ $t('posts.deployAppsVue.p6') }}</p>
      <p>
        {{ $t('posts.deployAppsVue.p7-1') }}
        <code class="simple-code">sh github-pages.sh</code>{{ $t('posts.deployAppsVue.p7-2') }}
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DeployAppsVue'
})
</script>
