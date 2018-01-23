<template>
  <div id="calendar"></div>
</div>
</template>


<script>
/* eslint-disable no-unused-vars */
import fullCalendar from 'fullcalendar'
import { mapGetters } from 'vuex'
import $ from 'jquery'
import { TALK_EVENTS } from '@/store/types'

export default {
  name: 'talks-agenda',
  data: () => ({
    loaded: false
  }),
  mounted () {
    $('#calendar').fullCalendar({
      weekends: false,
      events: this.$store.getters[TALK_EVENTS],
      eventTextColor: '#FFFFFF',
      eventBackgroundColor: '#03A9F4',
      locale: 'fr',
      timeFormat: '(HH:mm)',
      eventBorderColor: '#000',
      displayEventEnd: true
    })
  }
}
</script>

<style lang="scss">
  @import "../../static/fullcalendar.min.css";

  .fc {
    .fc-button {
      background: transparent;

      &.fc-state-down {
         box-shadow:inset 0 1px 2px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05);
      }

      &.fc-state-disabled {
        cursor: not-allowed;
      }
    }

    h2 {
      text-transform: uppercase;
    }

    .fc-event {
      font-size: 1em !important;
      border-radius: 2px;
      border: none;
      margin: 1px 0;
      padding: 3px;

      &:hover {
        text-decoration: none;
      }
    }

    .fc-view {
      z-index: 0;
    }

    td.fc-today {
      background: #E1F5FE;
      border: none !important;
      border-top: 1px solid #ddd !important;
      font-weight: bold;
    }
  }
</style>
