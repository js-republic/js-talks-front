import * as types from './types'

export default {
  // TODO remove at first action
  [types.MY_ACTION] (store, str) {
    store.commit(types.MY_MUTATION, str)
  }
}
