<template>
  <div class="home-page">{{ userName }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',

  computed: {
    ...mapState({
      userName: state => state.home.userName
    })
  },

  mounted () {
    this.$store.dispatch('home/QUERY_USER_INFO')
  }
}
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
