import * as types from './types'
import axios from 'axios'

export default {
  async addTalk ({ commit, state }, formData) {
    try {
      formData.author = state.loggedUser.firstname
      formData.likes = 0
      await axios.put('url_to_server', formData)
      commit(types.ADD_TALK, formData)
    } catch (error) {
      console.log(error)
    }
  },
  async login ({ commit }, credentials) {
    try {
      const response = await axios.post('url_to_server', credentials)
      commit(types.SET_USER, response)
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
  async editTalk ({ commit }, { formData, talkId }) {
    try {
      await axios.patch(`url_to_server/${talkId}`)
    } catch (error) {
      console.log(error)
    }
  },
  async feedback ({ commit }, { talkId, isPositive }) {
    try {
      await axios.post(`url_to_server/${talkId}`, isPositive)
    } catch (error) {
      console.log(error)
    }
  },
  async deleteTalk ({ commit }, talk) {
    try {
      await axios.delete(`url_to_server/${talk.id}`)
      commit(types.DELETE_TALK, talk.id)
    } catch (error) {
      console.log(error)
    }
  }
}
