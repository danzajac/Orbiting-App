export { default as Editor } from '../../components/Editor.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as ContentAbout } from '../../components/Content/About.vue'
export { default as ContentHelp } from '../../components/Content/Help.vue'
export { default as ContentHistory } from '../../components/Content/History.vue'
export { default as ContentSettings } from '../../components/Content/Settings.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
