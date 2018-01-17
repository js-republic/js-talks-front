<template>
  <form novalidate @submit.prevent="handleSubmit">
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

      <md-datepicker v-model="form.datetime.date" :md-disabled-dates="isWeekend"></md-datepicker>

      <md-field class="inline-field">
        <label>Heures</label>
        <md-select v-model="form.datetime.hours" md-dense>
          <md-option :value="hours" v-for="hours in HOURS_LIST" :key="hours">{{hours}}</md-option>
        </md-select>
      </md-field>

      <md-field class="inline-field">
        <label>Minutes</label>
        <md-select v-model="form.datetime.minutes" md-dense>
          <md-option :value="minutes" v-for="minutes in MINUTES_LIST" :key="minutes">{{minutes}}</md-option>
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
        <md-option :key="user.id" v-for="user in USERS" value="user.id">{{`${user.firstname} ${user.name}`}}</md-option>
      </md-select>
    </md-field>

    <md-button
      type="submit"
      :disabled="isFormInvalid()"
      class="md-raised md-primary"
    >{{editingTalk ? 'Edit' : 'Submit'}}</md-button>
  </form>
</template>

<script>
import { USERS } from '@/store/types'
import { mapGetters } from 'vuex'

export default {
  name: 'TalkForm',
  props: ['sidebarVisible', 'editingTalk'],
  data: () => ({
    initialForm: {
      proposal: true,
      title: '',
      description: '',
      scheduledAt: null,
      support: '',
      speaker: '',
      duration: '',
      datetime: {
        date: null,
        hours: null,
        minutes: null
      }
    },
    initialErrors: {
      title: { touched: false, empty: true },
      description: { touched: false, empty: true },
      duration: { touched: false, empty: true }
    },
    form: {},
    errors: {},
    USERS: [],
    HOURS_LIST: [],
    MINUTES_LIST: []
  }),
  created () {
    this.resetForm()
    this.resetErrors()
    this.getHoursList()
    this.getMinutesList()
  },
  methods: {
    handleSubmit () {
      const date = this.form.datetime.date

      this.closeSidebar()

      date.setHours(parseInt(this.form.datetime.hours))
      date.setMinutes(parseInt(this.form.datetime.minutes))
      this.form.scheduledAt = date ? date.getTime() : null

      if (this.editingTalk) {
        this.$store.dispatch('editTalk', {
          formData: this.form,
          talkId: this.editingTalk.id
        })
      } else {
        this.$store.dispatch('addTalk', { formData: this.form })
      }
    },

    formatNumber (number) {
      return (number >= 10 ? '' : '0') + number
    },

    getHoursList () {
      this.HOURS_LIST = Array.from(Array(24).keys())
        .slice(8, 22)
        .map(hour => this.formatNumber(hour))
    },

    getMinutesList () {
      this.MINUTES_LIST = Array.from(Array(60).keys())
        .filter(minutes => minutes % 15 === 0)
        .map(minutes => this.formatNumber(minutes))
    },

    closeSidebar () {
      this.$emit('sidebar', false)
    },

    updateFieldStatus (field) {
      this.errors[field].touched = true
      this.errors[field].empty = this.form[field].length === 0
    },

    isWeekend (date) {
      const day = date.getDay()
      return day === 6 || day === 0
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
  computed: {
    ...mapGetters[USERS]
  },
  watch: {
    sidebarVisible () {
      this.resetErrors()
    },
    editingTalk () {
      const date = new Date(this.editingTalk.scheduledAt)

      Object.assign(this.form, this.editingTalk)
      Object.keys(this.errors).forEach(error => {
        this.errors[error].touched = true
        this.errors[error].empty = false
      })

      this.form.datetime = {
        date,
        hours: this.formatNumber(date.getHours()),
        minutes: this.formatNumber(date.getMinutes())
      }
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
