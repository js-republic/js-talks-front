import Vuex from 'vuex'
import Vue from 'vue'
import { ADD_TALK, EDIT_TALK, DELETE_TALK, SET_TALKS } from '@/store/types'
import { state, mutations } from '@/store/mutations'
import { actions } from '@/store/actions'

Vue.use(Vuex)
let store

describe('ADD_TALK', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      actions,
      mutations,
      state,
      strict: true
    })
  })

  it('should add the talk to the list', () => {
    store.commit(ADD_TALK, { id: '99' })
    const addedTalk = store.state.talks.find(talk => talk.id === '99')
    expect(addedTalk).not.toBe(undefined)
  })
})

describe('DELETE_TALK', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      actions,
      mutations,
      state,
      strict: true
    })
  })

  it('should delete the talk from list', () => {
    store.commit(ADD_TALK, { id: '99' })
    store.commit(DELETE_TALK, '99')
    const addedTalk = store.state.talks.find(talk => talk.id === '99')
    expect(addedTalk).toBe(undefined)
  })
})

describe('EDIT_TALK', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      actions,
      mutations,
      state,
      strict: true
    })
  })

  it('should edit the talk in the list', () => {
    store.commit(ADD_TALK, {
      id: '99',
      title: 'Testing is the way'
    })
    store.commit(EDIT_TALK, {
      talkId: '99',
      formData: { id: '99', title: 'Testing is evil' }
    })

    const editedTalk = store.state.talks.find(talk => talk.title === 'Testing is evil' && talk.id === '99')
    expect(editedTalk).not.toBe(undefined)
  })
})

describe('SET_TALKS', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      actions,
      mutations,
      state,
      strict: true
    })
  })

  it('should replace the list', () => {
    const talks = [
      { id: '99', title: 'Testing is the way' },
      { id: '100', title: 'Testing is one way' },
      { id: '101', title: 'Testing is your way' }
    ]
    store.commit(ADD_TALK, { id: '99', title: 'Testing is the way' })
    store.commit(SET_TALKS, talks)
    expect(store.state.talks.length).toBe(3)
  })
})
