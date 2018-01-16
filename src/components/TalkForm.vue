<template>
  <form novalidate @submit.prevent="addTalk">
    <md-radio v-model="form.proposal" :value="true">Proposition</md-radio>
    <md-radio v-model="form.proposal" :value="false">Demande</md-radio>

    <md-field :class="{ 'md-invalid': isInputInvalid('title') }">
      <label>Titre</label>
      <md-input
        v-model.trim="form.title"
        md-counter="120"
        maxlength="120"
        @blur="updateFieldStatus('title')"
        @focus="errors.title.empty = false"
        required
      ></md-input>
      <span class="md-error">Un titre est requis</span>
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
      <span class="md-error">Une description est requise</span>
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
        <span class="md-error">Une durée est requise</span>
      </md-field>

      <md-datepicker v-model="form.scheduledAt.date" :md-disabled-dates="isWeekend"></md-datepicker>

      <md-field class="inline-field">
        <label>Heures</label>
        <md-select v-model="form.scheduledAt.hour" md-dense>
          <md-option :value="hour" v-for="hour in HOURS_LIST" :key="hour">{{hour}}</md-option>
        </md-select>
      </md-field>

      <md-field class="inline-field">
        <label>Minutes</label>
        <md-select v-model="form.scheduledAt.minute" md-dense>
          <md-option :value="minute" v-for="minute in MINUTES_LIST" :key="minute">{{minute}}</md-option>
        </md-select>
      </md-field>

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
export default {
  name: 'TalkForm',
  props: ['sidebarVisible'],
  data: () => ({
    initialForm: {
      proposal: true,
      title: '',
      description: '',
      scheduledAt: {
        date: null,
        hour: null,
        minute: null
      },
      support: '',
      speaker: '',
      duration: ''
    },
    initialErrors: {
      title: { touched: false, empty: true },
      description: { touched: false, empty: true },
      duration: { touched: false, empty: true }
    },
    form: {},
    errors: {},
    HOURS_LIST: Array.from(Array(24).keys()).slice(8, 22),
    MINUTES_LIST: Array.from(Array(60).keys()).filter(minutes => minutes % 15 === 0)
  }),
  created () {
    this.resetForm()
    this.resetErrors()
  },
  methods: {
    addTalk () {
      const formCopy = Object.assign({}, this.form)
      const date = this.form.scheduledAt.date

      date.setHours(this.form.scheduledAt.hour)
      date.setMinutes(this.form.scheduledAt.minute)

      this.closeSidebar()

      formCopy.scheduledAt = date ? date.getTime() : null

      this.$store.dispatch('addTalk', this.form)
    },
    closeSidebar () {
      this.$emit('sidebar', false)
    },
    isWeekend (date) {
      const day = date.getDay()
      return day === 6 || day === 0
    },
    updateFieldStatus (field) {
      this.errors[field].touched = true
      this.errors[field].empty = this.form[field].length === 0
    },
    isInputInvalid (field) {
      return this.errors[field] && this.errors[field].touched && this.errors[field].empty
    },
    isFormInvalid () {
      return Object.values(this.errors)
        .some(value => Object.keys(value)
          .some(key => key === 'empty' && value.empty === true)
        )
    },
    resetForm () {
      this.form = JSON.parse(JSON.stringify(this.initialForm))
    },
    resetErrors () {
      this.errors = JSON.parse(JSON.stringify(this.initialErrors))
    }
  },
  watch: {
    sidebarVisible () {
      this.resetErrors()
    }
  }
}
</script>

<style lang="scss">
  form {
    padding: 20px;
  }

  .inline-field {
    width: calc(50% - 1em);
    display: inline-block;

    .md-input {
      min-width: 0;
    }
  }
</style>
