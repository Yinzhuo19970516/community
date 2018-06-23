<template>
  <div class="personal-page">
    <p-header></p-header>
    <info-banner></info-banner>
  </div>
</template>

<script>
import PHeader from 'common/components/Header'
import InfoBanner from './components/Banner'
export default {
  name: 'Pesonal',
  components: {
    PHeader,
    InfoBanner
  }
}
</script>

<style lang="stylus" scoped>

</style>
