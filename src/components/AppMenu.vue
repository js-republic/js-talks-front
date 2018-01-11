<template>
  <div class="main-toolbar">
      <md-menu md-size="small" md-align-trigger>
        <md-button md-menu-trigger>
          <md-icon>apps</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item>
            <router-link to="/admin">Administrateur</router-link>
          </md-menu-item>
          <md-menu-item>
            <router-link to="/">Talks</router-link>
          </md-menu-item>
          <md-menu-item>
            <router-link to="/agenda">Agenda</router-link>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-menu'
}
</script>

<style lang="scss" scoped>
</style>
