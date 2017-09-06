import Vue from 'vue'

// Constants

var EMAIL_INFOS = {
  name: 'contact',
  host: 'tdimeco.fr',
  subject: '[tdimeco.fr]'
}

// Methods

function openContactEmail () {
  var url = 'mailto:' + EMAIL_INFOS.name + '\u0040' + EMAIL_INFOS.host + '?subject=' + EMAIL_INFOS.subject
  window.location.href = url
}

// Exports

export default {
  openContactEmail: openContactEmail
}
