<template>
  <md-table class="talk-table" md-sort="likes">
    <md-table-row>
      <md-table-head md-sort-by="title">Titre</md-table-head>
      <md-table-head md-sort-by="auteur">Auteur</md-table-head>
      <md-table-head md-sort-by="likes" md-numeric >Likes</md-table-head>
      <md-table-head md-sort-by="speaker">Speaker</md-table-head>
      <md-table-head md-sort-by="description">Description</md-table-head>
      <md-table-head md-sort-by="duration">Durée</md-table-head>
      <md-table-head md-sort-by="scheduledAt">Programmé le</md-table-head>
      <md-table-head md-sort-by="support">Support/vidéo</md-table-head>
      <md-table-head></md-table-head>
    </md-table-row>

    <md-table-row class="rows" :style="{ 'border-left-color': getColorByType(talk) }" v-for="(talk, index) in TALKS" :key="index">
      <md-table-cell>{{talk.title}}</md-table-cell>
      <md-table-cell>{{getUserById(talk.authorId)}}</md-table-cell>
      <md-table-cell>
        <div class="feedback-container">
          <div class="feedback">
            <md-button class="md-icon-button" @click="feedback({ talkId: talk.id, isPositive: true })">
              <md-icon class="feedup">arrow_drop_up</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="feedback({ talkId: talk.id, isPositive: false })">
              <md-icon class="feeddown">arrow_drop_down</md-icon>
            </md-button>
          </div>
        </div>
        <span>{{talk.likes}}</span>
      </md-table-cell>
      <md-table-cell>{{getUserById(talk.speakerId)}}</md-table-cell>
      <md-table-cell>{{talk.description}}</md-table-cell>
      <md-table-cell>{{talk.duration}}</md-table-cell>
      <md-table-cell>{{talk.scheduledAt ? formatDate(talk.scheduledAt) : ''}}</md-table-cell>
      <md-table-cell>{{talk.support}}</md-table-cell>
      <md-table-cell>
        <md-button class="md-icon-button"  @click="$emit('editTalk', talk)">
          <md-icon class="edit-button">mode_edit</md-icon>
        </md-button>
        <md-button class="md-icon-button" @click="openDeleteDialog(talk)">
          <md-icon class="delete-button">delete</md-icon>
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
    ...mapActions(['deleteTalk', 'feedback']),
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
      return user.fullname
    },

    getColorByType (talk) {
      let color

      switch (talk.type) {
        case 'proposal':
          color = '#FFC757'
          break

        case 'request':
          color = '#FC4C4C'
          break

        case 'event':
          color = talk.scheduledAt < Date.now() ? '#326EF5' : '#9CFB8F'
      }

      return color
    }
  },
  computed: {
    ...mapGetters([TALKS, USERS])
  }
}
</script>

<style lang="scss">

  .md-table-cell-container {
    align-items: center;

    .feedback-container {
      display: inline-block;

      .feedback {
        display: flex;
        flex-flow: column;

        .md-button+.md-button {
          margin-left: auto;
        }

        .feedup {
          color: blue;
          cursor: pointer;
        }

        .feeddown {
          color: red;
          cursor: pointer;
        }
      }
    }
  }

  .rows {
    border-left: 10px solid;
  }

  i.md-icon.md-icon-font.edit-button {
    color: #009688;
  }

  i.md-icon.md-icon-font.delete-button {
    color: #D32F2F;
  }

  .md-table-cell-container {
    display: flex;
  }
</style>
