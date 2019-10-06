<template>
  <article class="article-blog">
    <h2>{{ $t('posts.addI18nVue.title') }}</h2>
    <div class="body-article">
      <p v-html="$t('posts.addI18nVue.p1')" />
      <p v-html="$t('posts.addI18nVue.p2')" />

      <h3 class="secondary-title">{{ $t('posts.addI18nVue.title2') }}</h3>
      <p>{{ $t('posts.addI18nVue.p3') }}</p>
      <pre v-highlightjs>
        <code class="bash">  npm install vue-i18n --save</code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p4')" />
      <p v-html="$t('posts.addI18nVue.p5')" />
      <p v-html="$t('posts.addI18nVue.p6')" />
      <p v-html="$t('posts.addI18nVue.p7')" />
      <pre v-highlightjs>
        <code class="js">
    import Vue from 'vue'
    import VueI18n from 'vue-i18n'

    Vue.use(VueI18n)

    const messages = {
      es: {},
      en: {}
    }
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p8')" />
      <p v-html="$t('posts.addI18nVue.p9')" />
      <pre v-highlightjs>
        <code class="js">
    export const i18n = new VueI18n({
      locale: 'es',
      fallbackLocale: 'en',
      messages
    })
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p10')" />
      <p v-html="$t('posts.addI18nVue.p11')" />
      <pre v-highlightjs>
        <code class="js">
    locale: window.navigator.language.split('-')[0]
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p12')" />
      <pre v-highlightjs>
        <code class="js">
    import { i18n } from '@/plugins/i18n'
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p13')" />
      <pre v-highlightjs>
        <code class="js">
    import Vue from 'vue'
    import App from './App.vue'
    import { i18n } from '@/plugins/i18n'

    Vue.config.productionTip = false

    new Vue({
      i18n,
      render: h => h(App)
    }).$mount('#app')
        </code>
      </pre>
      <h3 class="secondary-title">
        {{ $t('posts.addI18nVue.title3') }}
      </h3>
      <p v-html="$t('posts.addI18nVue.p14')" />
      <pre v-highlightjs>
        <code class="js">
    const messages = {
      es: {
        hello: 'Hola Mundo!'
      },
      en: {
        hello: 'Hello World!'
      }
    }
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p15')" />
      <p v-html="$t('posts.addI18nVue.p16')" />
      <pre v-highlightjs>
        <code class="hljs">
    {{ sourceCode }}
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p17')" />
      <p v-html="$t('posts.addI18nVue.p18')" />
      <pre v-highlightjs>
        <code class="js">
    const messages = {
      es: {
        hello: {
          world: 'Hola Mundo!'
        }
      },
      en: {
        hello: {
          world: 'Hello World!'
        }
      }
    }
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p19')" />
      <pre v-highlightjs>
        <code class="hljs">
    {{ sourceCode2 }}
        </code>
      </pre>
      <h3 class="secondary-title">
        {{ $t('posts.addI18nVue.title4') }}
      </h3>
      <p v-html="$t('posts.addI18nVue.p20')" />
      <p v-html="$t('posts.addI18nVue.p21')" />
      <pre v-highlightjs>
        <code class="js">
    // Language.vue
    &lt;template&gt;
      &lt;div&gt;
        &lt;button
          v-for="language in languages"
          :key="language.locale"
          @click="changeLanguage(language.locale)"&gt;
            {{ sourceCode3 }}
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import { i18n } from '@/plugins/i18n'

    export default {
      name: 'LanguageComponent',
      data: () => ({
        languages: [
          { locale: 'es', title: 'Español' },
          { locale: 'en', title: 'Inglés' }
        ]
      }),
      methods: {
        changeLanguage(locale) {
          i18n.locale = locale
        }
      }
    }
    &lt;/script&gt;
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p22')" />
      <pre v-highlightjs>
        <code class="js">
    // App.vue
    &lt;template&gt;
      ...
      &lt;Language /&gt;
      ...
    &lt;/template&gt;

    &lt;script&gt;
    import Language from './components/Language.vue'

    export default {
      name: 'App',
      components: {
        Language
      }
    }
    &lt;/script&gt;
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p23')" />
      <p v-html="$t('posts.addI18nVue.p24')" />
      <pre v-highlightjs>
        <code class="js">
    const messages = {
      es: {
        hello: {
          world: 'Hola Mundo!'
        },
        spanish: 'Español',
        english: 'Inglés'
      },
      en: {
        hello: {
          world: 'Hello World!'
        },
        spanish: 'Spanish',
        english: 'English'
      }
    }
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p25')" />
      <pre v-highlightjs>
        <code class="js">
    import { i18n } from '@/plugins/i18n'

    export default {
      name: 'LanguageComponent',
      computed: {
        languages() {
          return [
            { locale: 'es', title: this.$t('spanish') },
            { locale: 'en', title: this.$t('english') }
          ]
        }
      },
      methods: {
        changeLanguage(locale) {
          i18n.locale = locale
        }
      }
    }
        </code>
      </pre>
      <p v-html="$t('posts.addI18nVue.p26')" />
      <p v-html="$t('posts.addI18nVue.p27')" />
      <p v-html="$t('posts.addI18nVue.p28')" />
      <p v-html="$t('posts.addI18nVue.p29')" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'Addi18nVue',
  data: () => ({
    sourceCode: `<h1>{{ $t('hello') }}</h1>`,
    sourceCode2: `<h1>{{ $t('hello.world') }}</h1>`,
    sourceCode3: `{{ language.title }}`,
  }),
}
</script>
