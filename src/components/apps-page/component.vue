<template>
  <div>
    <page-header title="Apps" subtitle="Mes principales applications iOS &amp; macOS"></page-header>
    <div class="container">
      <div class="grid row">
        <div class="grid-sizer col-xs-12 col-sm-6 col-md-4"></div>
        <div v-for="app in apps" class="grid-item col-xs-12 col-sm-6 col-md-4">
          <card-item :item="app"></card-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var Masonry = require('masonry-layout')
import Apps from './apps'
import PageHeader from '../page-header/component.vue'
import CardItem from './card-item/component.vue'
export default {
  components: {PageHeader, CardItem},
  data: function () {
    return {
      apps: Apps
    }
  },
  mounted: function () {
    new Masonry('.grid', {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      transitionDuration: 0
    })
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/variables-mixins.less';
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
