//
// Database service
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Service declaration
  app.factory('database', function () {

    var homeItems = [
      {
        key: 'touchram',
        color: '#7271be',
        title: 'TouchRAM',
        description: 'TouchRAM est un projet de recherche de l\'université McGill à Montréal. C\'est un logiciel de modélisation orientée aspects, tactile et collaboratif, basé sur le langage de modélisation RAM. J\'ai collaboré dans l\'équipe pendant six mois à la conception et à l\'implémentation du générateur de code.',
        year: 2014,
        links: [
          {label: 'Site web', url: 'http://www.cs.mcgill.ca/~joerg/SEL/TouchRAM.html'}
        ]
      }, {
        key: 'smartcampus',
        color: '#3d9946',
        title: 'Smart Campus',
        description: 'Smart Campus est le projet de fin d\'études à Polytech\'Nice-Sophia que j\'ai réalisé en équipe avec trois de mes collègues. Nous avons réfléchi et conçu une architecture de collecte de données en provenance de capteurs à l\'échelle d\'un campus universitaire. Nous avons eu à résoudre diverses problématiques liées à l\'hétérogénéité des plateformes de capteurs, au passage à l\'échelle, à l\'accès aux données et à la reconfiguration distante. En amont de ce projet, un cahier des charges complet et une étude budgétaire ont été réalisés.',
        year: 2014,
        links: [
          {label: 'Site web', url: 'http://smartcampus.github.io'},
          {label: 'GitHub', url: 'https://github.com/SmartCampus'}
        ]
      }, {
        key: 'photos',
        color: '#b22d32',
        title: 'Photographie',
        description: 'La photo est une récente passion que je pratique régulièrement. J\'aime particulièrement la photo de mise en scène, de portrait, mais aussi l\'astrophotographie. Ce site et ma page Flickr regroupent certaines photos que je trouve intéressantes à partager.',
        links: [
          {label: 'Galerie photo', url: 'photos'}
        ]
      }, {
        key: 'cubosphere',
        color: '#fda428',
        title: 'Cubosphere',
        description: 'Cubosphere est un jeu allemand indépendant et innovant très proche de <a href="http://fr.wikipedia.org/wiki/Kula_World">Kula World</a>. J\'ai collaboré pendant plusieurs semaines avec les auteurs pour porter le jeu sous Mac, le traduire en français et concevoir certains niveaux du jeu.',
        year: 2012,
        links: [
          {label: 'SourceForge', url: 'http://sourceforge.net/projects/cubosphere/'}
        ]
      }, {
        key: 'myrmes',
        color: '#aa771a',
        title: 'Myrmes Arena',
        description: 'Myrmes Arena est une application que j\'ai réalisé avec trois de mes collègues et qui permet d\'avoir un rendu visuel automatisé d\'une partie du jeu de société <a href="https://www.google.fr/search?q=Myrmes">Myrmes</a>. Les données brutes des parties proviennent de l\'intelligence artificielle créée dans le cadre des projets de SI3 à Polytech\'Nice-Sophia.',
        year: 2013,
        links: [
          {label: 'GitHub', url: 'https://github.com/tdimeco/MyrmesArena'}
        ]
      }, {
        key: 'be',
        color: '#ce0e69',
        title: 'Éditeur de looks de Be.com',
        description: 'Refonte du module web de création de moodboards et de streestyles du site de mode Be.com dans le cadre d\'un stage de trois mois.',
        year: 2013,
        links: [
          {label: 'Site web', url: 'http://www.be.com'}
        ]
      }, {
        key: 'nebula',
        color: '#71a3bd',
        title: 'Nebula &mdash; Jeu pour déficients visuels',
        description: 'Nebula est un jeu vidéo adapté pour les malvoyants que mes amis et moi avons créé dans le cadre des projets DeViNT à Polytech\'Nice-Sophia. Nous avons gagné le prix <em>spécial créativité</em> lors du concours organisé cette année là.',
        year: 2012,
        links: [
          {label: 'Google Code', url: 'https://code.google.com/p/epu-nebula/'}
        ]
      }, {
        key: 'procsi',
        color: '#664534',
        title: 'Émulateur d\'assembleur PROCSI',
        description: 'PROCSI est un langage assembleur bas niveau. Mon collègue et moi avons créé un émulateur programmé en C capable d\'interpréter et d’exécuter une liste d\'instructions en assembleur PROCSI.',
        year: 2012,
        links: [
          {label: 'Google Code', url: 'http://code.google.com/p/epu-emu-procsi/'}
        ]
      }, {
        key: 'portal',
        color: '#c397aa',
        title: 'Portal &mdash; Animation typographique',
        description: 'Très fan de la série des jeux vidéo Portal, j\'ai réalisé une vidéo d\'animation typographique mettant en scène les paroles de la célèbre chanson <em>Still Alive</em> du jeu.',
        year: 2010,
        links: [
          {label: 'YouTube', url: 'http://www.youtube.com/watch?v=vzecc6ud1Zw'}
        ]
      }, {
        key: 'sdz',
        color: '#e7542f',
        title: 'Site du Zéro',
        description: 'Ancien validateur et membre actif sur le Site du Zéro (maintenant OpenClassrooms) et auteur de plusieurs tutoriels.',
        year: 2011,
        links: [
          {label: 'Site web', url: 'http://fr.openclassrooms.com/membres/tdimeco'}
        ]
      }
    ];

    return {
      getHomeItems: function () {
        return homeItems;
      }
    };
  });


})();
