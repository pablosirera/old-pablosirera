import Vue, { VNodeDirective } from 'vue'
import hljs from 'highlight.js'

export const highlightjsDirective = Vue.directive('highlightjs', {
  bind: function(el: HTMLElement, binding: VNodeDirective) {
    let targets = el.querySelectorAll('code')
    targets.forEach((target: HTMLElement) => {
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function(el: HTMLElement, binding: VNodeDirective) {
    let targets = el.querySelectorAll('code')
    targets.forEach((target: HTMLElement) => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
})
