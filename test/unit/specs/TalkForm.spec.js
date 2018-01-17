import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, state } from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'
import TalkForm from '@/components/TalkForm'

Vue.use(Vuex)

const Constructor = Vue.extend(TalkForm)
let vm, store

describe('addTalk', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      mutations,
      state,
      actions,
      getters,
      strict: true
    })
    vm = new Constructor({ store })
    vm.resetForm()
  })

  it('should add the talk to the store', () => {
    vm.form.title = 'Testing is your way'
    vm.addTalk()

    const addedTalk = vm.$store.state.talks.find(talk => talk.title === 'Testing is your way')
    expect(addedTalk).not.toBe(undefined)
  })
})

describe('resetForm', () => {
  beforeEach(() => {
    vm = new Constructor()
    vm.resetForm()
  })

  it('should empty the form fields', () => {
    const fieldReset = Object.keys(vm.form)
      .some(field => !(
          (field === 'proposal' &&
            field === true) ||
            field === ''
      ))
    expect(fieldReset).toBe(true)
  })
})

describe('isWeekend', () => {
  beforeEach(() => {
    vm = new Constructor()
    vm.resetForm()
  })

  it('should detect Weekend', () => {
    expect(vm.isWeekend(new Date(1515901244994))).toBe(true)
  })

  it('should not detect Weekend', () => {
    expect(vm.isWeekend(new Date(1516015244994))).not.toBe(true)
  })
})

describe('updateFieldStatus', () => {
  beforeEach(() => {
    vm = new Constructor()
    vm.resetForm()
  })

  it('should not find any error', () => {
    vm.form.title = 'Un titre interessant'
    vm.updateFieldStatus('title')

    expect(vm.errors.title.empty).not.toBe(true)
  })

  it('should find an empty error', () => {
    vm.form.title = ''
    vm.updateFieldStatus('title')

    expect(vm.errors.title.empty).toBe(true)
  })
})

describe('isInputInvalid', () => {
  beforeEach(() => {
    vm = new Constructor()
    vm.resetForm()
  })

  it('should be invalid', () => {
    vm.errors.title.touched = true
    vm.errors.title.empty = true

    expect(vm.isInputInvalid('title')).toBe(true)
  })

  it('should not be invalid', () => {
    vm.errors.title.touched = false
    vm.errors.title.empty = true

    expect(vm.isInputInvalid('title')).not.toBe(true)
  })
})

describe('isFormInvalid', () => {
  beforeEach(() => {
    vm = new Constructor()
    vm.resetForm()
  })

  it('should not be invalid', () => {
    expect(vm.isFormInvalid('title')).toBe(true)
  })

  it('should be invalid', () => {
    vm.errors.title.touched = true
    vm.errors.title.empty = true

    expect(vm.isFormInvalid()).toBe(true)
  })
})

describe('sidebarVisible', () => {
  beforeEach(() => {
    vm = new Constructor({ propsData: { sidebarVisible: true } })
  })

  it('should reset form', () => {
    expect(vm.form.title === '').toBe(true)
  })

  it('should be invalid', () => {
    vm.errors.title.touched = true
    vm.errors.title.empty = true

    expect(vm.isFormInvalid()).toBe(true)
  })
})
