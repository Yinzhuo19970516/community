<template>
  <div class="nav-header">
    <router-link
      to="/home"
      tag="div"
      class="nav-logo"
    >
      <img class="logo-img" src="~common/pic/logo.png" alt="">
    </router-link>
    <router-link
      to="/home"
      tag="div"
      class="nav-home">
      <img  class="nav-item-img" src="~common/pic/home_icon.png" alt="">
      <span>主页</span>
    </router-link>
    <div class="menu-bar">
      <span class="dynamic">发布动态</span>
      <router-link
        to="message"
        class="items"
      >
        <img class="nav-item-img" src="~common/pic/message_icon.png" alt="">
      </router-link>
      <router-link
        to="personal"
        class="items"
      >
        <img class="nav-item-img" src="~common/pic/Personal_icon.png" alt="">
      </router-link>
      <router-link
        to="info"
        class="items"
      >
        <img class="nav-item-img" src="~common/pic/set_icon.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style lang="stylus" scoped>
  div
    img
    span
      cursor: pointer
  .nav-header
    position: relative
    max-width: 1200px
    height: 60px
    line-height: 60px
    margin: auto
    border-bottom: 1px solid #ccc
    font-size: 20px
    color: #003366
    .nav-item-img
      position: relative
      width: 21px
      height: 20px
      top: 2px
    .nav-logo
      display: inline-block
      .logo-img
        vertical-align: middle
        margin-left: 6px
        width: 40px
        height: 40px
    .nav-home
      display: inline-block
    .menu-bar
      float: right
      .dynamic
        margin-right: 30px
      .items
        margin-right: 20px
        &:last-child
          margin-right: 10px
</style>
