<template>
  <form novalidate @submit.prevent="addTalk">
    <md-radio v-model="form.proposal" :value="true">Proposition</md-radio>
    <md-radio v-model="form.proposal" :value="false">Demande</md-radio>

    <md-field :class="{ 'md-invalid': isInputInvalid('title') }">
      <label>Titre</label>
      <md-input
        :class="error"
        v-model.trim="form.title"
        md-counter="120"
        maxlength="120"
        @blur="updateFieldStatus('title')"
        @focus="errors.title.empty = false"
        required
      ></md-input>
      <span class="md-error">A title is required</span>
    </md-field>

    <md-field :class="{ 'md-invalid': isInputInvalid('description') }">
      <label>Description</label>
      <md-textarea
        v-model.trim="form.description"
        md-counter="300"
        maxlength="300"
        @blur="updateFieldStatus('description')"
        @focus="errors.description.empty = false"
        required
      ></md-textarea>
      <span class="md-error">A description is required</span>
    </md-field>

    <div v-if="form.proposal">
      <md-field :class="{ 'md-invalid': isInputInvalid('duration') }">
        <label>Durée (min)</label>
        <md-input
          type="number"
          @blur="updateFieldStatus('duration')"
          @focus="errors.duration.empty = false"
          v-model="form.duration"
          required
        ></md-input>
        <span class="md-error">A duration is required</span>
      </md-field>

      <md-datepicker v-model.trim="form.scheduledAt" :md-disabled-dates="isWeekend"></md-datepicker>

      <md-field>
        <label>Support/vidéo</label>
        <md-textarea
          v-model.trim="form.support"
          md-counter="300"
          maxlength="300"
        ></md-textarea>
      </md-field>
    </div>
    <md-field v-else>
      <label>Speaker</label>
      <md-select v-model="form.speaker">
        <md-option value="foo">Foo</md-option>
        <md-option value="bar">Bar</md-option>
        <md-option value="ada">Ada</md-option>
      </md-select>
    </md-field>

    <md-button
      type="submit"
      :disabled="isFormInvalid()"
      class="md-raised md-primary"
    >Submit</md-button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TalkForm',
  data: () => ({
    form: {
      proposal: true,
      title: '',
      description: '',
      scheduledAt: null,
      support: '',
      speaker: '',
      duration: ''
    },
    errors: {
      title: { touched: false, empty: true },
      description: { touched: false, empty: true },
      duration: { touched: false, empty: true }
    }
  }),
  methods: {
    ...mapActions(['addTalk']),
    isWeekend: date => {
      const day = date.getDay()
      return day === 6 || day === 0
    },
    updateFieldStatus (field) {
      this.errors[field].touched = true
      this.errors[field].empty = this.form[field].length === 0
    },
    isInputInvalid (field) {
      return this.errors[field].touched && this.errors[field].empty
    },
    isFormInvalid () {
      let errorFound

      const values = Object.values(this.errors)

      Object.keys(values).some(key => {
        errorFound = key === 'empty' && values[key] === 'true'
        return errorFound
      })

      return errorFound
    }
  }
}
</script>

<style lang="scss">
  form {
    padding: 20px;
  }
</style>
