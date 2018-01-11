import * as types from './types'
import axios from 'axios'

export default {
  async addTalk ({ commit }, formData) {
    try {
      await axios.post('url_to_server', formData)

      commit(types.ADD_TALK, formData)
    } catch (error) {
      console.log(error)
    }
  },
  async getTalks ({ commit }) {
    try {
      await axios.get('url_to_server')

      commit(types.SET_TALKS)
    } catch (error) {
      console.log(error)
    }
  },
  async editTalks ({ commit }, formData) {
    // Place the edit call here

  },
  async deleteTalk ({ commit }, id) {
    try {
      await axios.delete('url_to_server', id)

      commit(types.DELETE_TALK, id)
    } catch (error) {
      console.log(error)
    }
  }
}
