<template>
  <div>
    <page-header title="Site web personnel" subtitle="Je vous souhaite la bienvenue sur mon site web personnel !"></page-header>
    <div class="home-sections">
      <home-section title="Apps" subtitle="Mes principales applications iOS / macOS / watchOS" color="#db3c4f" icon-classes="fa fa-apple" icon-size="8em" button-label="En savoir plus" button-page-name="apps"></home-section>
      <home-section title="Freelance" subtitle="Ingénieur développeur iOS / macOS / watchOS natif" color="#1aa8a8" icon-classes="fa fa-address-card" icon-size="5.35em"  button-label="En savoir plus" button-page-name="freelance"></home-section>
      <home-section title="Photos" subtitle="Ma galerie photos Flickr" color="#378de2" icon-classes="fa fa-camera" icon-size="5.55em"  button-label="En savoir plus" button-page-name="photos"></home-section>
    </div>
  </div>
</template>

<script>
import PageHeader from '../page-header/component.vue'
import HomeSection from './home-section/component.vue'
export default {
  components: {PageHeader, HomeSection}
}
</script>

<style lang="less" scoped>
@import '../../styles/variables-mixins.less';
.home-sections {
  margin: 25px 0;
}
</style>
