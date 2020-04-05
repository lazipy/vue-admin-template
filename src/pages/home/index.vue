<template>
  <div class="home-page">
    <el-row :gutter="12">
      <el-col :span="10">
        <Welcome />
        <Channel />
      </el-col>
      <el-col :span="14">
        <Area />
      </el-col>
    </el-row>

    <Activity />
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import Channel from './components/Channel'
import Area from './components/Area'
import Activity from './components/Activity'

export default {
  name: 'home',

  components: {
    Welcome,
    Channel,
    Area,
    Activity
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
