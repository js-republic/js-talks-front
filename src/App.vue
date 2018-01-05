<template>
  <div id="app">
    <md-app>
      <md-app-toolbar md-elevation="3" class="main-toolbar">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>add</md-icon>
        </md-button>
        <span class="md-title">JS-Talks</span>
      </md-app-toolbar>
      <md-app-content>
        <main class="main-content">
          <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
            <div md-elevation="1">
              <md-toolbar class="md-transparent" md-elevation="0">
                <span>Nouveau Talk</span>

                <div class="md-toolbar-section-end">
                  <md-button class="md-icon-button md-dense" @click="toggleMenu">
                    <md-icon>close</md-icon>
                  </md-button>
                </div>
              </md-toolbar>
              <talk-form></talk-form>
            </div>
          </md-app-drawer>
          <router-view></router-view>
        </main>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import TalkForm from './components/TalkForm'

export default {
  name: 'app',
  components: {
    TalkForm
  },
  data: () => ({
    menuVisible: false
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
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
    .main-content {
      padding: 2rem;
    }
  }
</style>
