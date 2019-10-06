import Vue from 'vue'
import hljs from 'highlight.js'

export const highlightjsDirective = Vue.directive('highlightjs', {
  bind: function(el, binding) {
    let targets = el.querySelectorAll('code')
    targets.forEach(target => {
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function(el, binding) {
    let targets = el.querySelectorAll('code')
    targets.forEach(target => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  },
})
