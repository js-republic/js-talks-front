<template>
  <div id="app">
    <md-app v-if="LOGGED_USER.logged">
      <md-app-toolbar md-elevation="3">
        <top-header @toggleSidebar="sidebarVisible = !sidebarVisible"></top-header>
      </md-app-toolbar>
      <md-app-content>
        <main class="main-content">
          <sidebar :sidebarVisible="sidebarVisible" @sidebarVisible="sidebarVisible = $event"></sidebar>
          <router-view></router-view>
        </main>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { LOGGED_USER } from '@/store/types'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    TopHeader: () => import('./components/TopHeader'),
    Sidebar: () => import('./components/Sidebar')
  },
  data: () => ({
    sidebarVisible: false
  }),
  computed: {
    ...mapGetters([LOGGED_USER])
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
    a.links:hover {
      text-decoration: none;
    }
  }
</style>
