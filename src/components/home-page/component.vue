<template lang="pug">
div
  page-header(title='Site web personnel' subtitle='Je vous souhaite la bienvenue sur mon site web personnel !')
  .container
    .grid.row
      .grid-sizer.col-xs-12.col-md-6
      .grid-item.col-xs-12.col-md-6(v-for='section in sections')
        home-section(:section='section')
</template>

<script lang="coffee">
Masonry = require('masonry-layout')
import Sections from './sections.coffee'
import PageHeader from '../page-header/component.vue'
import HomeSection from './home-section/component.vue'
export default
  components: {PageHeader, HomeSection}
  data: ->
    sections: Sections
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
