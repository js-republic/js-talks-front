<template>
  <form @submit.prevent="addTalk(form)">
    <md-radio v-model="form.proposal" value="true">Proposition</md-radio>
    <md-radio v-model="form.proposal" value="false">Demande</md-radio>

    <md-field>
      <label>Titre</label>
      <md-input v-model="form.title"></md-input>
    </md-field>

    <md-field>
      <label>Description</label>
      <md-textarea v-model="form.description" md-counter="120"></md-textarea>
    </md-field>

    <md-datepicker v-model="form.selectedDate" :md-disabled-dates="isWeekend"></md-datepicker>

    <md-field>
      <label>Support/vidéo</label>
      <md-textarea v-model="form.support" md-counter="120"></md-textarea>
    </md-field>

    <md-button class="md-raised md-primary" type="submit">Submit</md-button>

  </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'TalkForm',
  data: () => ({
    form: {
      proposal: 'true',
      title: '',
      description: '',
      selectedDate: null,
      support: ''
    }
  }),
  methods: {
    ...mapActions(['addTalk']),
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