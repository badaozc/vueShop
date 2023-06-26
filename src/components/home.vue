<template>
  <div>
    Home组件
    <el-button @click="logout" type="info">退出</el-button>
  </div>
</template>
<script>
export default {
  name: 'APP',
  data () {
    return {
    }
  },
  methods: {
    logout(){
        window.sessionStorage.clear()
        this.$router.push('/login')
    }
  },
  created () {
  },
  mounted () {
    
  },
}
</script>
<style lang="less" scoped>

</style>
