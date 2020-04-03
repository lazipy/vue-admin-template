<template>
  <div class="ez-side-bar">
    <el-aside width="240px">
      <el-menu
        background-color="#1F233E"
        text-color="#adb5bd"
        active-text-color="#fff"
      >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'EzSideBar',

  props: {},

  data () {
    return {}
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
