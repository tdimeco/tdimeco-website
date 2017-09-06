<template>
  <div>
    <page-header title="Mentions légales" subtitle=""></page-header>
    <div class="container">
      <div class="row">
        <section class="col-xs-12 col-sm-6 col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-2">
          <div>
            <header><span class="fa fa-pencil-square"></span> Auteur et publication</header>
            <router-link :to="{ name: 'about' }">Thomas Di&nbsp;Meco</router-link><br>
            Auto entrepreneur<br>
            SIREN : 822 835 781
          </div>
        </section>
        <section class="col-xs-12 col-sm-6 col-md-5 col-lg-4">
          <div>
            <header><span class="fa fa-globe"></span> Hébergement</header>
            <a href="https://www.ovh.com/">OVH</a><br>
            2 rue Kellermann<br>
            59100 Roubaix &mdash; France
          </div>
        </section>
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
section {
  font-size: 0.95em;
  > div {
    margin: @grid-gutter-width 0;
    padding: 15px;
    background: darken(@light-background-color, 5%);
    border-radius: 6px;
    text-align: center;
  }
  header {
    margin-bottom: 15px;
    font-weight: 600;
    text-transform: uppercase;
  }
}
@media (max-width: @screen-xs-max) {
  section {
    > div {
      margin: (@grid-gutter-width / 2) 0 0 0;
    }
    &:last-child {
      > div {
        margin-bottom: @grid-gutter-width / 2;
      }
    }
  }
}
</style>
