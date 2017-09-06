<template>
  <div>
    <page-header title="Freelance" subtitle="Ingénieur développeur iOS / macOS / watchOS natif"></page-header>
    <div class="container">
      <div class="text-container">
        <h4>En cours de rédaction...</h4>
        <p>C'est promis, cette page arrive bientôt ! En attendant, vous pouvez en savoir plus et me contacter depuis la page <router-link :to="{ name: 'about' }">À propos</router-link>.</p>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../page-header/component.vue'
export default {
  components: {PageHeader}
}
</script>

<style lang="less" scoped>
@import '../../styles/variables-mixins.less';
.text-container {
  margin: @grid-gutter-width 0;
  text-align: justify;
}
</style>
