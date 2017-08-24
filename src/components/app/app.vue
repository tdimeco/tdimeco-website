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
            <li><router-link :to="{ name: 'apps' }">Apps</router-link></li>
            <li><router-link :to="{ name: 'freelance' }">Freelance</router-link></li>
            <li><router-link :to="{ name: 'about' }">À propos</router-link></li>
          </ul>
        </nav>
        <aside class="hidden-xs">
          <ul>
            <li><a href="https://twitter.com/thomasdimeco" title="Voir Twitter"><span class="fa fa-twitter"></span></a></li>
            <li><a href="https://github.com/tdimeco" title="Voir GitHub"><span class="fa fa-github"></span></a></li>
            <li><a href="https://www.linkedin.com/pub/thomas-di-meco/60/329/500" title="Voir LinkedIn"><span class="fa fa-linkedin"></span></a></li>
            <li><a href="https://www.flickr.com/photos/tdimeco/" title="Voir Flickr"><span class="fa fa-flickr"></span></a></li>
            <li><router-link :to="{ name: 'about' }" title="Envoyer un email"><span class="fa fa-envelope"></span></router-link></li>
          </ul>
        </aside>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="main-footer">
      <div class="container">
        FOOTER
      </div>
    </footer>
  </div>
</template>

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
    color: @accent-color;
    a {
      .default-animation();
      .back-icon {
        display: inline-block;
        visibility: visible;
        opacity: 1;
        width: 1em;
        font-size: 1.1em;
        font-weight: bold;
        .default-animation();
        transition-property: width, visibility, opacity;
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
        color: @darken-secondary-color;
      }
    }
  }
  aside {
    float: right;
    a {
      color: @accent-color;
      font-size: 1.2em;
      &:hover, &:focus {
        color: @darken-accent-color;
      }
    }
    ul li {
      margin: 0 8px 0 0;
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
    }
    nav {
      margin: 10px 0 20px 0;
    }
  }
}
main {
}
footer {
  padding: 20px 15px;
  background: #eeeeee;
  text-align: justify;
}
</style>
