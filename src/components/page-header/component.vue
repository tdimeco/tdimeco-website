<template>
  <header>
    <div class="container">
      <h2 v-if="title">{{title}}</h2>
      <h3 v-if="subtitle">{{subtitle}}</h3>
    </div>
  </header>
</template>

<script lang="coffee">
export default
  props: ['title', 'subtitle']
</script>

<style lang="less" scoped>
@import '../../styles/variables-mixins.less';
header {
  color: white;
  background-color: @secondary-color;
  background-image: url('swift-background.svg');
  background-size: 260px 100px;
  background-position: center 0;
  background-attachment: fixed;
  background-repeat: repeat;
  padding: 30px 0;
  overflow: hidden;
  h2 {
    margin: 0;
    font-size: 2em;
    font-weight: 600;
  }
  h3 {
    margin: 15px 0 0 0;
    font-size: 1.5em;
    font-weight: 400;
  }
}
</style>
