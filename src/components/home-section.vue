<template lang="pug">
section(:style="{ 'background-color': section.color || 'black' }")
  .icon(v-if="section.iconClasses")
    span(:class="section.iconClasses" :style="{ 'font-size': section.iconSize || '1em' }")
  div
    .title(v-if="section.title") {{section.title}}
    .subtitle(v-if="section.subtitle") {{section.subtitle}}
    router-link.button(:to="{ name: section.pageName }" :style="{ 'color': section.color || 'black' }")
      | #[span.fas.fa-arrow-circle-right.leading-icon] En savoir plus
</template>

<script lang="coffee">
export default
  props: ['section']
</script>

<style lang="scss" scoped>
@import "../styles/variables-mixins";
section {
  display: flex;
  align-items: center;
  color: var(--dark-content-text-1-color);
  padding: 1.3rem;
  border-radius: $standard-border-radius;
  overflow: hidden;
  .icon {
    flex-shrink: 0;
    margin-right: 1.3rem;
    font-size: 5rem;
    line-height: 0;
  }
  .title {
    margin: 0;
    font-size: 1.9rem;
    font-weight: 600;
  }
  .subtitle {
    margin-top: 0.4rem;
    font-size: 1.4rem;
    font-weight: 400;
  }
  .button {
    display: inline-block;
    margin-top: 1.2rem;
    font-size: 1.3rem;
    padding: 0.3rem 0.7rem;
    border-radius: 0.4rem;
    background: var(--dark-content-text-1-color);
    &:hover, &:focus {
      background: var(--dark-content-text-2-color);
    }
  }
}
@include media-breakpoint-down(xs) {
  section {
    display: block;
    text-align: center;
    .icon {
      margin-right: 0;
    }
  }
}
</style>
