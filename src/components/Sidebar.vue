<template>
  <md-app-drawer :md-active.sync="syncSidebarVisible">
    <div md-elevation="1">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Nouveau Talk</span>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button md-dense" @click="$emit('sidebarEvent', false)">
            <md-icon>close</md-icon>
          </md-button>
        </div>
      </md-toolbar>
      <talk-form
        @sidebarEvent="syncSidebarVisible = $event"
        :sidebarVisible="sidebarVisible"
        :editingTalk="editingTalk"></talk-form>
    </div>
  </md-app-drawer>
</template>


<script>
import TalkForm from './TalkForm'

export default {
  name: 'sidebar',
  props: ['sidebarVisible', 'editingTalk'],
  components: {
    TalkForm
  },
  computed: {
    syncSidebarVisible: {
      get () {
        return this.sidebarVisible
      },

      set (visible) {
        this.$emit('sidebarEvent', visible)
      }
    }
  }

}
</script>
