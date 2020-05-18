<template lang="pug">
section
  page-header(title="Photos" subtitle="Ma galerie photos Flickr")
  .container
    .message(v-html="message" v-if="message")
    .grid.row(v-if="photos.length > 0")
      .grid-sizer.col-md-6.col-lg-4
      .grid-item.col-md-6.col-lg-4(v-for="photo in photos")
        a.photo(:href="photo.pageUrl")
          span.photo-image(role="img" :title="photo.title" :style="{'background-image': 'url(' + photo.imageUrl + ')', 'padding-top': (photo.height / photo.width * 100) + '%'}")
          span.photo-title {{photo.title}}
</template>

<script lang="coffee">
import PageHeader from './page-header.vue'
import Flickr from '../scripts/flickr.coffee'
import Masonry from '../scripts/masonry.coffee'
export default
  components: {PageHeader}
  data: ->
    photos: []
    message: '<span class="fas fa-circle-notch fa-spin leading-icon"></span> Chargement des photos...'
  mounted: ->

    # Callbacks
    onSuccess = (data) =>
      @photos = data
      @message = ''

    onError = (errorMessage) =>
      @photos = []
      @message = errorMessage

    # Load Flickr photos
    Flickr.getPublicPhotos(onSuccess, onError)

    return

  updated: ->
    if @photos.length > 0
      Masonry.makeMasonryLayout('.grid', '.grid-item', '.grid-sizer')
    return
</script>

<style lang="scss" scoped>
@import "../styles/variables-mixins";
$grid-padding: $grid-gutter-width / 2;
.grid {
  padding: $grid-padding 0;
  .grid-item {
    padding: $grid-padding;
  }
  @include media-breakpoint-down(xs) {
    padding: 0 0 $grid-padding 0;
    .grid-item {
      padding: $grid-padding $grid-padding 0 $grid-padding;
    }
  }
}
.message {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin: 4rem 0;
  color: var(--text-2-color);
}
.photo {
  display: block;
  position: relative;
  overflow: hidden;
  padding: 0;
  border-radius: $standard-border-radius;
  .photo-image {
    display: block;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: var(--background-2-color);
  }
  .photo-title {
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -100%;
    text-align: center;
    font-weight: 600;
    color: white;
    background: rgba(0, 0, 0, .5);
    padding: 0.7rem;
    @include animate(bottom);
  }
  &:hover {
    .photo-title {
      bottom: 0;
    }
  }
}
</style>
