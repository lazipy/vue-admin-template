<template>
  <div class="home-page" v-loading="loading">{{ userName }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',

  computed: {
    ...mapState({
      userName: state => state.home.userName,
      loading: state => state.loading.effects['home/QUERY_USER_INFO']
    })
  },

  mounted () {
    console.log(this.$store)
    this.$store.dispatch('home/QUERY_USER_INFO')
  }
}
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
