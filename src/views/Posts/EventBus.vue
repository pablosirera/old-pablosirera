<template>
  <article class="article-blog">
    <h2>{{ $t('posts.eventBus.title') }}</h2>
    <div class="body-article">
      <p v-html="$t('posts.eventBus.p1')" />
      <h3 class="secondary-title">{{ $t('posts.eventBus.title2') }}</h3>
      <p v-html="$t('posts.eventBus.p2')" />
      <pre v-highlightjs>
        <code class="js">
    // event-bus.js

    import Vue from 'vue'
    export const EventBus = new Vue()
        </code>
      </pre>
      <p v-html="$t('posts.eventBus.p3')" />
      <h3 class="secondary-title">{{ $t('posts.eventBus.title3') }}</h3>
      <p v-html="$t('posts.eventBus.p4')" />
      <pre v-highlightjs>
        <code class="html">
    // TestButton.vue

    &lt;template&gt;
      &lt;button @click="emitGlobalEvent()"&gt;I'm a button&lt;/button&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import { EventBus } from '@/utils/event-bus.js'

    export default {
      name: 'TestButton',
      methods: {
        emitGlobalEvent() {
          EventBus.$emit('i-clicked-button')
        }
      }
    }
    &lt;/script&gt;
        </code>
      </pre>
      <p v-html="$t('posts.eventBus.p5')" />
      <h3 class="secondary-title">{{ $t('posts.eventBus.title4') }}</h3>
      <p v-html="$t('posts.eventBus.p6')" />
      <pre v-highlightjs>
        <code class="js">
    // SomeList.vue

    import { EventBus } from '@/utils/event-bus.js'

    export default {
      name: 'SomeList',
      mounted() {
        this.loadListenEvent()
      },
      methods: {
        loadListenEvent() {
          EventBus.$on('i-clicked-button', this.callbackEventBus)
        },
        callbackEventBus() {
          console.log('event bus has emitted a i-clicked-button event')
        }
      }
    }
        </code>
      </pre>
      <p v-html="$t('posts.eventBus.p7')" />
      <p v-html="$t('posts.eventBus.p8')" />
      <h3 class="secondary-title">{{ $t('posts.eventBus.title5') }}</h3>
      <p v-html="$t('posts.eventBus.p9')" />
      <p v-html="$t('posts.eventBus.p10')" />
      <p v-html="$t('posts.eventBus.p11')" />
      <pre v-highlightjs>
        <code class="js">
    import { EventBus } from '@/utils/event-bus.js'

    // Stop register without callback
    EventBus.$off('i-clicked-button')

    // Stop register with callback
    EventBus.$off('i-clicked-button', () => {
      console.log('EventBus remove i-clicked-button event')
    })

    // Stop all registers
    EventBus.$off()
        </code>
      </pre>
    </div>
  </article>
</template>

<script>
export default {
  name: 'EventBus',
}
</script>
