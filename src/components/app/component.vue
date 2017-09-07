<template>
  <div id="app">
    <header class="main-header">
      <div class="container">
        <h1>
          <router-link :to="{ name: 'home' }">
            <span class="back-icon fa fa-angle-left"></span>Thomas Di&nbsp;Meco
          </router-link>
        </h1>
        <nav>
          <ul>
            <li v-for="page in mainPages">
              <router-link :to="{ name: page.routerName }">{{page.name}}</router-link>
            </li>
          </ul>
        </nav>
        <aside class="hidden-xs">
          <ul>
            <li v-for="social in socials">
              <a :href="social.url" :title="'Voir ' + social.name"><span :class="social.iconClasses"></span></a>
            </li>
          </ul>
        </aside>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="main-footer">
      <div class="container">
        <div class="row">
          <div class="footer-block col-xs-12 col-sm-4">
            <p class="footer-title">tdimeco.fr</strong></p>
            <p><router-link :to="{ name: 'about' }">Me contacter</router-link></p>
            <p><router-link :to="{ name: 'terms' }">Mentions légales</router-link></p>
          </div>
          <nav class="footer-block col-xs-12 col-sm-4">
            <p class="footer-title">Navigation</p>
            <ul>
              <li><router-link :to="{ name: 'home' }">Page d'accueil</router-link></li>
              <li v-for="page in mainPages">
                <router-link :to="{ name: page.routerName }">{{page.name}}</router-link>
              </li>
            </ul>
          </nav>
          <aside class="footer-block col-xs-12 col-sm-4">
            <p class="footer-title">Liens externes</p>
            <ul>
              <li v-for="social in socials">
                <a :href="social.url"><span :class="social.iconClasses"></span> {{social.name}}</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Socials from '../../scripts/socials'
import MainPages from './main-pages'
export default {
  data: function () {
    return {
      socials: Socials,
      mainPages: MainPages
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/variables-mixins.less';
@header-height: 70px;
.main-header {
  h1, nav, aside {
    display: block;
    height: @header-height;
    line-height: @header-height;
    overflow: hidden;
    vertical-align: top;
    margin: 0;
  }
  h1 {
    float: left;
    font-size: 1.3em;
    font-weight: 600;
    letter-spacing: -1px;
    color: @primary-color;
    a {
      .back-icon {
        display: inline-block;
        visibility: visible;
        opacity: 1;
        width: 1em;
        font-size: 1.1em;
        font-weight: bold;
        .animate(width, visibility, opacity;);
      }
      &.router-link-exact-active .back-icon {
        visibility: hidden;
        opacity: 0;
        width: 0;
      }
    }
  }
  nav {
    float: left;
    margin-left: 40px;
    ul li {
      margin: 0 8px;
    }
    a {
      color: @secondary-color;
      &:hover, &:focus, &.router-link-exact-active {
        color: @dark-secondary-color;
      }
    }
  }
  aside {
    float: right;
    font-size: 1.2em;
    ul li {
      margin: 0 10px 0 0;
      &:last-child {
        margin: 0;
      }
    }
  }
  ul {
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      display: inline-block;
    }
  }
  @media (max-width: @screen-xs-max) {
    h1, nav, aside {
      float: none;
      height: auto;
      line-height: 2em;
      text-align: center;
    }
    h1 {
      margin: 20px 0 10px 0;
      font-size: 1.5em;
    }
    nav {
      margin: 10px 0 20px 0;
    }
  }
}
main {
}
.main-footer {
  padding: 20px 0;
  background: @light-background-color;
  font-size: 0.9em;
  .footer-block {
    margin: 0;
  }
  .footer-title {
    margin: 0 0 8px 0;
    font-weight: bold;
    font-size: 0.9em;
    text-transform: uppercase;
    color: @light-text-color;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  p {
    margin: 0;
  }
  @media (max-width: @screen-xs-max) {
    text-align: center;
    .footer-block {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
