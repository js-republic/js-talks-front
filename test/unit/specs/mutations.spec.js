import { ADD_TALK, EDIT_TALK, DELETE_TALK, SET_TALKS } from '@/store/types'
import { mutations } from '@/store/mutations'

let state

describe('ADD_TALK', () => {
  beforeEach(() => {
    state = {
      talks: [],
      loggedUser: {}
    }
  })

  it('should add the talk to the list', () => {
    mutations[ADD_TALK](state, { id: '99' })
    const addedTalk = state.talks.find(talk => talk.id === '99')
    expect(addedTalk).not.toBe(undefined)
  })
})

describe('DELETE_TALK', () => {
  beforeEach(() => {
    state = {
      talks: [],
      loggedUser: {}
    }
  })

  it('should delete the talk from list', () => {
    mutations[ADD_TALK](state, { id: '99' })
    mutations[DELETE_TALK](state, '99')
    const addedTalk = state.talks.find(talk => talk.id === '99')
    expect(addedTalk).toBe(undefined)
  })
})

describe('EDIT_TALK', () => {
  beforeEach(() => {
    state = {
      talks: [],
      loggedUser: {}
    }
  })

  it('should edit the talk', () => {
    mutations[ADD_TALK](state, {
      id: '99',
      title: 'Testing is the way'
    })

    mutations[EDIT_TALK](state, {
      talkId: '99',
      formData: { id: '99', title: 'Testing is evil' }
    })

    const editedTalk = state.talks.find(talk => talk.title === 'Testing is evil' && talk.id === '99')
    expect(editedTalk).not.toBe(undefined)
  })
})

describe('SET_TALKS', () => {
  beforeEach(() => {
    state = {
      talks: [],
      loggedUser: {}
    }
  })

  it('should replace the list', () => {
    const talks = [
      { id: '99', title: 'Testing is the way' },
      { id: '100', title: 'Testing is one way' },
      { id: '101', title: 'Testing is your way' }
    ]
    mutations[ADD_TALK](state, { id: '99', title: 'Testing is the way' })
    mutations[SET_TALKS](state, talks)
    expect(state.talks.length).toBe(3)
  })
})
