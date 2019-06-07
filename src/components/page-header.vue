<template lang="pug">
header(:style="{ 'background-color': color }")
  .container
    img.icon(v-if="icon" :src="icon" alt="")
    div
      h2(v-if="title") {{title}}
      h3(v-if="subtitle") {{subtitle}}
</template>

<script lang="coffee">
export default
  props: ['title', 'subtitle', 'color', 'icon']
</script>

<style lang="scss" scoped>
@import "../styles/variables-mixins";
header {
  color: white;
  background-color: $secondary-color;
  background-image: url('../images/swift-background.svg');
  background-size: 16.25rem 6.25rem;
  background-position: center 0;
  background-attachment: fixed;
  background-repeat: repeat;
  padding: 1.8rem 0;
  overflow: hidden;
  .container {
    display: flex;
    align-items: center;
    .icon {
      flex-shrink: 0;
      width: 5rem;
      height: 5rem;
      margin: 0 1.9rem 0 0;
      overflow: hidden;
      border-radius: 20%;
    }
    h2 {
      margin: 0;
      font-size: 2.5rem;
      font-weight: 600;
    }
    h3 {
      margin: 0.5rem 0 0 0;
      font-size: 1.9rem;
      font-weight: 400;
    }
  }
  @include media-breakpoint-down(xs) {
    .container {
      display: block;
      text-align: center;
      .icon {
        margin: 0 0 1rem 0;
      }
    }
  }
}
</style>
