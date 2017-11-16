<template>
  <md-table v-model="talks" md-card>
    <md-table-toolbar>
      <h1 class="md-title">Talks</h1>
    </md-table-toolbar>

    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell md-label="Titre" md-sort-by="title">{{ item.title }}</md-table-cell>
      <md-table-cell md-label="Auteur" md-sort-by="author">{{ item.author }}</md-table-cell>
      <md-table-cell md-label="Likes" md-sort-by="likes" md-numeric>{{ item.likes }}</md-table-cell>
      <md-table-cell md-label="Type" md-sort-by="type">{{ item.type }}</md-table-cell>
      <md-table-cell md-label="Speaker" md-sort-by="speaker">{{ item.speaker }}</md-table-cell>
      <md-table-cell md-label="Description" md-sort-by="description">{{ item.description }}
      </md-table-cell>
      <md-table-cell md-label="Longueur" md-sort-by="length">{{ item.length }}</md-table-cell>
      <md-table-cell md-label="Programmé le" md-sort-by="scheduledAt">{{ item.scheduledAt }}
      </md-table-cell>
      <md-table-cell md-label="Support/vidéo" md-sort-by="supportAndVideo">{{ item.supportAndVideo
        }}
      </md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
  export default {
    name: 'TalkList',
    data: () => ({
      talks: [
        {
          title: 'Titre',
          author: 'Auteur',
          likes: 'Likes',
          type: 'Type',
          speaker: 'Speaker',
          description: 'Description',
          length: 'Longueur',
          scheduledAt: 'Programmé le',
          supportAndVideo: 'Support/vidéo'
        },
        {
          title: 'Titre',
          author: 'Auteur',
          likes: 'Likes',
          type: 'Type',
          speaker: 'Speaker',
          description: 'Description',
          length: 'Longueur',
          scheduledAt: 'Programmé le',
          supportAndVideo: 'Support/vidéo'
        },
        {
          title: 'Titre',
          author: 'Auteur',
          likes: 'Likes',
          type: 'Type',
          speaker: 'Speaker',
          description: 'Description',
          length: 'Longueur',
          scheduledAt: 'Programmé le',
          supportAndVideo: 'Support/vidéo'
        },
        {
          title: 'Titre',
          author: 'Auteur',
          likes: 'Likes',
          type: 'Type',
          speaker: 'Speaker',
          description: 'Description',
          length: 'Longueur',
          scheduledAt: 'Programmé le',
          supportAndVideo: 'Support/vidéo'
        }
      ]
    })
  }
</script>


<style lang="scss">
  md-table {
  }
</style>
