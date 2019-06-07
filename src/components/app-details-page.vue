<template lang="pug">
div
  page-header(:title="app.title" :subtitle="app.subtitle" :color="app.color" :icon="app.icon")
  .container
    .text-container
      p(v-html="app.shortDescription")
      ul.bottom-links
        li(v-for="link in app.links")
          a.btn.btn-primary(:href="link.url" :class="{secondary: link.secondary === true}")
            | #[span.leading-icon(:class="typeof link.iconClasses === 'string' ? link.iconClasses : 'fas fa-link'")] {{link.label}}
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
    if Apps.named[@id]?
      @app = Apps.named[@id]
    else
      @$router.replace({name: 'apps'})
    return
</script>

<style lang="scss" scoped>
@import "../styles/variables-mixins";
.text-container {
  margin: $grid-gutter-width 0;
  text-align: justify;
}
</style>
