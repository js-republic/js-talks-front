import * as types from './types'

export default {
  [types.ADD_TALK] (state, formData) {
    console.log('formData: ', formData)
    // TODO post it with axios, if 200 send it to state
    state.jsTalkData.push(formData)
  }
}
