<template>
  <div class="ez-side-bar" id="side_bar">
    <ez-scroller>
      <el-aside :width="currentWidth">
        <!-- logo -->
        <div class="logo-wrap" @click="navigatorTo('/')">
          <img class="logo" src="../../assets/images/logo.png" alt="logo" />
          <transition name='el-fade-in-linear'>
            <h1 v-show="!collapsed">Ace Admin Pro</h1>
          </transition>
        </div>
        <!-- menu -->
        <el-menu
          :collapse="collapsed"
          :default-active="defaultActive"
          router
          background-color="#001529"
          text-color="#adb5bd"
          active-text-color="#fff"
        >
          <el-submenu v-for="item in menuConfig" :key="item.path" :index="item.path">
            <template slot="title"><i :class="item.icon"></i> {{ item.title }}</template>
            <template v-for="menuItem in item.children">
              <el-submenu
                v-if="menuItem.children && menuItem.children.length > 0"
                :key="menuItem.path"
                :index="menuItem.path"
              >
                <template slot="title"><i :class="menuItem.icon"></i> {{ menuItem.title }}</template>
                <el-menu-item
                  v-for="subMenuItem in menuItem.children"
                  :key="subMenuItem.path"
                  :index="subMenuItem.path"
                >
                  {{ subMenuItem.title }}
                </el-menu-item>
              </el-submenu>

              <el-menu-item
                v-else
                :key="menuItem.path"
                :index="menuItem.path"
              >
                {{ menuItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
    </ez-scroller>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EzSideBar',

  computed: {
    ...mapState({
      collapsed: state => state.common.collapsed,
      menuConfig: state => state.common.menuConfig
    }),

    currentWidth () {
      return this.collapsed ? '80px' : '256px'
    },

    defaultActive () {
      return this.$route.path
    }
  },

  data () {
    return {}
  },

  methods: {
    navigatorTo (url) {
      if (this.$route.path === url) {
        return
      }
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
