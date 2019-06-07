<template lang="pug">
#app
  header
    .container
      h1
        router-link(:to="{ name: 'home' }")
          span.back-icon.fas.fa-chevron-circle-left
          span Thomas Di&nbsp;Meco
      nav
        ul
          li(v-for="page in mainPages")
            router-link(:to="{ name: page.pageName }") {{page.title}}
      aside.d-none.d-md-block
        ul
          li(v-for="social in socials.all")
            a(:href="social.url" :title="'Voir ' + social.title")
              span(:class="social.iconClasses")
  main
    router-view
  footer
    .container
      .row
        aside.footer-section.col-sm-4
          p.footer-title tdimeco.fr
          ul
            li #[router-link(:to="{ name: 'about' }") Me contacter]
            li #[router-link(:to="{ name: 'terms' }") Mentions légales]
        nav.footer-section.col-sm-4
          p.footer-title Navigation
          ul
            li #[router-link(:to="{ name: 'home' }") Page d'accueil]
            li(v-for="page in mainPages")
              router-link(:to="{ name: page.pageName }") {{page.title}}
        aside.footer-section.col-sm-4
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

<style lang="scss" scoped>
@import "../styles/variables-mixins";
header .container {
  display: flex;
  align-items: center;
  h1, nav, aside {
    display: inline-block;
  }
  h1 {
    flex-shrink: 0;
    margin: 0;
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: -0.06rem;
    a {
      display: flex;
      align-items: center;
      .back-icon {
        margin-top: 0.05rem;
        visibility: visible;
        opacity: 1;
        font-size: 1.1rem;
        width: 1.7rem;
        @include animate((width, visibility, opacity));
      }
      &.router-link-exact-active .back-icon {
        visibility: hidden;
        opacity: 0;
        width: 0;
      }
    }
  }
  nav {
    flex-grow: 1;
    margin: 1.2rem 0 1.1rem 2rem;
    font-weight: 600;
    ul li {
      margin: 0 0.5rem;
    }
    a {
      color: $secondary-color;
      &:hover, &:focus, &.router-link-active {
        color: $dark-secondary-color;
      }
    }
  }
  aside {
    margin: 0.1rem 0 0 0;
    font-size: 1.4rem;
    ul li {
      margin: 0 0.6rem 0 0;
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
  @include media-breakpoint-down(sm) {
    display: block;
    text-align: center;
    h1 {
      margin: 1.6rem 0 0.4rem 0;
      font-size: 1.8rem;
    }
    nav {
      margin: 0.6rem 0 1.3rem 0;
    }
  }
}
footer {
  padding: 1.2rem 0;
  background: $light-background-color;
  font-size: 1.2rem;
  .footer-section {
    margin: 0;
  }
  .footer-title {
    margin: 0 0 0.5rem 0;
    font-weight: bold;
    font-size: 1.05rem;
    text-transform: uppercase;
    color: $light-text-color;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  @include media-breakpoint-down(xs) {
    text-align: center;
    ul li {
      margin: 0.3rem 0;
    }
    .footer-section {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
