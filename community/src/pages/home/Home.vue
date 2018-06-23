<template>
<div>
  <h1>home</h1>
  <section v-show="user.login">
    <p>欢迎{{user.email }}</p>
  </section>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    user() {
      //在main.js中已经全局注册了store，这里直接用this.$直接使用。
      return this.$store.state.user
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
