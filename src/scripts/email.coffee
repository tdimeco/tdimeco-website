# Constants
EMAIL_INFOS =
  name: 'contact'
  host: 'tdimeco.fr'
  subject: '[tdimeco.fr]'

# Methods
openContactEmail = ->
  url = 'mailto:' + EMAIL_INFOS.name + '@' + EMAIL_INFOS.host + '?subject=' + EMAIL_INFOS.subject
  window.location.href = url
  return

# Exports
export default
  openContactEmail: openContactEmail
