import { TALKS, TALK_EVENTS, LOGGED_USER, USERS } from './types'

export default {
  [TALKS] (state) {
    return state.talks
  },
  [TALK_EVENTS] (state) {
    const MILLISEC_IN_A_MINUTE = 60 * 1000

    return state.talks.map(talk => ({
      id: talk.id,
      title: talk.title,
      start: talk.scheduledAt,
      end: talk.scheduledAt + (talk.duration * MILLISEC_IN_A_MINUTE)
    }))
  },
  [LOGGED_USER] (state) {
    return state.loggedUser
  },
  [USERS] (state) {
    return state.users
  }
}
