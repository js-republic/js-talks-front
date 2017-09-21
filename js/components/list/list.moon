<template>
  <div class="container-fluid">
    <table class="table">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Likes</th>
          <th>Type</th>
          <th>Speaker</th>
          <th>Description</th>
          <th>Longueur</th>
          <th>Programmé à</th>
          <th>Support/Video</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          <Row m-for="item in items" m-literal:item="item" test="test" />
      </tbody>
    </table>
  </div>
</template>

<script>
exports = {
  props: ['route'],
  data: {
    items: require("../../mocks/table.json")
  }
}
</script>