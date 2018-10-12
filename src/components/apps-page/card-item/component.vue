<template>
  <section>
    <header :style="'background-color:' + item.color">
      <div class="content">
        <div class="column">
          <img :src="item.icon" alt="">
        </div>
        <div class="column">
          <div class="title">{{item.title}}</div>
          <div class="subtitle">{{item.subtitle}}</div>
        </div>
      </div>
    </header>
    <div>
      <div v-html="item.description"></div>
    </div>
    <footer>
      <ul>
        <li v-for="link in item.links">
          <a :href="link.url" :class="{secondary: link.secondary === true}">
            <span :class="typeof link.iconClasses === 'string' ? link.iconClasses : 'fa fa-link'"></span>
            {{link.label}}
          </a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="less" scoped>
@import '../../../styles/variables-mixins.less';
section {
  border-radius: @standard-border-radius;
  overflow: hidden;
  header {
    padding: 15px;
    .content {
      display: table-row;
      .column {
        display: table-cell;
        vertical-align: middle;
        &:last-child {
          padding-left: 15px;
        }
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
      img {
        width: 2.8em;
        height: 2.8em;
        overflow: hidden;
        border-radius: 10px;
      }
    }
  }
  > div {
    padding: 15px;
    font-size: 0.95em;
    text-align: justify;
    background: @light-background-color;
  }
  footer {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      a {
        display: block;
        margin-top: 3px;
        padding: 12px 15px;
        font-weight: 600;
        background: @light-background-color;
        &:hover, &:focus {
          background: darken(@light-background-color, 5%);
        }
        &.secondary {
          font-weight: inherit;
        }
        span {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
