<template lang="pug">
router-link(tag="section" :to="{name: 'app-details', params: {id: item.id}}")
  header(:style="'background-color:' + item.color")
    img.icon(:src="item.icon" alt="")
    .text
      .title {{item.title}}
      .subtitle {{item.subtitle}}
  .description(v-html="item.shortDescription")
  footer
    | #[span.fa.fa-arrow-circle-right.leading-icon] Plus de détails
</template>

<script lang="coffee">
export default
  props: ['item']
</script>

<style lang="less" scoped>
@import '../styles/variables-mixins.less';
section {
  .animate(background);
  background: @light-background-color;
  border-radius: @standard-border-radius;
  overflow: hidden;
  cursor: pointer;
  &:hover, &:focus {
    background: darken(@light-background-color, 5%);
  }
  header {
    display: flex;
    align-items: center;
    padding: 15px;
    .icon {
      flex-shrink: 0;
      width: 2.8em;
      height: 2.8em;
      overflow: hidden;
      margin-right: 15px;
      border-radius: 20%;
    }
    .title {
      font-size: 1.3em;
      font-weight: 600;
      color: white;
    }
    .subtitle {
      font-size: 1.05em;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .description {
    padding: 15px;
    font-size: 0.95em;
    text-align: justify;
  }
  footer {
    padding: 0 15px 15px 15px;
    color: @primary-color;
  }
}
</style>
