<template>
  <form>
    <md-radio v-model="proposal" :value="true">Proposition</md-radio>
    <md-radio v-model="proposal" :value="false">Demande</md-radio>

    <md-field>
      <label>Titre</label>
      <md-input v-model="title"></md-input>
    </md-field>

    <md-field>
      <label>Description</label>
      <md-textarea v-model="description" md-counter="120"></md-textarea>
    </md-field>

    <md-datepicker v-model="selectedDate" :md-disabled-dates="isWeekend"></md-datepicker>

    <md-field>
      <label>Support/vidéo</label>
      <md-textarea v-model="support" md-counter="120"></md-textarea>
    </md-field>

    <md-button class="md-raised md-primary">Submit</md-button>
    
  </form>
</template>

<script>
export default {
  name: 'TalkForm',
  data: () => ({
    proposal: 'true',
    title: '',
    description: '',
    selectedDate: null,
    support: ''
  }),
  methods: {
    isWeekend: date => {
      const day = date.getDay()

      return day === 6 || day === 0
    }
  }
}
</script>

<style lang="scss">
  form {
    padding: 10px
  }
</style>