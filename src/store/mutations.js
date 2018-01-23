import * as types from './types'

export const state = {
  talks: [
    {
      id: '1',
      title: 'Il jouait du piano debout',
      authorId: '1',
      likes: 11,
      type: 'proposal',
      speakerId: '1',
      description: 'Une brêve description du pourquoi et du comment de cette manière de jouer du piano',
      duration: 60,
      scheduledAt: new Date().getTime(),
      support: 'Ecran tv'
    },
    {
      id: '2',
      title: 'Voila voila',
      authorId: '1',
      likes: 11,
      type: 'request',
      speakerId: '1',
      description: 'Une brêve description du pourquoi et du comment de cette manière de jouer du piano'
    },
    {
      id: '3',
      title: 'Un event comme un autre',
      authorId: '1',
      likes: 11,
      type: 'event',
      speakerId: '1',
      description: 'Geeker c est bien',
      duration: 60,
      scheduledAt: new Date().getTime(),
      support: 'Ecran tv'
    },
    {
      id: '4',
      title: 'Un event comme aucun autre',
      authorId: '1',
      likes: 11,
      type: 'event',
      speakerId: '1',
      description: 'Geeker c est bien',
      duration: 60,
      scheduledAt: new Date().getTime() + 10000000,
      support: 'Ecran tv'
    }
  ],
  loggedUser: {},
  users: [{
    id: '1',
    name: 'Ghafoor',
    firstname: 'Valdo',
    fullname: 'Valdo Ghafoor',
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
    const talk = state.talks.find(talk => talk.id === talkId)
    Object.assign(talk, formData)
  },

  [types.GET_LAST] (state) {
    const sessionJSON = localStorage.getItem('loggedUser')
    if (sessionJSON) {
      state.loggedUser = JSON.parse(sessionJSON)
    }
  },

  [types.FEEDBACK] (state, { talkId, isPositive }) {
    const talk = state.talks.find(talk => talk.id === talkId)
    isPositive
      ? talk.likes++
      : talk.likes--
  },

  [types.SET_TALKS] (state, talks) {
    state.talks = talks
  },

  [types.SET_USER] (state, user) {
    state.loggedUser = user || {}
  },

  [types.UNSET_USER] (state) {
    state.loggedUser = {}
  }
}
