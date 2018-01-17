import { TALKS, TALK_EVENTS, LOGGED_USER } from '@/store/types'
import getters from '@/store/getters'

let state

describe('TALKS', () => {
  beforeEach(() => {
    state = {
      talks: [
        {
          id: '1',
          title: 'Il jouait du piano debout',
          author: 'France Gall',
          likes: 11,
          proposal: true,
          speaker: 'France Gall',
          description: 'Une brêve description du pourquoi et du comment de cette manière de jouer du piano',
          duration: 60,
          scheduledAt: new Date().getTime(),
          support: 'Ecran tv'
        }
      ]
    }
  })

  it('should return all the talks', () => {
    expect(getters[TALKS](state)).toBe(state.talks)
  })
})


describe('TALK_EVENTS', () => {
  beforeEach(() => {
    state = {
      talks: [
        {
          id: '1',
          title: 'Il jouait du piano debout',
          author: 'France Gall',
          likes: 11,
          proposal: true,
          speaker: 'France Gall',
          description: 'Une brêve description du pourquoi et du comment de cette manière de jouer du piano',
          duration: 60,
          scheduledAt: new Date().getTime(),
          support: 'Ecran tv'
        }
      ]
    }
  })

  it('should format the talks to the right structure', () => {
    const events = getters[TALK_EVENTS](state)
    expect(events
      .every(event => event.start && event.end && event.title && event.id)
    ).toBe(true)
  })
})

describe('LOGGED_USER', () => {
  beforeEach(() => {
    state = {
      loggedUser: {
        name: 'Ghafoor',
        firstname: 'Valdo',
        token: '',
        logged: true
      }
    }
  })

  it('should return the logged user', () => {
    expect(getters[LOGGED_USER](state)).toBe(state.loggedUser)
  })
})
