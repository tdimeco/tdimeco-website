<template lang="pug">
#app
  header.main-header
    .container
      h1
        router-link(:to="{ name: 'home' }")
          span.back-icon.fas.fa-angle-left
          | Thomas Di&nbsp;Meco
      nav
        ul
          li(v-for="page in mainPages")
            router-link(:to="{ name: page.pageName }") {{page.title}}
      aside.hidden-xs
        ul
          li(v-for="social in socials.all")
            a(:href="social.url" :title="'Voir ' + social.title")
              span(:class="social.iconClasses")
  main
    router-view
  footer.main-footer
    .container
      .row
        .footer-block.col-xs-12.col-sm-4
          p.footer-title tdimeco.fr
          p
            router-link(:to="{ name: 'about' }") Me contacter
          p
            router-link(:to="{ name: 'terms' }") Mentions légales
        nav.footer-block.col-xs-12.col-sm-4
          p.footer-title Navigation
          ul
            li
              router-link(:to="{ name: 'home' }") Page d'accueil
            li(v-for="page in mainPages")
              router-link(:to="{ name: page.pageName }") {{page.title}}
        aside.footer-block.col-xs-12.col-sm-4
          p.footer-title Liens externes
          ul
            li(v-for="social in socials.all")
              a(:href="social.url")
                | #[span.leading-icon(:class="social.iconClasses")] {{social.title}}
</template>

<script lang="coffee">
import MainPages from '../data/main-pages.coffee'
import Socials from '../data/socials.coffee'
export default
  data: ->
    socials: Socials,
    mainPages: MainPages
</script>

<style lang="less" scoped>
@import '../styles/variables-mixins.less';
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
        width: 0.9em;
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
    font-weight: 600;
    ul li {
      margin: 0 8px;
    }
    a {
      color: @secondary-color;
      &:hover, &:focus, &.router-link-active {
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
      line-height: 1.5em;
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
  font-size: 0.95em;
  line-height: 1.5em;
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
