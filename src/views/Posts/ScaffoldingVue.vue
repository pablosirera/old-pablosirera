<template>
  <article class="article-blog">
    <h2>{{ $t('posts.scaffoldingVue.title') }}</h2>
    <div class="body-article">
      <p v-html="$t('posts.scaffoldingVue.p1')" />
      <p v-html="$t('posts.scaffoldingVue.p2')" />
      <p v-html="$t('posts.scaffoldingVue.p3')" />
      <h3 class="secondary-title">
        {{ $t('posts.scaffoldingVue.title2') }}
      </h3>
      <p v-html="$t('posts.scaffoldingVue.p4')" />
      <span class="image">
        <img
          src="@/assets/images/scaffolding/1.png"
          :alt="$t('posts.scaffoldingVue.alt1')"
        />
      </span>
      <p v-html="$t('posts.scaffoldingVue.p5')" />
      <span class="image">
        <img
          src="@/assets/images/scaffolding/2.png"
          :alt="$t('posts.scaffoldingVue.alt2')"
        />
      </span>
      <h3 class="secondary-title">
        {{ $t('posts.scaffoldingVue.title3') }}
      </h3>
      <p v-html="$t('posts.scaffoldingVue.p6')" />
      <span class="image">
        <img
          src="@/assets/images/scaffolding/3.png"
          :alt="$t('posts.scaffoldingVue.alt3')"
        />
      </span>
      <p v-html="$t('posts.scaffoldingVue.p7')" />
      <p v-html="$t('posts.scaffoldingVue.p8')" />
      <h3 class="secondary-title">
        {{ $t('posts.scaffoldingVue.title4') }}
      </h3>
      <p v-html="$t('posts.scaffoldingVue.p9')" />
      <span class="image">
        <img
          src="@/assets/images/scaffolding/4.png"
          :alt="$t('posts.scaffoldingVue.alt4')"
        />
      </span>
      <p v-html="$t('posts.scaffoldingVue.p10')" />
      <h3 class="secondary-title">
        {{ $t('posts.scaffoldingVue.title5') }}
      </h3>
      <p v-html="$t('posts.scaffoldingVue.p11')" />
      <span class="image">
        <img
          src="@/assets/images/scaffolding/5.png"
          :alt="$t('posts.scaffoldingVue.alt5')"
        />
      </span>
      <p v-html="$t('posts.scaffoldingVue.p12')" />
      <h3 class="secondary-title">
        {{ $t('posts.scaffoldingVue.title6') }}
      </h3>
      <p v-html="$t('posts.scaffoldingVue.p13')" />
      <p v-html="$t('posts.scaffoldingVue.p14')" />
      <p v-html="$t('posts.scaffoldingVue.p15')" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'ScaffoldingVue',
}
</script>
