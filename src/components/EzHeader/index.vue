<template>
  <el-header height="64px">
    <div class="trigger" @click="onTrigger">
      <i v-if="collapsed" class="el-icon-s-unfold"></i>
      <i v-else class="el-icon-s-fold"></i>
    </div>
    <div class="space"></div>
    <el-dropdown @command="onDropdownCommand">
      <div class="user">
        <img class="avatar" src="../../assets/images/avatar.png" />
        <span>admin</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">
          <i class="el-icon-switch-button"></i>
          <span>Logout</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EzHeader',

  computed: {
    ...mapState({
      collapsed: state => state.common.collapsed
    })
  },

  data () {
    return {}
  },

  methods: {
    // 收缩
    onTrigger () {
      this.$store.commit('common/TOGGLE_MENU')
    },

    // 用户下拉菜单
    onDropdownCommand (command) {
      if (command === 'logout') {
        this.$router.replace('/login')
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
