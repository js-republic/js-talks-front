import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'
import { USERS } from '@/store/types'
import TalkList from '@/components/TalkList'

Vue.use(Vuex)
const Constructor = Vue.extend(TalkList)
let vm

describe('formatDate', () => {
  beforeEach(() => {
    vm = new Constructor()
  })

  it('should return formatted date', () => {
    expect(vm.formatDate(Date.now())).toBe(new Date().toLocaleString().slice(0, -3))
  })
})

describe('getUserById', () => {
  beforeEach(() => {
    vm = new Constructor({ store })
  })

  it('should find the user', () => {
    const username = `${vm.$store.getters[USERS][0].firstname} ${vm.$store.getters[USERS][0].name}`
    expect(vm.getUserById('1')).toBe(username)
  })
})

describe('openDeleteDialog', () => {
  beforeEach(() => {
    vm = new Constructor()
  })

  it('should not open delete dialog', () => {
    vm.openDeleteDialog()
    expect(vm.showDialog).not.toBe(true)
  })

  it('should open delete dialog', () => {
    vm.openDeleteDialog({})
    expect(vm.showDialog).toBe(true)
  })
})
