<template lang="pug">
div
  page-header(title="Mentions légales" subtitle="Vous êtes perdu ?")
  .container
    .row
      section.col-xs-12.col-sm-6.col-md-5.col-md-offset-1.col-lg-4.col-lg-offset-2
        div
          header #[span.fa.fa-pencil-square.leading-icon] Auteur et publication
          router-link(:to="{ name: 'about' }") Thomas Di&nbsp;Meco
          br
          | Auto-entrepreneur
          br
          | SIREN : 822 835 781
      section.col-xs-12.col-sm-6.col-md-5.col-lg-4
        div
          header #[span.fa.fa-globe.leading-icon] Hébergement
          a(href="https://www.ovh.com/") OVH
          br
          | 2 rue Kellermann
          br
          | 59100 Roubaix &mdash; France
</template>

<script lang="coffee">
import PageHeader from './page-header.vue'
export default
  components: {PageHeader}
</script>

<style lang="less" scoped>
@import '../styles/variables-mixins.less';
section {
  font-size: 0.95em;
  > div {
    margin: @grid-gutter-width 0;
    padding: 15px;
    background: darken(@light-background-color, 5%);
    border-radius: @standard-border-radius;
    text-align: center;
  }
  header {
    margin-bottom: 15px;
    font-weight: 600;
    text-transform: uppercase;
  }
}
@media (max-width: @screen-xs-max) {
  section {
    > div {
      margin: (@grid-gutter-width / 2) 0 0 0;
    }
    &:last-child {
      > div {
        margin-bottom: @grid-gutter-width / 2;
      }
    }
  }
}
</style>
