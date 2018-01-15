<template>
  <div class="main-toolbar">
    <md-button class="md-icon-button" @click="$emit('toggle')">
      <md-icon>add</md-icon>
    </md-button>
    <span class="md-title">
      <router-link class="links" to="/">JS-Talks</router-link>
    </span>

    <div class="menus-container">
      <md-button class="md-dense">
        <md-icon>keyboard_arrow_right</md-icon>
        <span>{{LOGGED_USER.firstname}}</span>
      </md-button>
      <app-menu />
    </div>
  </div>
</template>

<script>
import { LOGGED_USER } from '../store/types'
import { mapGetters } from 'vuex'
import AppMenu from './AppMenu'

export default {
  name: 'top-header',
  computed: {
    ...mapGetters([LOGGED_USER])
  },
  components: { AppMenu }
}
</script>

<style lang="scss" scoped>
  .main-toolbar, {
    display: flex;
    align-items: center;
    width: 100%;

      .menus-container {
        display: flex;
        align-items: center;
        margin-left: auto;
      }
  }

  .md-title a {
    color: inherit;

    &:hover {
      color: inherit;
    }
  }

  .md-list-item-default md-list-item-container md-button-clean {
    background-color: rgba(255, 255, 255, 0.3) !important;
  }

  a.item-link {
    color: black;
  }

</style>
