import types from './types'

export default {
  [types.TALKS] (state) {
    return state.talks
  },
  [types.LOGGED_USER] (state) {
    return state.loggedUser
  }
}
