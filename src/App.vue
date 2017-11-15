<template>
<div id="app">
  <md-whiteframe md-elevation="3" class="main-toolbar">
    <md-toolbar>
      <div class="md-toolbar-container">
        <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title">JS-Talks</h2>
  
        <span style="flex: 1"></span>
  
        <span>> Mathieu</span>
        <md-button class="md-icon-button">
          <md-icon>view_module</md-icon>
        </md-button>
      </div>
    </md-toolbar>
  </md-whiteframe>
  
  <main class="main-content">
    <md-sidenav class="md-left md-fixed" ref="sidebar">  
    </md-sidenav>
    <router-view></router-view>
  </main>
</div>
</template>

<script>
export default {
  name: 'app'
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
  .main-content{
    padding: 2rem;
  }
}
</style>
