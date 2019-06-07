<template lang="pug">
router-link(tag="section" :to="{name: 'app-details', params: {id: item.id}}")
  header(:style="'background-color:' + item.color")
    img.icon(:src="item.icon" alt="")
    div
      .title {{item.title}}
      .subtitle {{item.subtitle}}
  .description(v-html="item.shortDescription")
  footer
    | #[span.fas.fa-arrow-circle-right.leading-icon] Plus de détails
</template>

<script lang="coffee">
export default
  props: ['item']
</script>

<style lang="scss" scoped>
@import "../styles/variables-mixins";
section {
  @include animate((background));
  background: $light-background-color;
  border-radius: $standard-border-radius;
  overflow: hidden;
  cursor: pointer;
  &:hover, &:focus {
    background: darken($light-background-color, 5%);
  }
  header {
    display: flex;
    align-items: center;
    padding: 1rem;
    .icon {
      flex-shrink: 0;
      width: 3.5rem;
      height: 3.5rem;
      overflow: hidden;
      margin-right: 1rem;
      border-radius: 20%;
    }
    .title {
      font-size: 1.6rem;
      font-weight: 600;
      color: white;
    }
    .subtitle {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .description {
    padding: 1rem;
    font-size: 1.2rem;
    text-align: justify;
  }
  footer {
    padding: 0 1rem 1rem 1rem;
    color: $primary-color;
    font-size: 1.2rem;
  }
}
</style>
