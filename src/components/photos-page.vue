<template lang="pug">
div
  page-header(title="Photos" subtitle="Ma galerie photos Flickr")
  .container
    .message(v-html="message" v-if="message")
    .grid.row(v-if="photos.length > 0")
      .grid-sizer.col-xs-12.col-sm-6.col-md-4
      .grid-item.col-xs-12.col-sm-6.col-md-4(v-for="photo in photos")
        a.photo(:href="photo.pageUrl")
          span.photo-image(role="img" :title="photo.title" :style="{'background-image': 'url(' + photo.imageUrl + ')', 'padding-top': (photo.height / photo.width * 100) + '%'}")
          span.photo-title {{photo.title}}
</template>

<script lang="coffee">
Masonry = require('masonry-layout')
import PageHeader from './page-header.vue'
import Flickr from '../scripts/flickr.coffee'
export default
  components: {PageHeader}
  data: ->
    photos: []
    message: '<span class="fa fa-circle-o-notch fa-spin"></span> Chargement des photos...'
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
      new Masonry('.grid',
        itemSelector: '.grid-item'
        columnWidth: '.grid-sizer'
        percentPosition: true
        transitionDuration: 0
      )
    return
</script>

<style lang="less" scoped>
@import '../styles/variables-mixins.less';
@grid-padding: @grid-gutter-width / 2;
.grid {
  padding: @grid-padding 0;
  .grid-item {
    padding: @grid-padding;
  }
  @media (max-width: @screen-xs-max) {
    padding: 0 0 @grid-padding 0;
    .grid-item {
      padding: @grid-padding @grid-padding 0 @grid-padding;
    }
  }
}
.message {
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
  margin: 80px 0;
  color: @light-text-color;
}
.photo {
  display: block;
  position: relative;
  overflow: hidden;
  padding: 0;
  border-radius: @standard-border-radius;
  .photo-image {
    display: block;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: @light-background-color;
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
    padding: 10px;
    .animate(bottom);
  }
  &:hover {
    .photo-title {
      bottom: 0;
    }
  }
}
</style>