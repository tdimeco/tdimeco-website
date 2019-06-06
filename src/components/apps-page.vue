<template lang="pug">
div
  page-header(title="Apps" subtitle="Mes principales applications iOS et macOS")
  .container
    .grid.row
      .grid-sizer.col-xs-12.col-sm-6.col-lg-4
      .grid-item.col-xs-12.col-sm-6.col-lg-4(v-for="app in apps.all")
        card-item(:item="app")
</template>

<script lang="coffee">
Masonry = require('masonry-layout')
import Apps from '../data/apps.coffee'
import PageHeader from './page-header.vue'
import CardItem from './app-card-item.vue'
export default
  components: {PageHeader, CardItem}
  data: ->
    apps: Apps
  mounted: ->
    new Masonry('.grid',
      itemSelector: '.grid-item'
      columnWidth: '.grid-sizer'
      percentPosition: true
      transitionDuration: 0
    )
    return
</script>

<style lang="less" scoped>
@import '../styles/variables-mixins.less';
@grid-padding: @grid-gutter-width / 2;
.grid {
  padding: @grid-padding 0;
  .grid-item {
    padding: @grid-padding;
  }
  @media (max-width: @screen-xs-max) {
    padding: 0 0 @grid-padding 0;
    .grid-item {
      padding: @grid-padding @grid-padding 0 @grid-padding;
    }
  }
}
</style>
