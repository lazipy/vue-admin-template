<template>
  <div class="not-fount">
    <img class="image" src="./images/404.png" alt="404" />
    <div class="description">
      <p class="intro">Sorry,This page is not found...</p>
      <el-button type="primary" @click="() => $router.replace('/')">back home</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: '404',

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
