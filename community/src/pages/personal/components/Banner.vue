<template>
  <div class="info-banner">
    <div class="header-portrait">
      <img src="~common/pic/logo.png" alt="">
    </div>
    <div class="personal-info">
      <div class="base-info">
        <span class="base-info-name">{{ info.name }}</span>
        <span>{{ '角色：' + info.role }}</span>
        <span>{{ '感情：' + info.single }}</span>
      </div>
      <div class="exa-info">
        <div class="birthday">
          <span>{{ '生日：' + info.birthday }}</span>
        </div>
        <div class="adress">
          <span>{{ '居住地：' + info.address }}</span>
        </div>
        <div class="signature">
          {{ info.signature }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBanner',
  data () {
    return {
      info: {
        name: 'Spain',
        role: '1',
        single: '单身',
        birthday: '1994-06-11',
        address: '上海',
        signature: '我想变成天上半明半暗的云彩'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .info-banner
    margin-top: 60px
    height: 200px
    background-color: #fff
    border-radius: 8px
    box-shadow: 1px 1px #ddd
    .header-portrait
      float: left
      margin-top: 20px
      margin-left: 20px
      width: 160px
      height: 160px
      img
        width: 100%
    .personal-info
      overflow: hidden
      height: 200px
      line-height: 2
      padding: 15px
      .base-info
        font-family: PingFang-SC-Regular
        font-size: 14px
        color: #003366
        span
          margin-right: 8px
        .base-info-name
          font-family: PingFang-SC-Bold
          font-size: 32px
      .exa-info
        color: #666
</style>
