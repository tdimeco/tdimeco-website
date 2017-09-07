<template>
  <section :style="{ 'background-color': color || 'black' }">
    <div class="container">
      <div class="content">
        <div class="column icon" v-if="iconClasses">
          <span :class="iconClasses" :style="{ 'font-size': iconSize || '1em' }"></span>
        </div>
        <div class="column">
          <div class="title" v-if="title">{{title}}</div>
          <div class="subtitle" v-if="subtitle">{{subtitle}}</div>
          <div class="button" v-if="buttonLabel">
            <router-link :to="{ name: buttonPageName }" :style="{ 'color': color || 'black' }">
              <span class="fa fa-arrow-circle-right"></span>
              {{buttonLabel}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'color', 'icon-classes', 'icon-size', 'button-label', 'button-page-name']
}
</script>

<style lang="less" scoped>
@import '../../../styles/variables-mixins.less';
section {
  color: white;
  background-image: url('swift-background.svg');
  background-size: 260px 100px;
  background-position: center 0;
  background-attachment: fixed;
  background-repeat: repeat;
  padding: 20px 0 30px 0;
  overflow: hidden;
  .content {
    display: table-row;
    .column {
      display: table-cell;
      vertical-align: middle;
    }
  }
  .icon {
    padding-right: 30px;
    font-size: 6em;
    line-height: 0;
  }
  .title {
    margin: 0;
    font-size: 1.7em;
    font-weight: 600;
  }
  .subtitle {
    margin-top: 8px;
    font-size: 1.3em;
    font-weight: 400;
  }
  .button {
    margin-top: 20px;
    font-size: 1.2em;
    a {
      display: inline-block;
      padding: 10px 15px;
      border-radius: 6px;
      background: white;
      &:hover, &:focus {
        background: rgba(255, 255, 255, 0.85);
      }
    }
  }
  @media (max-width: @screen-xs-max) {
    .content {
      display: block;
      text-align: center;
      .column {
        display: block;
      }
    }
    .icon {
      padding-right: 0;
    }
  }
}
</style>
