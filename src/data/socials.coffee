socialsObject =
  twitter:
    title: "Twitter"
    url: 'https://twitter.com/thomasdimeco'
    iconClasses: 'fa fa-twitter'
    isRelatedToFreelance: false
  github:
    title: "GitHub"
    url: 'https://github.com/tdimeco'
    iconClasses: 'fa fa-github'
    isRelatedToFreelance: true
  linkedin:
    title: "LinkedIn"
    url: 'https://www.linkedin.com/in/tdimeco'
    iconClasses: 'fa fa-linkedin'
    isRelatedToFreelance: true
  flickr:
    title: "Flickr"
    url: 'https://www.flickr.com/photos/tdimeco/'
    iconClasses: 'fa fa-flickr'
    isRelatedToFreelance: false

allObject =
  all: Object.keys(socialsObject).map (e) => socialsObject[e]

export default Object.assign({}, socialsObject, allObject)
