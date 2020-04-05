<template>
  <svg class="ez-svg" :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'EzSvg',

  props: {
    iconClass: {
      type: String,
      required: true
    },

    className: {
      type: String,
      default: ''
    }
  },

  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },

    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
