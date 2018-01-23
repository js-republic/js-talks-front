<template>
  <div id="google-signin"></div>
</template>


<script>
import { LOGGED_USER } from '@/store/types'

export default {
  name: 'login',
  methods: {
    async login (googleUser) {
      await this.$store.dispatch('login', googleUser)
      this.$router.push({ path: '/' })
    }
  },
  mounted () {
    if (!this.$store.getters[LOGGED_USER].logged) {
      gapi.signin2.render('google-signin', {
        onsuccess: this.login,
        onfailure: this.login
      })
    }
  }
}
</script>

<style lang="scss">
  #google-signin {
    display: inline-block;
  }
</style>
