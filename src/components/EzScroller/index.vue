<template>
  <div ref="scroller" class="ez-scroller">
    <div class="ez-scroller-content" ref="content" :style="{ width: contentWidth }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'EzScroller',

  props: {
    scrollbar: {
      type: Boolean,
      default: false
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 10
    }
  },

  data () {
    return {
      scroller: null,
      contentWidth: ''
    }
  },

  mounted () {
    this.init()
  },

  destroyed () {
    this.destroy()
    this.scroller = null
  },

  methods: {
    init () {
      const content = this.$refs.content
      if (!this.$refs.scroller) return
      if (this.scrollX && content.scrollWidth > content.offsetWidth) {
        this.contentWidth = content.scrollWidth + 'px'
      }
      const options = {
        bounce: false,
        probeType: 3,
        preventDefault: false,
        scrollX: this.scrollX,
        scrollY: this.scrollY,
        scrollbar: this.scrollbar || { fade: false, interactive: true },
        mouseWheel: {
          speed: 20,
          easeTime: 100
        }
      }
      this.$nextTick(() => {
        const scroller = this.$refs.scroller
        this.scroller = new BScroll(scroller, options)
        this.scroller.on('scroll', this.scroll)
        this.scroller.on('scrollEnd', this.scrollEnd)
      })
    },

    scroll (index) {
      this.$emit('scroll', index)
      if (index.y - this.offset <= this.scroller.maxScrollY) {
        this.$emit('will-end', index.y)
      }
    },

    scrollEnd (index) {
      this.$emit('scroll-end', index)
    },

    disable () {
      this.scroller.disable()
    },

    enable () {
      this.scroller.enable()
    },

    refresh () {
      this.scroller.refresh()
    },

    scrollTo () {
      this.scroller.scrollTo.apply(this.scroll, arguments)
    },

    scrollToElement () {
      this.scroller.scrollToElement.apply(this.scroller, arguments)
    },

    destroy () {
      this.scroller.destroy()
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
