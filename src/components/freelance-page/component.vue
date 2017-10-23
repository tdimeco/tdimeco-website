<template>
  <div>
    <page-header title="Freelance" subtitle="Ingénieur développeur iOS / macOS / watchOS natif"></page-header>
    <div class="container">
      <div class="text-container">
        <p>Vous avez l'idée du siècle et vous souhaitez une application mobile native iOS (iPhone et/ou iPad) pour la concrétiser ? Vous souhaitez également une app Apple Watch ou Mac ? Alors vous êtes au bon endroit, allons-y. <span class="fa fa-smile-o"></span></p>
        <h4>À propos de moi</h4>
        <p>Je vais tout d'abord me présenter de manière succincte : je m'appelle Thomas, je suis ingénieur développeur iOS / macOS / watchOS natif et auto-entrepreneur. Je suis passionné par mon métier et particulièrement par le développement mobile. Je trouve ce domaine très intéressant par sa richesse, son évolution rapide, la diversité des technologies utilisées (réseau, bluetooth, géolocalisation, navigation, mouvements dans l'espace, réalité augmentée, machine-learning, 3D...) ainsi que par les challenges soulevés (autonomie, puissance, perte de réseau, synchronisation...). Chaque application possède ses propres problématiques qu'il faut résoudre et c'est ça qui m'intéresse.</p>
        <p>Pour en savoir plus, je vous invite à lire la page <router-link :to="{ name: 'about' }">À propos</router-link>, qui est bien plus complète.</p>
        <h4>Mes compétences</h4>
        <p>Mon rôle en tant que développeur ne se limite pas à programmer votre application. Je peux vous accompagner sur une grande partie de votre projet, dont voici une liste non exhaustive :</p>
        <ul>
          <li><strong>Conception fonctionnelle</strong> : Si vous avez besoin d'assistance pour penser et concevoir votre produit, je peux vous aider à la rédaction du cahier des charges.</li>
          <li><strong>User Experience (UX)</strong> : Je ne suis en aucun cas un UX designer professionnel. Cependant, l'écosystème Apple m'a habitué à voir et utiliser des interfaces ergonomiques et j'ai l'habitude de travailler et d'échanger avec des professionnels du milieu. Sans pour autant les remplacer, je suis tout de même sensibilisé et je peux vous conseiller pour la conception de vos interfaces simples.</li>
          <li><strong>User Interface (UI)</strong> : De la même manière que précédemment, je ne suis pas un UI designer professionnel. Cependant, si vous ne souhaitez pas faire appel à une personne qualifiée, je peux vous proposer un design graphique simple et sans <em>froufrou</em> (oui voilà, du flat design).</li>
          <li><strong>Conception technique et architecture</strong> : Une des parties les plus importantes de mon métier consiste à concevoir et architecturer techniquement une application. Pour moi, c'est aussi la partie la plus intéressante de mon travail.</li>
          <li><strong>Développement</strong> : C'est l'autre partie principale de mon travail, à savoir coder l'application. Mes compétences techniques sont décrites plus bas.</li>
          <li><strong>Tests et optimisations</strong> : Je travaille beaucoup à l'aide de la méthode AGILE. Je préfère donc vous envoyer régulièrement des versions intermédiaires de l'application pour que vous puissiez la tester et me faire des retours le plus tôt possible.</li>
          <li><strong>Livraison et mise en production</strong> : Le point d'orgue de toute application, la mise en production. Je peux, si vous le souhaitez, me charger de livrer l'application depuis votre espace iTunes Connect. Je peux également vous conseiller si vous souhaitez un déploiement en interne (In House).</li>
        </ul>
        <p>Concernant mes compétences techniques, je programme principalement en <strong>Swift (1, 2, 3, 4, 12, 42...)</strong> mais aussi <strong>Objective-C</strong> si besoin. Je sais utiliser une grande partie des frameworks principaux d'Apple (Foundation, UIKit, Core Data/Location/Motion, CloudKit, libdispatch...). Je ne vais pas déballer la liste de tous les frameworks que j'ai utilisés, mais sachez que ça ne sera jamais un problème ou un frein si je dois en apprendre un. Concernant mon workflow, il est composé en général de <strong>Git</strong>, <strong>CocoaPods</strong>, <strong>Fastlane</strong>..., ainsi que des outils comme <strong>POEditor</strong> ou <strong>Zeplin</strong>. Mais je sais m'adapter. Je fais de la veille technologique en permanence et je me penche régulièrement sur les tendances du moment (Fastlane, Realm, RxSwift...) par curiosité, mais aussi pour voir le potentiel d'amélioration de mon workflow.</p>
        <p>Si vous souhaitez en savoir plus, le mieux est encore de me contacter pour en discuter ensemble.</p>
        <h4>Mes expériences</h4>
        <p>J'ai plusieurs expériences en développement iOS / macOS / watchOS, en voici certaines :</p>
        <ul>
          <li><strong>Freelance (2016-Maintenant)</strong> : J'ai créé quelques applications, dont quelques-unes sont visibles sur la page <router-link :to="{ name: 'apps' }">Apps</router-link>.</li>
          <li><strong>Pôle mobile chez AUSY (2015-2017)</strong> : Avec mon équipe, nous avons créé et maintenu une dizaine d'applications iOS. Nous avons utilisé plusieurs technos intéressantes comme les Beacons (pour faire de la cartographie en intérieur), de la connectivité Bluetooth, du traitement algorithmique en temps réel à l'aide du framework Accelerate...</li>
          <li><strong>Expériences personnelles (2011-Maintenant)</strong> : Sur mon temps personnel, je crée aussi des applications, dont certaines sont disponibles sur la page <router-link :to="{ name: 'apps' }">Apps</router-link> ou sur <a href="https://github.com/tdimeco">GitHub</a>.</li>
        </ul>
        <h4>Me contacter</h4>
        <p>Je suis à votre écoute si vous souhaitez discuter, poser des questions ou demander un devis. N'hésitez pas.</p>
        <ul class="bottom-links">
          <li>
            <a class="btn btn-primary" @click="sendEmail()"><span class="fa fa-envelope"></span> Envoyer un email</a>
          </li><li v-for="social in socials" v-if="social.relatedToFreelance">
            <a :href="social.url" class="btn btn-primary"><span :class="social.iconClasses"></span> {{social.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../page-header/component.vue'
import Email from '../../scripts/email'
import Socials from '../../scripts/socials'
export default {
  components: {PageHeader},
  data: function () {
    return {
      socials: Socials
    }
  },
  methods: {
    sendEmail: function () {
      Email.openContactEmail()
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/variables-mixins.less';
.text-container {
  margin: @grid-gutter-width 0;
  text-align: justify;
  h4::before {
    content: '';
    display: block;
    border-top: 2px solid #dddddd;
    margin: 30px auto;
    width: 50%;
  }
  ul {
    li {
      margin-bottom: 5px;
    }
  }
  .bottom-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
    li {
      display: inline-block;
      margin: 3px;
    }
  }
}
</style>
