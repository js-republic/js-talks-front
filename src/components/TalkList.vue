<template>
  <md-table class="talk-table" md-sort="likes">
    <md-table-row>
      <md-table-head md-sort-by="title">Titre</md-table-head>
      <md-table-head md-sort-by="auteur">Auteur</md-table-head>
      <md-table-head md-sort-by="likes" md-numeric >Likes</md-table-head>
      <md-table-head md-sort-by="type">Type</md-table-head>
      <md-table-head md-sort-by="speaker">Speaker</md-table-head>
      <md-table-head md-sort-by="description">Description</md-table-head>
      <md-table-head md-sort-by="duration">Durée</md-table-head>
      <md-table-head md-sort-by="scheduledAt">Programmé le</md-table-head>
      <md-table-head md-sort-by="supportAndVideo">Support/vidéo</md-table-head>
      <md-table-head></md-table-head>
    </md-table-row>

    <md-table-row v-for="(talk, index) in TALKS" :key="index">
      <md-table-cell>{{talk.title}}</md-table-cell>
      <md-table-cell>{{talk.author}}</md-table-cell>
      <md-table-cell>{{talk.likes}}</md-table-cell>
      <md-table-cell>{{talk.type}}</md-table-cell>
      <md-table-cell>{{talk.speaker}}</md-table-cell>
      <md-table-cell>{{talk.description}}</md-table-cell>
      <md-table-cell>{{talk.duration}}</md-table-cell>
      <md-table-cell>{{formatDate(talk.scheduledAt)}}</md-table-cell>
      <md-table-cell>{{talk.supportAndVideo}}</md-table-cell>
      <md-table-cell>
        <md-button class="md-icon-button">
          <md-icon>mode_edit</md-icon>
        </md-button>
        <md-button class="md-icon-button" @click="openDeleteDialog(talk)">
          <md-icon>delete</md-icon>
        </md-button>
      </md-table-cell>
    </md-table-row>

    <md-dialog-confirm
      v-if="currentTalk" :md-active.sync="showDialog"
      :md-content="`Vous êtes sur le point de supprimer votre talk ${currentTalk.title} ! Êtes-vous sûr ?`"
      md-title="Êtes-vous sûr?"
      md-confirm-text="Confirmer"
      md-cancel-text="Annuler"
      @md-cancel="dialogOpen = false"
      @md-confirm="deleteTalk(currentTalk)">
    </md-dialog-confirm>

  </md-table>
</template>

<script>
import { TALKS } from '@/store/types'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TalkList',
  data: () => ({
    showDialog: false,
    currentTalk: null
  }),
  methods: {
    ...mapActions(['deleteTalk', 'editTalk']),
    openDeleteDialog (talk) {
      this.currentTalk = talk
      this.showDialog = true
    },
    formatDate (timestamp) {
      return new Date(timestamp).toLocaleDateString()
    }
  },
  computed: {
    ...mapGetters([TALKS])
  }
}
</script>
