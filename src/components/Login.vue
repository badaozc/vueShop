<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box" ref="div1">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- 登录表单 -->
      <el-form :model="from" class="login_form" label-width="80px" :rules="loginRules" ref="loginref">
        <el-form-item prop="name">
          <el-input v-model="from.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="from.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetfrom">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'APP',
  data () {
    return {
      from:{
        name:'admin',
        password:'123456'
      },
      loginRules:{
        name:[{
        require:true,message:'用户名不能为空!',trigger:'blur'
      },
      {
        min:3,max:15,message:'长度在3-15字符之间',trigger:'blur'
      }
    ],
      password:[{
        require:true,message:'用户名不能为空!',trigger:'blur'
      },
      {
        min:3,max:15,message:'长度在3-15字符之间',trigger:'blur'
      }
    ]
      }
    }
  },
  methods: {
    resetfrom(){
      this.$refs.loginref.resetFields();
    },
    login(){
      this.$refs.loginref.validate(valid=>{
        if(!valid) return;
        const {data:res}=this.$http .post('login',this.loginForm)

        if(res.meta.status){
          return this.$message.error('登录失败')
        }
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token',res.data.token)
      })
    }
    
  },
  created () {
  },
  mounted () {
  },
}
</script>
<style lang="less" scoped>
html,
body,
#app {
    height: 100%;
    background-color: #2B4B6B;
    padding: 0;
    margin: 0;
}
.login_box{
    width: 550px;
    height: 350px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .avatar_box{
      width: 130px;
      height: 130px;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #eee;
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #fff;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .login_form{
      width: 100%;
      // border: 1px solid red;
      position: absolute;
      bottom: 50px;
      padding: 0 20px;
      left: -8%;
      box-sizing: border-box;
    }
}
</style>
