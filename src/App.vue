<template>
  <div id="app">
    <md-app>
      <md-app-toolbar md-elevation="3" class="main-toolbar">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">JS-Talks</span>
      </md-app-toolbar>
      <md-app-content>
        <main class="main-content">
          <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
            <div md-elevation="1">
              <md-toolbar class="md-transparent" md-elevation="0">
                <span>Navigation</span>

                <div class="md-toolbar-section-end">
                  <md-button class="md-icon-button md-dense" @click="toggleMenu">
                    <md-icon>keyboard_arrow_left</md-icon>
                  </md-button>
                </div>
              </md-toolbar>
            </div>
          </md-app-drawer>
          <router-view></router-view>
        </main>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'app',
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
