<template lang="pug">
section(:style="{ 'background-color': section.color || 'black' }")
  .column.icon(v-if="section.iconClasses")
    span(:class="section.iconClasses" :style="{ 'font-size': section.iconSize || '1em' }")
  .column
    .title(v-if="section.title") {{section.title}}
    .subtitle(v-if="section.subtitle") {{section.subtitle}}
    .button
      router-link(:to="{ name: section.pageName }" :style="{ 'color': section.color || 'black' }")
        | #[span.fa.fa-arrow-circle-right.leading-icon] En savoir plus
</template>

<script lang="coffee">
export default
  props: ['section']
</script>

<style lang="less" scoped>
@import '../styles/variables-mixins.less';
section {
  color: white;
  padding: 20px;
  border-radius: @standard-border-radius;
  overflow: hidden;
  .column {
    display: table-cell;
    vertical-align: middle;
  }
  .icon {
    padding-right: 30px;
    font-size: 4em;
    line-height: 0;
  }
  .title {
    margin: 0;
    font-size: 1.5em;
    font-weight: 600;
  }
  .subtitle {
    margin-top: 8px;
    font-size: 1.1em;
    font-weight: 400;
  }
  .button {
    margin-top: 20px;
    font-size: 1.1em;
    a {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 6px;
      background: white;
      &:hover, &:focus {
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
  @media (max-width: @screen-xs-max) {
    text-align: center;
    .column {
      display: block;
    }
    .icon {
      padding-right: 0;
    }
  }
}
</style>
