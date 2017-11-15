<template>
<md-table class="talk-table" md-sort="likes">
  <md-table-header>
    <md-table-row>
      <md-table-head md-sort-by="title">Titre</md-table-head>
      <md-table-head md-sort-by="Auteur">Auteur</md-table-head>
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
    <md-table-row v-for="(row, index) in 5" :key="index">
      <md-table-cell>My title</md-table-cell>
      <md-table-cell>Mathieu</md-table-cell>
      <md-table-cell>{{index}}</md-table-cell>
      <md-table-cell>Proposition</md-table-cell>
      <md-table-cell>Mathieu</md-table-cell>
      <md-table-cell>Une super prez</md-table-cell>
      <md-table-cell>180min</md-table-cell>
      <md-table-cell>12/12/2012</md-table-cell>
      <md-table-cell>https://www.youtube.com/watch?v=hbcEYBQ4x70</md-table-cell>
    </md-table-row>
  </md-table-body>
</md-table>
</template>

<script>
export default {
  name: 'TalkList'
}
</script>


<style lang="scss">
md-table {
}
</style>
