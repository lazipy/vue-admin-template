<template>
  <el-container class="layout">
    <ez-side-bar />
    <!-- 右侧内容 -->
    <el-container direction="vertical">
      <el-header />
      <el-main>
        <div class="body">
          <ez-content />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import EzSideBar from '@/components/EzSideBar'
import EzContent from '@/components/EzContent'

export default {
  name: 'Layout',
  components: {
    EzSideBar,
    EzContent
  }
}
</script>

<style lang="scss">
  .layout {
    height: 100%;

    .el-main {
      background-color: #f1f2f6;

      .body {
        padding: 16px 30px 24px 20px;
        min-height: 100%;
        background-color: #F3F5F7;
      }
    }
  }
</style>
