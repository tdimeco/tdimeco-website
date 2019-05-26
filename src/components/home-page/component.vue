<template>
  <div>
    <page-header title="Site web personnel" subtitle="Je vous souhaite la bienvenue sur mon site web personnel !"></page-header>
    <div class="container">
      <div class="grid row">
        <div class="grid-sizer col-xs-12 col-md-6"></div>
        <div v-for="section in sections" class="grid-item col-xs-12 col-md-6">
          <home-section :section="section"></home-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="coffee">
Masonry = require('masonry-layout')
import Sections from './sections.coffee'
import PageHeader from '../page-header/component.vue'
import HomeSection from './home-section/component.vue'
export default
  components: {PageHeader: PageHeader, HomeSection: HomeSection}
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
