<template>
  <div>
    <page-header title="Photos" subtitle="Ma galerie photos Flickr"></page-header>
    <div class="container">
      <div class="message" v-html="message" v-if="message"></div>
      <div class="grid row" v-if="photos.length > 0">
        <div class="grid-sizer col-xs-12 col-sm-6 col-md-4"></div>
        <div v-for="photo in photos" class="grid-item col-xs-12 col-sm-6 col-md-4">
          <a class="photo" :href="photo.pageUrl">
            <span class="photo-image" role="img" :title="photo.title" :style="{'background-image': 'url(' + photo.imageUrl + ')', 'padding-top': (photo.height / photo.width * 100) + '%'}"></span>
            <span class="photo-title">{{photo.title}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="coffee">
Masonry = require('masonry-layout')
import PageHeader from '../page-header/component.vue'
import Flickr from './flickr.coffee'
export default
  components: {PageHeader: PageHeader}
  data: ->
    photos: []
    message: '<span class="fa fa-circle-o-notch fa-spin"></span> Chargement des photos...'
  mounted: ->

    self = @

    # Callbacks
    onSuccess = (data) ->
      self.photos = data
      self.message = ''

    onError = (errorMessage) ->
      self.photos = []
      self.message = errorMessage

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
@import '../../styles/variables-mixins.less';
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
