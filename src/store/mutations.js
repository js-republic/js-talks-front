import { ADD_TALK, DELETE_TALK, EDIT_TALK, SET_TALKS } from './types'

export const state = {
  talks: [
    {
      id: '1',
      title: 'Il jouait du piano debout',
      author: 'France Gall',
      likes: 11,
      type: 'Talk',
      speaker: 'France Gall',
      description: 'Une brêve description du pourquoi et du comment de cette manière de jouer du piano',
      duration: 60,
      scheduledAt: new Date().getTime(),
      support: 'Ecran tv'
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
    state.talks = state.talks.filter(talk => talk.id !== id)
  },
  [EDIT_TALK] (state, { formData, talkId }) {
    const talk = state.talks.find(talk => talk.id === talkId)
    Object.assign(talk, formData)
  },
  [SET_TALKS] (state, talks) {
    state.talks = talks
  }
}
