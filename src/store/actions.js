import * as types from './types'

export default {
  addTalk ({ commit }, formData) {
    commit(types.ADD_TALK, formData)
  }
}
