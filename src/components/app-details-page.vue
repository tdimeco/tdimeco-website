<template lang="pug">
section
  page-header(:title="app.title" :subtitle="app.subtitle" :color="app.color" :icon="app.icon")
  .container
    .text-container
      p(v-html="app.shortDescription")
      .images(v-if="app.images")
        a(v-for="img in app.images" :href="img")
          img(:src="img" :alt="'Image de ' + app.title")
      ul.bottom-links
        li(v-for="link in app.links")
          a.btn.btn-primary(:href="link.url" :class="{secondary: link.secondary === true}")
            | #[span.leading-icon(:class="typeof link.iconClasses === 'string' ? link.iconClasses : 'fas fa-link'")] {{link.label}}
      div(v-for="section in app.additionalSections")
        h4 {{section.title}}
        p(v-html="section.content")
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
  methods:
    openImage: (img) ->
      window.open(img)
      return
</script>

<style lang="scss" scoped>
@import "../styles/variables-mixins";
.text-container {
  margin: $grid-gutter-width 0;
  text-align: justify;
  .images {
    margin: 1.9rem 0;
    text-align: center;
    a {
      display: inline-block;
      max-width: 25%;
      margin: 0 2%;
      img {
        @include animate((opacity));
        width: 100%;
        height: auto;
        border-radius: $standard-border-radius;
        &:hover, &:focus {
          opacity: 0.8;
          cursor: pointer;
        }
      }
    }
  }
  h4 {
    @include title-divider()
  }
}
@include media-breakpoint-down(xs) {
  .text-container {
    .images {
      a {
        max-width: 60%;
        margin-bottom: 2rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
