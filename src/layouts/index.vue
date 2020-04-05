<template>
  <el-container class="layout">
    <ez-side-bar />
    <!-- 右侧内容 -->
    <el-container direction="vertical">
      <ez-header />
      <el-main>
        <ez-content />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
