import { TALKS, TALK_EVENTS, LOGGED_USER, USERS } from './types'
import { MS_IN_MINUTE } from '@/constants'

export default {
  [TALKS] (state) {
    return state.talks
  },
  [TALK_EVENTS] (state) {
    return state.talks.map(talk => ({
      id: talk.id,
      title: talk.title,
      start: talk.scheduledAt,
      end: talk.scheduledAt + (talk.duration * MS_IN_MINUTE)
    }))
  },
  [LOGGED_USER] (state) {
    return state.loggedUser
  },
  [USERS] (state) {
    return state.users
  }
}
