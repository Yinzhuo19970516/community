<template>
  <div class="login-container">
    <div class="login">
      <div class="top-image">
        <img src="" />
      </div>
      <h1>登录</h1>
      <div class="panel">
        <form>
          <div class="form-item">
            <span><input type="text" class="textbox" placeholder="请输入账号" v-model="email"></span>
          </div>
          <div class="form-item">
            <span><input type="password" class="password" placeholder="请输入密码" v-model="pwd"></span>
          </div>
          <div>
            <input type="checkbox" name="" id=""><span class="checkbox-text">30天记住我</span>
          </div>
          <div class="sign form-item">
            <input type="submit" value="登录" class="submit">
          </div>
          <div class="form-item">
            <a href="" class="a-forget">忘记密码？</a>
          </div>
        </form>
      </div>
      <div class="bottom-tip">
        <span>没有账号？</span>
      </div>
      <div class="bottom-link">
        <a href="">注册账号</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      email: '',
      pwd: '',
      error: ''
    }
  }
};
</script>

<style lang="stylus" scoped>
a
  text-decoration none
.login-container 
  height 1080px
  padding auto 
  .login
    padding 50% 0
    width 500px
    margin auto 
    .top-image 
      width 150px
      height 150px
      background-color #99ccff  
      margin auto   
    h1 
      text-align center
      font-family PingFang-SC-Regular
    .panel
      position relative
      background #fff
      padding 10%
      border-radius 10px
      -webkit-radius 10px
      -o-border-radius 10px
      -moz-border-radius 10px
      box-shadow 0px 0px 3px #545454;
      .form-item
        width 100%
        text-align center 
      input[type="text"], input[type="password"]
        width 322px
        padding 14px
        font-size 16px
        margin 3px 0px 20px
        color #666666
        font-weight 400
        border none
        border-radius 10px
        -webkit-radius 10px
        -o-border-radius 10px
        -moz-border-radius 10px
        box-shadow 0px 0px 3px #545454;
      input[type="checkbox"]
        margin 5px 15px 10px 35px
      .checkbox-text
        font-family PingFang-SC-Regular
        font-size 14px 
        color #003366
      .sign
        padding 15px 0
        .submit
          background #99ccff
          width 350px
          height 60px
          border-radius 10px
          -webkit-radius 10px
          -o-border-radius 10px
          -moz-border-radius 10px
          font-family PingFang-SC-Regular
          font-size 30px
          color #ffffff
          border none
        .a-forget
          font-family PingFang-SC-Regular
          font-size 16px
          color #003366
  .bottom-tip
    margin 30px auto
    width 100%
    text-align center
    font-family PingFang-SC-Regular
    font-size 16px
    color #666666
  .bottom-link
    width 100%
    text-align center
    font-family PingFang-SC-Regular
    font-size 20px
    color #003366
</style>

