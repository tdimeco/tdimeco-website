<template>
  <header>
    <div class="container">
      <h2>{{title}}</h2>
      <h3>{{subtitle}}</h3>
    </div>
  </header>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>

<style lang="less" scoped>
@import '../../styles/variables-mixins.less';
header {
  color: white;
  background: @secondary-color;
  h2 {
    margin: 30px 0 20px 0;
    font-weight: 600;
  }
  h3 {
    margin: 20px 0 30px 0;
    font-weight: 400;
  }
}
</style>
