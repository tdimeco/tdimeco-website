<template>
  <div>
    <page-header title="À propos" subtitle="Qui suis-je, que fais-je ?"></page-header>
    <div class="container">
      <div class="text-container">
        <img class="avatar" src="https://www.gravatar.com/avatar/0d992c3b1b178607c6a6cd98f7d33d2c?s=256" alt="Thomas Di Meco" title="Thomas Di Meco">
        <p>Bien le bonjour ! Je vous souhaite la bienvenue sur mon site qui a pour but de centraliser mes activités personnelles et professionnelles. Si vous êtes sur cette page, c'est que vous souhaitez en savoir un peu plus sur moi (n'est-ce pas ?). Comme tout bon site vitrine qui se respecte, je vais donc vous donner quelques informations triées sur le volet par mes soins, parler de moi à la première personne, présenter mes qualités sans évoquer mes défauts et être égocentrique le reste de cette page. <span class="fa fa-smile-o"></span></p>
        <p>Je m'appelle Thomas, j'ai {{age}} ans et je suis ingénieur développeur iOS / macOS / watchOS freelance. J'habite près de Sophia Antipolis &mdash; dans les Alpes-Maritimes &mdash; et j'ai fait mes études à l'IUT d'Aix-en-Provence puis à Polytech'Nice-Sophia. Je m'intéresse à beaucoup de choses, j'aime découvrir, j'aime comprendre, j'aime apprendre, j'aime partager et j'aime créer. Je suis passionné par l'informatique en général, mais aussi par les jeux vidéo, la photographie et l'astronomie.</p>
        <h4>Informatique</h4>
        <p>L'informatique, c'est vaste. Très vaste. J'aimerais pouvoir tout faire, tout connaître, du hardware au software, de l'assembleur au Swift, du machine-learning à l'ergonomie... Seulement je n'ai qu'une seule vie. J'ai donc choisi de me spécialiser en développement natif iOS / macOS / watchOS.</p>
        <p>Je trouve le métier de développeur iOS particulièrement intéressant car il est en pleine expansion et il me fait évoluer sous plusieurs aspects. C'est un des rares où on peut se retrouver à créer une application de A à Z, de la conception à la mise en production sur les stores, en utilisant tout un tas de technologies comme le réseau, le bluetooth, la géolocalisation, la navigation, les mouvements dans l'espace, la réalité augmentée, le machine-learning, la 3D... Et tout cela sur un petit appareil donc il faut préserver la batterie et avoir un recul ergonomique suffisant pour rendre son application utilisable et utilisée.</p>
        <p>Je code essentiellement en Swift pour mes applications iOS / macOS / watchOS. C'est un langage que j'affectionne particulièrement et qui évolue beaucoup. Je suis de très près son évolution et j'apprends à m'en servir à son maximum.</p>
        <p>C'est donc pour cela que je suis développeur iOS natif, et que j'en ai fait mon activité principale en tant que freelance. Pour en savoir plus sur mon activité ou si vous souhaitez un devis ou une prestation, la page <router-link :to="{ name: 'freelance' }">Freelance</router-link> est à votre disposition. Pour en savoir plus sur mon parcours et mes compétences, je vous invite à visiter mon profil <a href="https://www.linkedin.com/in/thomas-di-meco-50032960/">LinkedIn</a>.</p>
        <p class="text-center">
          <router-link class="btn btn-primary" :to="{ name: 'apps' }"><span class="fa fa-apple"></span> Mes apps</router-link>
          <router-link class="btn btn-primary" :to="{ name: 'freelance' }"><span class="fa fa-link"></span> Mon activité freelance</router-link>
          <a class="btn btn-primary" href="https://github.com/tdimeco"><span class="fa fa-github"></span> GitHub</a>
          <a class="btn btn-primary" href="https://www.linkedin.com/in/thomas-di-meco-50032960/"><span class="fa fa-linkedin"></span> LinkedIn</a>
        </p>
        <h4>Astrophotographie</h4>
        <p>J'aime la photographie. Je suis passionné par l'astronomie depuis mon enfance. Quoi de mieux que combiner les deux et être astrophotographe amateur ?</p>
        <p>En réalité, l'astrophotographie n'a presque plus rien à voir avec la photographie. Là où je cherche la spontanéité et la créativité en photographie, l'astrophotographie est l'exact opposé. Cela demande de la précision, de la réflexion et beaucoup de patience ! Oui, beaucoup ! Il n'est pas rare de devoir attendre 6 mois pour pouvoir enfin prendre un objet céleste en photo. Il n'est pas rare de faire 2h de trajet pour se perdre dans les Alpes et avoir le moins de pollution lumineuse possible, et ainsi passer la nuit entière à faire des poses longues du même objet, avec l'appareil posé sur une monture motorisée et qui menace de bouger à chaque instant au risque de foirer la nuit entière ! Il n'est pas rare de passer une journée entière à traiter, calibrer et retoucher une seule photo. Mais le résultat est souvent gratifiant et la beauté de certains objets célestes me laisse rêveur.</p>
        <p>Vous pouvez consulter quelques-unes de ces photos sur la page <router-link :to="{ name: 'photos' }">Photos</router-link>.
        <p class="text-center">
          <router-link class="btn btn-primary" :to="{ name: 'photos' }"><span class="fa fa-camera"></span> Mes photos</router-link>
          <a class="btn btn-primary" href="https://www.flickr.com/photos/tdimeco/"><span class="fa fa-flickr"></span> Flickr</a>
        </p>
        <h4>Me contacter</h4>
        <p>La parole est à vous. Si vous avez la moindre question ou simplement pour discuter de la pluie et du beau temps, vous pouvez m'envoyer un email ou me tweeter. À bientôt !</p>
        <p class="text-center">
          <a class="btn btn-primary" @click="sendEmail()"><span class="fa fa-envelope"></span> Envoyer un email</a>
          <a class="btn btn-primary" href="https://twitter.com/thomasdimeco"><span class="fa fa-twitter"></span> Twitter</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../page-header/component.vue'
import Email from './email'
export default {
  components: {PageHeader},
  data: function () {
    return {
      age: 0
    }
  },
  methods: {
    sendEmail: function () {
      Email.openContactEmail()
    }
  },
  created: function () {
    // Compute age
    var birthmonth = new Date(1991, 4) // May 1991
    var ageDiff = Date.now() - birthmonth.getTime()
    var ageDate = new Date(ageDiff)
    this.age = Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/variables-mixins.less';
.text-container {
  margin: @grid-gutter-width 0;
  text-align: justify;
  .avatar {
    display: block;
    float: left;
    width: 128px;
    height: 128px;
    margin: 0 15px 10px 0;
    border-radius: 50%;
    background-color: @light-background-color;
  }
  .btn {
    margin: 2px 0;
  }
}
@media (max-width: @screen-xs-max) {
  .text-container {
    margin: (@grid-gutter-width / 2) 0;
    .avatar {
      float: none;
      margin: 0 auto 15px auto;
    }
  }
}
</style>
