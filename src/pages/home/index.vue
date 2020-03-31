<template>
  <div class="home-page">{{title}}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',

  computed: {
    ...mapState({
      title: state => state.home.title
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
