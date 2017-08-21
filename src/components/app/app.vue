<template>
  <div id="app">
    <h1 class="title">Hello {{name}}</h1>
    <router-view></router-view>
    <router-link :to="{ name: 'home' }">HOME</router-link>
    <router-link :to="{ name: 'about' }">ABOUT</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: 'World'
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  color: red;
}
a {
  color: green;
}
</style>
