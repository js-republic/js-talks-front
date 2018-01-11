import * as types from './types'

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
      lenght: 11,
      scheduledAt: new Date().toDateString(),
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
  [types.ADD_TALK] (state, formData) {
    state.talks.push(formData)
  },
  [types.DELETE_TALK] (state, id) {
    this.talks.find(talk => talk.id === id)
  },
  [types.EDIT_TALK] (state, { formData, talkId }) {
    const talk = this.talks.find(talk => talk.id === talkId)
    Object.assign(talk, formData)
  },
  [types.SET_TALKS] (state, talks) {
    this.talks = talks
  }
}
