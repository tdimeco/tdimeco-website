<template lang="pug">
section
  page-header(title="À propos" subtitle="Qui suis-je, que fais-je ?")
  .container
    .text-container
      img.avatar(src="https://www.gravatar.com/avatar/7fa7d412736b54b102f5ef6274a62130?s=384" alt="Thomas Di Meco" title="Thomas Di Meco")
      p Bien le bonjour ! Je vous souhaite la bienvenue sur mon site qui a pour but de centraliser mes activités personnelles et professionnelles. Si vous êtes là, c'est que vous souhaitez en savoir un peu plus sur moi (n'est-ce pas ?). Comme tout bon site vitrine qui se respecte, je vais donc vous donner quelques informations triées sur le volet par mes soins, parler de moi à la première personne, présenter mes qualités sans évoquer mes défauts et être égocentrique le reste de cette page. ☺
      p Je m'appelle Thomas, j'ai {{age}} ans et je suis ingénieur développeur iOS et macOS freelance. J'habite près de Sophia Antipolis — dans les Alpes-Maritimes — et j'ai fait mes études à l'IUT d'Aix-en-Provence puis à Polytech'Nice-Sophia. Je m'intéresse à beaucoup de choses, j'aime découvrir, j'aime comprendre, j'aime apprendre, j'aime partager et j'aime créer. Je suis passionné par l'informatique en général, mais aussi par les jeux vidéo, la photographie et l'astronomie.
      h4 #[span.fas.fa-laptop.leading-icon] Informatique
      p L'informatique, c'est vaste. Très vaste. J'aimerais pouvoir tout faire, tout connaître, du hardware au software, de l'assembleur au Swift, du machine-learning à l'ergonomie... Seulement je n'ai qu'une seule vie. J'ai donc choisi de me spécialiser en développement mobile iOS et macOS.
      p Je trouve le métier de développeur iOS particulièrement intéressant car il est en pleine expansion et il me fait évoluer sous plusieurs aspects. C'est un des rares où l'on peut se retrouver à créer une application de A à Z, de la conception à la mise en production sur les stores, en utilisant tout un tas de technologies comme le réseau, le Bluetooth, la géolocalisation, la navigation, les mouvements dans l'espace, la réalité augmentée, le machine-learning, la 3D... Et tout cela sur un petit appareil donc il faut préserver la batterie et avoir un recul ergonomique suffisant pour rendre son application utilisable et utilisée.
      p Je code essentiellement en Swift pour mes applications iOS et macOS. C'est un langage que j'affectionne particulièrement et qui évolue rapidement. Je suis de très près son évolution, j'essaie de contribuer au langage et j'apprends à m'en servir à son maximum.
      p C'est donc pour cela que je suis développeur mobile iOS, et que j'en ai fait mon activité principale en tant que freelance. Je suis également cofondateur de la société #[a(href="https://www.craftedbits.io") CraftedBits], spécialisée dans le développement de projets orientés mobile et dans la formation et le conseil.
      p Pour en savoir plus sur mon activité ou si vous souhaitez un devis ou une prestation, la page #[router-link(:to="{ name: 'freelance' }") Freelance] est à votre disposition. Pour en savoir plus sur mon parcours et mes compétences, je vous invite à visiter mon profil #[a(:href="socials.named.linkedin.url") LinkedIn]. Et si vous souhaitez voir quelques-unes des apps que j'ai faites ou aider à faire, il y a la page #[router-link(:to="{ name: 'apps' }") Apps].
      h4 #[span.fas.fa-camera.leading-icon] Astrophotographie
      p J'aime la photographie. Je suis passionné par l'astronomie depuis mon enfance. Quoi de mieux que combiner les deux et être astrophotographe amateur ?
      p En réalité, l'astrophotographie n'a presque plus rien à voir avec la photographie. Là où je cherche la spontanéité et la créativité en photographie, l'astrophotographie est l'exact opposé. Cela demande de la précision, de la réflexion et beaucoup de patience ! Oui, beaucoup ! Il n'est pas rare de devoir attendre 6 mois pour pouvoir enfin prendre un objet céleste en photo. Il n'est pas rare de faire 2h de trajet pour se perdre dans les Alpes et avoir le moins de pollution lumineuse possible, et ainsi passer la nuit entière à faire des poses longues du même objet, avec l'appareil posé sur une monture motorisée et qui menace de bouger à chaque instant au risque de foirer la nuit entière ! Il n'est pas rare de passer une journée entière à traiter, calibrer et retoucher une seule photo. Mais le résultat est souvent gratifiant et la beauté de certains objets célestes me laisse rêveur.
      p Vous pouvez consulter quelques-unes de ces photos sur la page #[router-link(:to="{ name: 'photos' }") Photos].
      h4#contact #[span.fas.fa-paper-plane.leading-icon] Me contacter
      p La parole est à vous. Si vous avez la moindre question ou simplement pour discuter de la pluie et du beau temps, vous pouvez m'envoyer un email ou me contacter sur le réseau social adéquat. À bientôt !
      ul.bottom-links
        li
          button.btn.btn-primary(@click="sendEmail()")
            | #[span.fas.fa-envelope.leading-icon] Envoyer un email
        li(v-for="social in socials.all")
          a.btn.btn-primary(:href="social.url")
            | #[span.leading-icon(:class="social.iconClasses")] {{social.title}}
</template>

<script lang="coffee">
import PageHeader from './page-header.vue'
import Email from '../scripts/email.coffee'
import Socials from '../data/socials.coffee'
export default
  components: {PageHeader}
  data: ->
    age: 0
    socials: Socials
  methods:
    sendEmail: ->
      Email.openContactEmail()
      return
  created: ->
    # Compute age
    birthmonth = new Date(1991, 4) # May 1991
    ageDiff = Date.now() - birthmonth.getTime()
    ageDate = new Date(ageDiff)
    @age = Math.abs(ageDate.getUTCFullYear() - 1970)
    return
</script>

<style lang="scss" scoped>
@import "../styles/variables-mixins";
.text-container {
  margin: $grid-gutter-width 0;
  text-align: justify;
  h4 {
    @include title-divider()
  }
  .avatar {
    display: block;
    float: left;
    width: 8rem;
    height: 8rem;
    margin: 0 1rem 0.7rem 0;
    border-radius: 50%;
    background-color: var(--background-2-color);
  }
}
@include media-breakpoint-down(xs) {
  .text-container {
    margin: ($grid-gutter-width / 2) 0;
    .avatar {
      float: none;
      margin: 0 auto 1rem auto;
    }
  }
}
</style>
