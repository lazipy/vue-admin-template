<template>
  <div class="ez-tag-view-container">
    <ez-scroller ref="scroller" class="tag-view-wrapper">
      <router-link
        ref="tag"
        class="tag-view-item"
        :class="isActive(tag) ? 'active' : ''"
        v-for="tag in Array.from(visitedViews)"
        :to="tag.path"
        :key="tag.path"
        @contextmenu.prevent.native="openMenu(tag, $event)"
      >
        {{ tag.title }}
        <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
      </router-link>
    </ez-scroller>
    <ul class="contextmenu" v-show="visible" :style="{ left: left + 'px', top: top + 'px' }">
      <li @click="closeSelectedTag(selectedTag)">Close</li>
      <li @click="closeOthersTags">Close Other</li>
      <li @click="closeAllTags">Close All</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EzTagView',

  data () {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {}
    }
  },

  computed: {
    ...mapState({
      visitedViews: state => state.common.visitedViews
    })
  },

  watch: {
    '$route' () {
      this.addViewTags()
      this.moveToCurrentTag()
    },

    visible (val) {
      if (val) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },

  mounted () {
    this.addViewTags()
  },

  methods: {
    generateRoute () {
      if (this.$route.name) {
        return this.$route
      }
      return false
    },

    isActive (route) {
      return route.path === this.$route.path || route.name === this.$route.name
    },

    addViewTags () {
      const route = this.generateRoute()
      if (!route) {
        return false
      }
      this.$store.dispatch('common/ADD_VISITED', route)
    },

    moveToCurrentTag () {
      this.$nextTick(() => {
        for (const tag of this.$refs.tag) {
          if (tag.to === this.$route.path) {
            const scroller = this.$refs.scroller
            scroller.scrollToElement(tag.$el)
            break
          }
        }
      })
    },

    closeSelectedTag (view) {
      this.$store.dispatch('common/DEL_VISITED', view).then((views) => {
        if (this.isActive(view)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
    },

    closeOthersTags () {
      this.$router.push(this.selectedTag.path)
      this.$store.dispatch('common/DEL_OTHER', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },

    closeAllTags () {
      this.$store.dispatch('common/DEL_ALL')
      this.$router.push('/')
    },

    openMenu (tag, e) {
      this.visible = true
      this.selectedTag = tag
      this.left = e.clientX
      this.top = e.clientY
    },

    closeMenu () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
