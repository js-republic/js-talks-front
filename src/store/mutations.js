import { ADD_TALK, DELETE_TALK, EDIT_TALK, SET_TALKS } from './types'

export const state = {
  talks: [
    {
      id: '1',
      title: 'aaa',
      author: 'aaa',
      likes: 11,
      type: 'aaa',
      speaker: 'aaa',
      description: 'aaa',
      duration: 60,
      scheduledAt: new Date().getTime(),
      supportAndVideo: 'aaa'
    }
  ],
  loggedUser: {
    name: 'Ghafoor',
    firstname: 'Valdo',
    token: '',
    logged: true
  }
}

export const mutations = {
  [ADD_TALK] (state, formData) {
    state.talks.push(formData)
  },
  [DELETE_TALK] (state, id) {
    this.talks.find(talk => talk.id === id)
  },
  [EDIT_TALK] (state, { formData, talkId }) {
    const talk = this.talks.find(talk => talk.id === talkId)
    Object.assign(talk, formData)
  },
  [SET_TALKS] (state, talks) {
    this.talks = talks
  }
}
