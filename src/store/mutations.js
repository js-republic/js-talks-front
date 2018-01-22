import * as types from './types'

export const state = {
  talks: [
    {
      id: '1',
      title: 'Il jouait du piano debout',
      author: 'France Gall',
      likes: 11,
      proposal: true,
      speakerId: '1',
      description: 'Une brêve description du pourquoi et du comment de cette manière de jouer du piano',
      duration: 60,
      scheduledAt: new Date().getTime(),
      support: 'Ecran tv'
    }
  ],
  loggedUser: {},
  users: [{
    id: '1',
    name: 'Ghafoor',
    firstname: 'Valdo',
    roleLevel: 1
  }]
}

export const mutations = {
  [types.ADD_TALK] (state, formData) {
    state.talks.push({...formData})
    state.talks.splice()
  },
  [types.DELETE_TALK] (state, id) {
    state.talks = state.talks.filter(talk => talk.id !== id)
  },
  [types.EDIT_TALK] (state, { formData, talkId }) {
    let talk = state.talks.find(talk => talk.id === talkId)
    Object.assign(talk, formData)
  },
  [types.SET_TALKS] (state, talks) {
    state.talks = talks
  },
  [types.SET_USER] (state, user) {
    state.loggedUser = user
  },
  [types.UNSET_USER] (state) {
    state.loggedUser = {}
  }
}
