<template>
  <md-app-drawer :md-active.sync="syncSidebarVisible">
    <div md-elevation="1">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span>Nouveau Talk</span>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button md-dense" @click="$emit('toggle')">
            <md-icon>close</md-icon>
          </md-button>
        </div>
      </md-toolbar>
      <talk-form></talk-form>
    </div>
  </md-app-drawer>
</template>


<script>
export default {
  name: 'sidebar',
  props: ['sidebarVisible'],
  components: {
    TalkForm: () => import('./TalkForm')
  },
  computed: {
    syncSidebarVisible: {
      get () {
        return this.sidebarVisible
      },
      set () {
        this.$emit('toggle')
      }
    }
  }

}
</script>
