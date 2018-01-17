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
      <md-table-head md-sort-by="support">Support/vidéo</md-table-head>
      <md-table-head></md-table-head>
    </md-table-row>

    <md-table-row v-for="(talk, index) in TALKS" :key="index">
      <md-table-cell>{{talk.title}}</md-table-cell>
      <md-table-cell>{{talk.author}}</md-table-cell>
      <md-table-cell>{{talk.likes}}</md-table-cell>
      <md-table-cell>{{talk.proposal ? 'Proposition' : 'Demande'}}</md-table-cell>
      <md-table-cell>{{getUserById(talk.speakerId)}}</md-table-cell>
      <md-table-cell>{{talk.description}}</md-table-cell>
      <md-table-cell>{{talk.duration}}</md-table-cell>
      <md-table-cell>{{formatDate(talk.scheduledAt)}}</md-table-cell>
      <md-table-cell>{{talk.support}}</md-table-cell>
      <md-table-cell>
        <md-button class="md-icon-button"  @click="$emit('editTalk', talk)">
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
      @md-confirm="deleteTalk(currentTalk)"
    >
    </md-dialog-confirm>

  </md-table>
</template>

<script>
import { TALKS, USERS } from '@/store/types'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TalkList',
  data: () => ({
    showDialog: false,
    currentTalk: null
  }),
  methods: {
    ...mapActions(['deleteTalk']),

    openDeleteDialog (talk) {
      if (!talk) return false

      this.currentTalk = talk
      this.showDialog = true
    },

    formatDate (timestamp) {
      return new Date(timestamp).toLocaleString().slice(0, -3)
    },

    getUserById (id) {
      const user = this.USERS.find(user => user.id === id)
      return `${user.firstname} ${user.name}`
    }
  },
  computed: {
    ...mapGetters([TALKS, USERS])
  }
}
</script>
