Masonry = require('masonry-layout')
FontFaceObserver = require('fontfaceobserver')

masonryCreated = []
isFontLoaded = false

makeMasonryLayout = (container, itemSelector, columnWidth) ->

  # Make the masonry layout
  masonry = new Masonry(container,
    itemSelector: itemSelector
    columnWidth: columnWidth
    percentPosition: true
    transitionDuration: 0
  )

  # If the main font is not already loaded, keep a reference to the masonry
  masonryCreated.push(masonry) if not isFontLoaded

  return

# Add font loading observer
font = new FontFaceObserver('Source Sans Pro')
font.load().then ->
  masonry.layout() for masonry in masonryCreated
  masonryCreated = []
  isFontLoaded = true
  return

# Exports
export default {
  makeMasonryLayout
}
