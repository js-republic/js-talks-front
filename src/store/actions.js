import * as types from './types'
import { SERVER_URL } from '@/constants'
import axios from 'axios'

export default {
  async addTalk ({ commit, state }, { formData }) {
    try {
      formData.author = state.loggedUser.firstname
      formData.likes = 0
      // await axios.put(SERVER_URL, formData)
      commit(types.ADD_TALK, formData)
    } catch (error) {
      console.log(error)
    }
  },
  async login ({ commit }, credentials) {
    try {
      const response = await axios.post(SERVER_URL, credentials)
      commit(types.SET_USER, response)
    } catch (error) {
      console.log(error)
    }
  },
  async getTalks ({ commit }) {
    try {
      // await axios.get(SERVER_URL)
      commit(types.SET_TALKS)
    } catch (error) {
      console.log(error)
    }
  },
  async editTalk ({ commit }, { formData, talkId }) {
    try {
      // await axios.patch(`${SERVER_URL}/${talkId}`)
      commit(types.EDIT_TALK, { formData, talkId })
    } catch (error) {
      console.log(error)
    }
  },
  async feedback ({ commit }, { talkId, isPositive }) {
    try {
      await axios.post(`${SERVER_URL}/${talkId}`, isPositive)
    } catch (error) {
      console.log(error)
    }
  },
  async deleteTalk ({ commit }, talk) {
    try {
      await axios.delete(`${SERVER_URL}/${talk.id}`)
      commit(types.DELETE_TALK, talk.id)
    } catch (error) {
      console.log(error)
    }
  }
}
