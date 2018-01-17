import Vue from 'vue'
import TalkList from '@/components/TalkList'

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
