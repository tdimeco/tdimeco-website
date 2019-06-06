<template lang="pug">
header(:style="{ 'background-color': color }")
  .container
    img.icon(v-if="icon" :src="icon" alt="")
    .text
      h2(v-if="title") {{title}}
      h3(v-if="subtitle") {{subtitle}}
</template>

<script lang="coffee">
export default
  props: ['title', 'subtitle', 'color', 'icon']
</script>

<style lang="less" scoped>
@import '../styles/variables-mixins.less';
header {
  color: white;
  background-color: @secondary-color;
  background-image: url('../images/swift-background.svg');
  background-size: 260px 100px;
  background-position: center 0;
  background-attachment: fixed;
  background-repeat: repeat;
  padding: 30px 0;
  overflow: hidden;
  .container {
    display: flex;
    align-items: center;
    .icon {
      flex-shrink: 0;
      width: 4em;
      height: 4em;
      margin: 0 1.5em 0 0;
      overflow: hidden;
      border-radius: 20%;
    }
    h2 {
      margin: 0;
      font-size: 2em;
      font-weight: 600;
    }
    h3 {
      margin: 0.4em 0 0 0;
      font-size: 1.5em;
      font-weight: 400;
    }
  }
  @media (max-width: @screen-xs-max) {
    .container {
      display: block;
      text-align: center;
      .icon {
        margin: 0 0 0.8em 0;
      }
    }
  }
}
</style>
