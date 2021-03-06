<template lang="pug">
section
  page-header(title="Freelance" subtitle="Ingénieur développeur iOS et macOS")
  .container
    .text-container
      p Vous avez l'idée du siècle et vous souhaitez une application mobile iOS (iPhone et/ou iPad) pour la concrétiser ? Vous souhaitez également une app Apple Watch ou Mac ? Alors vous êtes au bon endroit, allons-y. ☺
      h4 #[span.fas.fa-user.leading-icon] À propos de moi
      p Je vais tout d'abord me présenter de manière succincte : je m'appelle Thomas, je suis ingénieur développeur iOS et macOS et entrepreneur. Je suis passionné par mon métier et particulièrement par le développement mobile. Je trouve ce domaine très intéressant par sa richesse, son évolution rapide, la diversité des technologies utilisées (réseau, Bluetooth, géolocalisation, navigation, mouvements dans l'espace, réalité augmentée, machine-learning, 3D...) ainsi que par les challenges soulevés (autonomie, puissance, perte de réseau, synchronisation...). Chaque application possède ses propres problématiques qu'il faut résoudre et c'est ça qui m'intéresse.
      p Pour en savoir plus, je vous invite à lire la page #[router-link(:to="{ name: 'about' }") À propos], qui est bien plus complète.
      h4 #[span.fas.fa-star.leading-icon] Mes compétences
      p Mon rôle en tant que développeur ne se limite pas à programmer votre application. Je peux vous accompagner sur une grande partie de votre projet, dont voici une liste non exhaustive :
      ul
        li #[strong Conception fonctionnelle] : Si vous avez besoin d'assistance pour penser et concevoir votre produit, je peux vous aider à la rédaction du cahier des charges.
        li #[strong User Experience (UX)] : Je ne suis en aucun cas un UX designer professionnel. Cependant, l'écosystème Apple m'a habitué à voir et utiliser des interfaces ergonomiques et j'ai l'habitude de travailler et d'échanger avec des professionnels du milieu. Sans pour autant les remplacer, je suis tout de même sensibilisé et je peux vous conseiller pour la conception de vos interfaces simples.
        li #[strong User Interface (UI)] : De la même manière que précédemment, je ne suis pas un UI designer professionnel. Cependant, si vous ne souhaitez pas faire appel à une personne qualifiée, je peux vous proposer un design graphique simple et sans fioritures (oui voilà, du flat design).
        li #[strong Conception technique et architecture] : Une des parties les plus importantes de mon métier consiste à concevoir et architecturer techniquement une application. Pour moi, c'est aussi la partie la plus intéressante de mon travail.
        li #[strong Développement] : C'est l'autre partie principale de mon travail, à savoir coder et tester l'application. Mes compétences techniques sont décrites plus bas.
        li #[strong Tests et optimisations] : Je travaille beaucoup à l'aide de la méthode AGILE. Je préfère donc vous envoyer régulièrement des versions intermédiaires de l'application pour que vous puissiez la tester et me faire des retours le plus tôt possible.
        li #[strong Livraison et mise en production] : Le point d'orgue de toute application, la mise en production. Je peux, si vous le souhaitez, me charger de livrer l'application depuis votre espace App Store Connect. Je peux également vous conseiller si vous souhaitez un déploiement en interne (In House).
      p Concernant mes compétences techniques, je programme principalement en #[strong Swift]. Je sais utiliser une grande partie des frameworks principaux d'Apple (Foundation, UIKit, Core Data/Location/Motion, WatchKit, HealthKit, ARKit, libdispatch...). Je ne vais pas déballer la liste de tous les frameworks que j'ai utilisés, mais sachez que ça ne sera jamais un problème ou un frein si je dois en apprendre un. Concernant mon workflow, il est composé en général de #[strong Git], #[strong CocoaPods/Carthage], #[strong Fastlane]..., ainsi que des outils comme #[strong POEditor], #[strong Sketch] ou #[strong Zeplin]. Mais je sais m'adapter. Je fais de la veille technologique en permanence et je me penche régulièrement sur les tendances du moment (SwiftUI, Combine, MVVM, Realm, SPM, Vapor...) par curiosité, mais aussi pour voir le potentiel d'amélioration de mon workflow.
      p Si vous souhaitez en savoir plus, le mieux est encore de me contacter pour en discuter ensemble.
      h4 #[span.fas.fa-road.leading-icon] Mes expériences
      p J'ai plusieurs expériences en développement iOS et macOS :
      ul
        li #[strong CraftedBits (2019-Maintenant)] : Je suis cofondateur de la société #[a(href="https://www.craftedbits.io") CraftedBits], spécialisée dans le développement de projets orientés mobile et dans la formation et le conseil.
        li #[strong Freelance (2016-Maintenant)] : Je crée des applications pour mes clients, dont quelques-unes sont visibles sur la page #[router-link(:to="{ name: 'apps' }") Apps].
        li #[strong Pôle mobile chez AUSY (2015-2017)] : Avec mon équipe, nous avons créé et maintenu une dizaine d'applications iOS. Nous avons utilisé plusieurs technos intéressantes comme les Beacons (pour faire de la cartographie en intérieur), de la connectivité Bluetooth, du traitement algorithmique en temps réel à l'aide du framework Accelerate...
        li #[strong Expériences personnelles (2011-Maintenant)] : Sur mon temps personnel, je crée aussi des applications, dont certaines sont disponibles sur la page #[router-link(:to="{ name: 'apps' }") Apps] ou sur #[a(:href="socials.named.github.url") GitHub].
      h4 #[span.fas.fa-paper-plane.leading-icon] Me contacter
      p Je suis à votre écoute si vous souhaitez discuter, poser des questions ou demander un devis. N'hésitez pas.
      ul.bottom-links
        li
          button.btn.btn-primary(@click="sendEmail()")
            | #[span.fas.fa-envelope.leading-icon] Envoyer un email
        li(v-for="social in socials.all" v-if="social.isRelatedToFreelance")
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
    socials: Socials
  methods:
    sendEmail: ->
      Email.openContactEmail()
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
  ul li {
    margin-bottom: 0.6rem;
  }
}
</style>
