<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'EzContent',

  props: {},

  data () {
    return {}
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
