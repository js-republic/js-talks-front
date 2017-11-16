<template>
  <md-table class="talk-table" md-sort="likes">
    <md-table-header>
      <md-table-row>
        <md-table-head md-sort-by="title">Titre</md-table-head>
        <md-table-head md-sort-by="auteur">Auteur</md-table-head>
        <md-table-head md-sort-by="likes" md-numeric >Likes</md-table-head>
        <md-table-head md-sort-by="type">Type</md-table-head>
        <md-table-head md-sort-by="speaker">Speaker</md-table-head>
        <md-table-head md-sort-by="description">Description</md-table-head>
        <md-table-head md-sort-by="lenght">Longueur</md-table-head>
        <md-table-head md-sort-by="scheduledAt">Programmé le</md-table-head>
        <md-table-head md-sort-by="supportAndVideo">Support/vidéo</md-table-head>
      </md-table-row>
    </md-table-header>

    <md-table-body>
      <md-table-row v-for="(jsTalk, index) in JS_TALK_DATA" :key="index">
        <md-table-cell>{{jsTalk.title}}</md-table-cell>
        <md-table-cell>{{jsTalk.auteur}}</md-table-cell>
        <md-table-cell>{{jsTalk.likes}}</md-table-cell>
        <md-table-cell>{{jsTalk.type}}</md-table-cell>
        <md-table-cell>{{jsTalk.speaker}}</md-table-cell>
        <md-table-cell>{{jsTalk.description}}</md-table-cell>
        <md-table-cell>{{jsTalk.lenght}}</md-table-cell>
        <md-table-cell>{{jsTalk.scheduledAt}}</md-table-cell>
        <md-table-cell>{{jsTalk.supportAndVideo}}</md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
</template>

<script>
import { JS_TALK_DATA } from '../store/types'
import { mapGetters } from 'vuex'

export default {
  name: 'TalkList',
  computed: {
    ...mapGetters([JS_TALK_DATA])
  }
}
</script>

<style lang="scss"></style>
