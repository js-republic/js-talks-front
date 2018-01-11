<template>
  <div id="app">
    <md-app v-if="logged">
      <md-app-toolbar md-elevation="3">
        <top-header @toggle="toggleSidebar()"></top-header>
      </md-app-toolbar>
      <md-app-content>
        <main class="main-content">
          <sidebar :sidebarVisible="sidebarVisible" @toggle="toggleSidebar()"></sidebar>
          <router-view></router-view>
        </main>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import * as types from '@/store/types'

export default {
  name: 'app',
  components: {
    TopHeader: () => import('./components/TopHeader'),
    Sidebar: () => import('./components/Sidebar')
  },
  data: () => ({
    sidebarVisible: false
  }),
  methods: {
    toggleSidebar () {
      this.sidebarVisible = !this.sidebarVisible
    }
  },
  computed: {
    logged () {
      return this.$store.getters[types.LOGGED_USER].logged
    }
  }
}
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: md-get-palette-color(blue, A200), // The primary color of your application
    accent: md-get-palette-color(red, A200) // The accent and secondary color
  ));

  @import "~vue-material/dist/theme/all"; // Apply the theme

  html,
  body,
  #app {
    height: 100%;
    overflow: hidden;
  }
  #app {
    display: flex;
    flex-flow: column;
    > * {
      height: 100%;
    }
    .main-content {
      padding: 2rem;
    }
  }
</style>
