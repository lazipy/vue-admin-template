<template>
  <div class="login-page">
    <div class="login-form">
      <div class="close"></div>
      <div class="login-form__header clearfix">
        <div class="label float-right"></div>
        <div class="label float-right"></div>
        <div class="label float-right"></div>
      </div>
      <div class="login-form__body">
        <img class="avatar" src="./images/avatar.png">
        <form>
          <input type="text" placeholder="用户名" />
          <input type="password" placeholder="密码" />
        </form>
      </div>
      <div v-loading="loading" class="login-form__footer">
        <input
          type="submit"
          :value="loading ? '正在登录...' : '登录'"
          @click="login"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const userLogin = 'login/USER_LOGIN'

export default {
  name: 'login',

  data () {
    return {}
  },

  computed: {
    ...mapState({
      loading: state => state.loading.effects[userLogin]
    })
  },

  methods: {
    async login () {
      await this.$store.dispatch({ type: userLogin })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
