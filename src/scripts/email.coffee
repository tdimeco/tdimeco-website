# Constants
EMAIL_INFOS =
  name: 'contact'
  host: 'tdimeco.fr'

# Methods
openContactEmail = ->
  url = 'mailto:' + EMAIL_INFOS.name + '@' + EMAIL_INFOS.host
  window.location.href = url
  return

# Exports
export default
  openContactEmail: openContactEmail
