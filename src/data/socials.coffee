socials =
  twitter:
    title: "Twitter"
    url: 'https://twitter.com/thomasdimeco'
    iconClasses: 'fab fa-twitter'
    isRelatedToFreelance: false
  github:
    title: "GitHub"
    url: 'https://github.com/tdimeco'
    iconClasses: 'fab fa-github'
    isRelatedToFreelance: true
  linkedin:
    title: "LinkedIn"
    url: 'https://www.linkedin.com/in/tdimeco'
    iconClasses: 'fab fa-linkedin-in'
    isRelatedToFreelance: true
  flickr:
    title: "Flickr"
    url: 'https://www.flickr.com/photos/tdimeco/'
    iconClasses: 'fab fa-flickr'
    isRelatedToFreelance: false

export default
  named: socials
  all: Object.keys(socials).map (e) => socials[e]
