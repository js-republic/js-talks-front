import * as types from './types'
import { SERVER_URL } from '@/constants'
import axios from 'axios'

export default {
  async addTalk ({ commit, state }, { formData }) {
    try {
      formData.author = state.loggedUser.firstname
      formData.likes = 0
      await axios.put(SERVER_URL, formData)
      commit(types.ADD_TALK, formData)
    } catch (error) {
      console.log(error)
    }
  },

  async login ({ commit, dispatch }, googleUser) {
    try {
      const profile = googleUser.getBasicProfile()

      const user = {
        fullname: profile.getName(),
        firstname: profile.getGivenName(),
        name: profile.getFamilyName(),
        email: profile.getEmail(),
        token: googleUser.getAuthResponse().id_token,
        logged: true
      }
      // const response = await axios.post(`${SERVER_URL}/login`, user)
      commit(types.SET_USER, user)
      dispatch('saveSession', user)
    } catch (error) {
      console.log(error)
    }
  },

  saveSession (args, user) {
    if (user) {
      localStorage.setItem('loggedUser', JSON.stringify(user))
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
      // await axios.post(`${SERVER_URL}/${talkId}`, isPositive)
      commit(types.FEEDBACK, { talkId, isPositive })
    } catch (error) {
      console.log(error)
    }
  },

  async deleteTalk ({ commit }, talk) {
    try {
      // await axios.delete(`${SERVER_URL}/${talk.id}`)
      commit(types.DELETE_TALK, talk.id)
    } catch (error) {
      console.log(error)
    }
  }
}
