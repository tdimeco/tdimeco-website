<template lang="pug">
div
  page-header(title="Mentions légales" subtitle="Vous êtes perdu ?")
  .container
    .row
      section.col-md-6.col-lg-5.offset-lg-1.col-xl-4.offset-xl-2
        div
          header #[span.fas.fa-pen-square.leading-icon] Auteur et publication
          router-link(:to="{ name: 'about' }") Thomas Di&nbsp;Meco
          br
          | Auto-entrepreneur
          br
          | SIREN : 822 835 781
      section.col-md-6.col-lg-5.col-xl-4
        div
          header #[span.fas.fa-globe.leading-icon] Hébergement
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

<style lang="scss" scoped>
@import "../styles/variables-mixins";
section {
  font-size: 1.2rem;
  > div {
    margin: $grid-gutter-width 0;
    padding: 1rem;
    background: var(--background-2-color);
    border-radius: $standard-border-radius;
    text-align: center;
  }
  header {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: uppercase;
  }
}
@include media-breakpoint-down(sm) {
  section {
    > div {
      margin: ($grid-gutter-width / 2) 0 0 0;
    }
    &:last-child {
      > div {
        margin-bottom: $grid-gutter-width / 2;
      }
    }
  }
}
</style>
