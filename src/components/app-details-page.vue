<template lang="pug">
div
  page-header(:title="app.title" :subtitle="app.subtitle")
  .container
    .text-container
      p(v-html="app.shortDescription")
      ul.bottom-links
        li(v-for="link in app.links")
          a.btn.btn-primary(:href="link.url" :class="{secondary: link.secondary === true}")
            | #[span.leading-icon(:class="typeof link.iconClasses === 'string' ? link.iconClasses : 'fa fa-link'")] {{link.label}}
</template>

<script lang="coffee">
import Apps from '../data/apps.coffee'
import PageHeader from './page-header.vue'
export default
  components: {PageHeader}
  props: ['id']
  data: ->
    app: {}
  mounted: ->
    results = Apps.filter (e) => e.id is @id
    if results?[0]?
      @app = results[0]
    else
      @$router.replace({name: 'apps'})
</script>

<style lang="less" scoped>
@import '../styles/variables-mixins.less';
.text-container {
  margin: @grid-gutter-width 0;
  text-align: justify;
  .bottom-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
    li {
      display: inline-block;
      margin: 3px;
    }
  }
}
</style>
