<template>
  <div class="main-container">
    <div class="tab-item">
      <span class="item-active">我的动态</span>
      <span>我的相册</span>
    </div>
    <div class="dynamic-container">
      <div class="header-img">
        <img src="~common/pic/logo.png" alt="">
      </div>
      <div class="dynamic-content">
        <div class="content-meta">
          <div class="author">Spain</div>
          <span class="date">2018年7月12日 17:22</span>
        </div>
        <div class="main-content">
          <div class="content-img">
            <img src="~common/pic/logo.png">
          </div>
          <div class="content-text">
            Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
          </div>
        </div>
      </div>
    </div>
    <div class="dynamic-container">
      <div class="header-img">
        <img src="~common/pic/logo.png" alt="">
      </div>
      <div class="dynamic-content">
        <div class="content-meta">
          <div class="author">Spain</div>
          <span class="date">2018年7月12日 17:22</span>
        </div>
        <div class="main-content">
          <div class="content-img">
            <img src="~common/pic/logo.png">
          </div>
          <div class="content-text">
            Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dynamic'
}
</script>

<style lang="stylus" scoped>
  .main-container
    margin-top: 60px
    .tab-item
      height: 40px
      line-height: 40px
      font-size: 0
      color: #666
      .item-active
        color: #fff
        background-color: #007AFF
      span
        width: 100px
        padding: 5px 8px
        background-color: #C5E4FF
        font-size: 14px
    .dynamic-container
      position: relative
      margin-bottom: 20px
      .header-img
        position: absolute
        width: 50px
        height: 50px
        top: 25px
        left: 20px
        img
          width: 100%
      .dynamic-content
        overflow: hidden
        padding: 25px 70px 10px
        border-radius: 8px
        box-shadow: 2px 2px #eee
        background-color: #fff
        .content-meta
          margin-left: 15px
          .author
            font-family: PingFang-SC-Bold
            font-size: 16px
            color: #333
          .date
            font-size: 12px
            color: #999
        .main-content
          .content-img
            float: left
            width: 200px
            height: 200px
            img
              width: 100%
          .content-text
            overflow: hidden
            padding: 10px 20px
            line-height: 1.6
            font-family: PingFang-SC-regular
            font-size: 16px
            color: #333
</style>
