<template>
  <div id="app">
    <md-app>
      <md-app-toolbar md-elevation="3" v-if="LOGGED_USER.logged">
        <top-header></top-header>
      </md-app-toolbar>
      <md-app-content>
        <main class="main-content">
          <sidebar
            :sidebarVisible="sidebarVisible"
            :editingTalk="editingTalk"
            @editTalk="editingTalk = $event"
            @sidebarEvent="sidebarVisible = $event"
            v-if="LOGGED_USER.logged"
          ></sidebar>

          <router-view @editTalk="editingTalk = $event"></router-view>

          <md-button
            v-if="LOGGED_USER.logged"
            class="md-fab md-plain"
            @click="sidebarVisible = true"
          >
            <md-icon>add</md-icon>
          </md-button>
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
    sidebarVisible: false,
    editingTalk: null
  }),
  computed: {
    ...mapGetters([LOGGED_USER])
  },
  watch: {
    sidebarVisible () {
      if (!this.sidebarVisible) {
        this.editingTalk = null
      }
    },

    editingTalk () {
      if (this.editingTalk) {
        this.sidebarVisible = true
      }
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
  #app,
  .md-app,
  .md-app-container,
  .md-app-content,
  .main-content {
    height: 100%;
    overflow: hidden;
  }

  #app {
    display: flex;
    flex-flow: column;

    > * {
      height: 100%;
    }

    .md-fab {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .md-app-scroller {
      overflow: auto;
    }

    .md-app-content {
      padding: 0;
    }

    .main-content {
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a.links:hover {
      text-decoration: none;
    }
  }
</style>
