<template>
  <div class="personal-page">
    <p-header></p-header>
    <info-banner></info-banner>
    <dynamic></dynamic>
  </div>
</template>

<script>
import PHeader from 'common/components/Header'
import InfoBanner from './components/Banner'
import Dynamic from './components/Dynamic'
export default {
  name: 'Pesonal',
  components: {
    PHeader,
    InfoBanner,
    Dynamic
  }
}
</script>

<style lang="stylus" scoped>

</style>
