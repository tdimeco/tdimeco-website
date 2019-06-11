apps =
  'wake-me-up':
    id: 'wake-me-up'
    title: "Wake Me Up"
    subtitle: "Compagnon Wake-on-LAN"
    color: 'var(--theme-lime-color)'
    icon: require('../images/apps/wake-me-up.png')
    shortDescription: "Wake Me Up permet de démarrer un ordinateur à distance en envoyant une requête réseau Wake-on-LAN. L'ordinateur peut être démarré de plusieurs manières : en appuyant sur le gros bouton dans l'application, en utilisant le widget <em>Aujourd'hui</em> disponible sur l'écran d'accueil de l'iPhone ou iPad, en demandant directement à Siri depuis l'iPhone, iPad ou Apple Watch."
    links: [
      {label: "App Store", url: 'https://apps.apple.com/app/id1465416032', iconClasses: 'fab fa-apple'}
    ]
  'movin-smart':
    id: 'movin-smart'
    title: "Movin'Smart"
    subtitle: "L'équitation connectée"
    color: 'var(--theme-violet-color)'
    icon: require('../images/apps/movin-smart.png')
    shortDescription: "Movin'Smart est une application de coaching en équitation. À l'aide de capteurs Bluetooth sur le cavalier et le cheval, les moindres mouvements sont enregistrés et analysés pour fournir de multiples indicateurs intéressants en temps réel. L'application vous assiste pendant vos courses à l'aide de l'app companion Apple Watch, mais aussi après la course avec un historique détaillé."
    links: [
      {label: "App Store", url: 'https://apps.apple.com/app/id1447124839', iconClasses: 'fab fa-apple'}
      {label: "Site web", url: 'https://www.movinsmart.com', secondary: true}
    ]
  'pass-to-corsica':
    id: 'pass-to-corsica'
    title: "Pass to Corsica"
    subtitle: "Les bons plans Corse"
    color: 'var(--theme-red-color)'
    icon: require('../images/apps/pass-to-corsica.png')
    shortDescription: "Pass to Corsica est une application qui regroupe les bons plans des partenaires en Corse. Le pass permet de profiter de tous les avantages et réductions proposés par la plateforme."
    links: [
      {label: "App Store", url: 'https://apps.apple.com/app/id1248037834', iconClasses: 'fab fa-apple'}
      {label: "Site web", url: 'https://passtocorsica.com', secondary: true}
    ]
  'wims':
    id: 'wims'
    title: "WIMS"
    subtitle: "Where is my stuff?"
    color: 'var(--theme-cyan-color)'
    icon: require('../images/apps/wims.png')
    shortDescription: "Where is my stuff? est une application iOS qui permet de répertorier les objets prêtés et empruntés à ses amis. Elle permet également de contacter directement la personne par téléphone ou SMS, et de régler des alarmes de rappel. J'ai participé à la refonte de l'app en Swift, créée à l'origine par <em>Roxy Pony</em>. N'hésitez pas à nous soutenir et à noter ou déverrouiller l'application ! ;)"
    links: [
      {label: "App Store", url: 'https://apps.apple.com/app/id321910676', iconClasses: 'fab fa-apple'}
      {label: "Site web", url: 'https://roxypony.fr/apps/wims.html', secondary: true}
    ]
  'unleashxcode':
    id: 'unleashxcode'
    title: "UnleashXcode"
    subtitle: "Améliorez Xcode"
    color: 'var(--theme-blue-color)'
    icon: require('../images/apps/unleashxcode.png')
    shortDescription: "UnleashXcode est une extension native pour Xcode qui permet d'ajouter des fonctions utiles, comme la possibilité de dupliquer ou supprimer rapidement une ou plusieurs lignes de code."
    links: [
      {label: "Télécharger", url: 'https://github.com/tdimeco/UnleashXcode/releases', iconClasses: 'fas fa-arrow-circle-down'}
      {label: "Sources", url: 'https://github.com/tdimeco/UnleashXcode', iconClasses: 'fab fa-github', secondary: true}
    ]
  'quicksound':
    id: 'quicksound'
    title: "QuickSound"
    subtitle: "Jouez des sons rapidement"
    color: 'var(--theme-sea-color)'
    icon: require('../images/apps/quicksound.png')
    shortDescription: "QuickSound est une application pour macOS qui permet de jouer des petits sons rapidement depuis la barre de menus en haut à droite. Cette application est open source, n'hésitez pas à aller faire un tour sur GitHub et à y contribuer !"
    links: [
      {label: "Télécharger", url: 'https://github.com/tdimeco/QuickSound/releases', iconClasses: 'fas fa-arrow-circle-down'}
      {label: "Sources", url: 'https://github.com/tdimeco/QuickSound', iconClasses: 'fab fa-github', secondary: true}
    ]

export default
  named: apps
  all: Object.keys(apps).map (e) => apps[e]
