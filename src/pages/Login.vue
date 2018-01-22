<template>
  <div id="google-signin"></div>
</template>


<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  methods: {
    ...mapActions(['login'])
  },
  mounted () {
    gapi.signin2.render('google-signin', {
      onsuccess: this.login,
      onfailure: this.login
    })
  }
}
</script>

<style lang="scss">
  #google-signin {
    display: inline-block;
  }
</style>
